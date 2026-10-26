export const site = {
  name: 'Hosna Qasmei',
  title: 'Software Engineer',
  // Plain-text only — this feeds <meta description>, og: and twitter: tags,
  // which can't carry links or markup. The version people read is the marked-up
  // one in src/pages/index.astro; keep the two roughly in sync.
  description:
    'Software engineer in Los Angeles. Building software since 2019, mostly at early-stage startups. Currently working on PickFresh.',
  url: 'https://hosnaqasmei.com',
  email: 'hosna.qasmei@gmail.com',
  // Order is deliberate: the ends of the row get read, the middle gets skimmed.
  // GitHub leads (proof of work), Email anchors the end (the action).
  social: [
    { platform: 'GitHub', link: 'https://github.com/hqasmei' },
    { platform: 'YouTube', link: 'https://youtube.com/@hqasmei' },
    { platform: 'Twitch', link: 'https://twitch.tv/hqasmei' },
    { platform: 'X', link: 'https://x.com/hqasmei' },
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/hosnaqasmei' },
    { platform: 'Email', link: 'mailto:hosna.qasmei@gmail.com' },
  ],
};
