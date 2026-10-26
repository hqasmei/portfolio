// The most-watched videos, picked by hand. YouTube has no keyless way to sort a
// channel by views, so the list lives here; reorder or swap IDs as it changes.
// `views` is a fallback snapshot (Oct 2026); the build refreshes it when it can.
// Titles are trimmed versions of the YouTube ones, so each fits on one line.
const POPULAR = [
  {
    id: '3pTPcyUJx-Q',
    title: 'Build a Responsive Side Navbar with Submenus',
    published: '2023-10-08',
    views: 76995,
  },
  {
    id: '7gnVzj_nMJw',
    title: 'Build and Deploy a Personal Portfolio Website',
    published: '2023-01-30',
    views: 51312,
  },
  {
    id: '7dSOsUNTxJE',
    title: 'Build a Professional Landing Page',
    published: '2023-01-20',
    views: 37167,
  },
];

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: Date;
  views: number;
}

// The watch page embeds an exact `"viewCount":"123"`. If YouTube changes that
// or the fetch fails, the snapshot above is used and the build carries on.
async function fetchViews(id: string): Promise<number | null> {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
      headers: { 'Accept-Language': 'en-US' },
    });
    if (!res.ok) return null;
    const match = (await res.text()).match(/"viewCount":"(\d+)"/);
    return match ? Number(match[1]) : null;
  } catch {
    return null;
  }
}

export async function getPopularVideos(): Promise<Video[]> {
  return Promise.all(
    POPULAR.map(async (video) => ({
      id: video.id,
      title: video.title,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      // mqdefault is 16:9; hqdefault is 4:3 with letterbox bars.
      thumbnail: `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`,
      published: new Date(video.published),
      views: (await fetchViews(video.id)) ?? video.views,
    })),
  );
}
