/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'portfolio',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    // Create secrets for each environment variable
    const hostedZoneSecret = new sst.Secret('HostedZoneId');
    const upstashRedisUrlSecret = new sst.Secret('UpstashRedisRestUrl');
    const upstashRedisTokenSecret = new sst.Secret('UpstashRedisRestToken');
    const convexUrlSecret = new sst.Secret('ConvexUrl');
    const convexDeploymentSecret = new sst.Secret('ConvexDeployment');
    const projectPlannerAiIdSecret = new sst.Secret('ProjectPlannerAiId');

    // Create the Remix site with domain configuration
    const site = new sst.aws.Nextjs('MyWeb', {
      link: [
        hostedZoneSecret,
        upstashRedisUrlSecret,
        upstashRedisTokenSecret,
        convexUrlSecret,
        convexDeploymentSecret,
        projectPlannerAiIdSecret,
      ],
      environment: {
        UPSTASH_REDIS_REST_URL: upstashRedisUrlSecret.value,
        UPSTASH_REDIS_REST_TOKEN: upstashRedisTokenSecret.value,
        NEXT_PUBLIC_CONVEX_URL: convexUrlSecret.value,
        CONVEX_DEPLOYMENT: convexDeploymentSecret.value,
        NEXT_PUBLIC_PROJECT_PLANNER_AI_ID: projectPlannerAiIdSecret.value,
      },
      domain: {
        name: 'hosnaqasmei.com',
        aliases: ['www.hosnaqasmei.com'],
        dns: sst.aws.dns({ zone: hostedZoneSecret.value }),
      },
    });

    return {
      siteUrl: site.url,
    };
  },
});
