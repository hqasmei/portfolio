// Everything on /work-with-me that you'd want to tweak lives here: offers,
// prices, the process, and how people get in touch.

// Google Calendar appointment schedule on the personal Gmail account
// ("Strategy call with Hosna Qasmei"): weekdays 10–4 PT, 24h notice, max 2/day.
// Edit availability in Google Calendar → Booking pages; the link stays the same.
export const bookingLink =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2dbAKbb2Hf1t1P0Qi5VbiFXX1aY6CaCOgInGen3A0csFzfGXjnqOFBgZ2G1mzo_rhwB4GqOMS4';

// Google Form "HQ Solutions project inquiries" on the personal Gmail account.
// Responses land in a linked Sheet and trigger an email. Builds go through
// this instead of straight to a calendar, so every project gets screened.
export const projectInquiryLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSdWWJwQ_5EbLdDNdXG1VjHlC0dBmnBi4cXLp_GgrkRz6nIOeQ/viewform';

export const company = 'HQ Solutions';
export const companyLegal = 'HQ Solutions LLC';

// Keep descriptions to one line each; the booking page and form carry the
// fine print (invoicing, reply times).
export const consulting = [
  {
    name: 'Strategy call',
    detail: '60 min · $200',
    description: 'Talk through an idea, a tech stack, a codebase, or going AI-first.',
  },
  {
    name: 'Scoping session',
    detail: '$500 · by invitation',
    description: 'A written scope, timeline, and estimate. Credited toward the build.',
  },
];

export const builds = {
  intro: 'Web and mobile apps built by HQ Solutions and shipped in releases you can test along the way. Projects start at $5,000.',
  includes: [
    'Web apps and dashboards',
    'iOS and Android apps',
    'MVPs for new products',
    'AI features in existing products',
  ],
  // Sets expectations before anyone applies; the form does the rest.
  goodFit: [
    'You have a clear problem and a budget for it',
    'You make the decision, or can bring in whoever does',
    'You are comfortable shipping in releases',
  ],
  notFit: ['Not taking equity-only or unpaid spec work'],
};

// `id` is the entry in src/content/projects; its logo, name, and link are reused.
export const caseStudy = {
  id: 'pickfresh',
  description:
    'A marketplace app for buying and selling homegrown food with your neighbors. Built for a client through HQ Solutions, one release at a time.',
};

export const process = [
  { step: 'Apply', description: 'A short questionnaire' },
  { step: 'Intro call', description: 'Free, 20 minutes' },
  { step: 'Scope', description: 'Price and timeline for the first release' },
  { step: 'Build', description: 'Shipped in releases you review' },
  { step: 'Launch', description: 'With support after' },
];
