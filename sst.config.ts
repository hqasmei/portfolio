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

    new sst.aws.React('MyWeb', {
      link: [hostedZoneSecret],
      domain: {
        name: 'hosnaqasmei.com',
        aliases: ['www.hosnaqasmei.com'],
        dns: sst.aws.dns({ zone: hostedZoneSecret.value }),
      },
    });
  },
});
