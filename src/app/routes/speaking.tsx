import SpeakingCard from '@/components/speaking-card';
import config from '@/config';

export function meta() {
  return [
    { title: `Speaking | ${config.name}` },
    {
      name: 'description',
      content:
        'Here are my speaking engagements ranging from conferences to podcasts.',
    },
  ];
}

export default function Speaking() {
  return (
    <main className="flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Speaking</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {config.speaking.map((event, idx) => {
          return (
            <a
              key={idx}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpeakingCard event={event} />
            </a>
          );
        })}
      </div>
    </main>
  );
}
