import React from 'react';

import Link from 'next/link';

import { CONFIG } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="animate-slide-from-down-and-fade-6 pb-20 w-full items-center justify-center">
      <div className="flex flex-row space-x-6 items-center justify-center md:pb-10">
        {CONFIG.socials.map((social, idx) => {
          return (
            <Link
              key={idx}
              href={social.link}
              target="_blank"
              className="cursor-pointer"
            >
              {social.icon}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
