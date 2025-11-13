import { ExternalLink } from 'lucide-react';

import { formatDate } from '@/utils';

type Speaking = {
  title: string;
  channel: string;
  link: string;
  date: string;
  location: string;
};

export default function SpeakingCard({ event }: { event: Speaking }) {
  // Extract YouTube video ID from link
  const videoId = event.link.split('v=')[1]?.split('&')[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="group md:hover:bg-muted flex cursor-pointer flex-row items-center justify-between gap-4 rounded-lg px-4 py-1 duration-300 md:py-3">
      <div className="flex flex-row items-center gap-4">
        <img
          src={thumbnailUrl}
          alt={event.title}
          className="h-20 w-36 rounded-lg object-cover shadow"
        />
        <div className="flex flex-col gap-1">
          <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
            <span className="text-muted-foreground text-xs">
              {event.channel}
            </span>
            <span>•</span>
            <span>{event.location}</span>
          </div>
          <h2 className="line-clamp-2 text-sm">{event.title}</h2>
          <time className="text-muted-foreground text-xs">
            {formatDate(event.date)}
          </time>
        </div>
      </div>
      <ExternalLink
        size={16}
        className="scale-0 transform transition-transform duration-300 md:group-hover:scale-100"
      />
    </div>
  );
}
