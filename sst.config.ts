/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'portfolio',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    // Create secrets for each environment variable
    const hostedZoneSecret = new sst.Secret('HostedZoneId');
    const gaTrackingIdSecret = new sst.Secret('GATrackingId');

    new sst.aws.React('MyWeb', {
      link: [hostedZoneSecret, gaTrackingIdSecret],
      environment: {
        GA_TRACKING_ID: gaTrackingIdSecret.value, 
      },
      domain: {
        name: 'hosnaqasmei.com',
        aliases: ['www.hosnaqasmei.com'],
        dns: sst.aws.dns({ zone: hostedZoneSecret.value }),
      },
    });
  },
});
