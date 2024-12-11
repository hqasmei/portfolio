'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import DialogNavMenu from '@/components/dialog-nav-menu';
import { CONFIG } from '@/lib/config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex flex-row justify-between items-center space-y-0 w-full max-w-3xl animate-slide-from-down-and-fade-1 md:px-6">
        <div className="flex flex-row items-center space-x-3">
          <Image
            src={CONFIG.headshot}
            alt="Hosna Qasmei headshot"
            width={100}
            height={100}
            className="rounded-full h-[48px] w-[48px]"
            priority
          />
          <div className="flex flex-col">
            <span className="font-semibold">{CONFIG.name}</span>
            <span className="text-neutral-400">{CONFIG.title}</span>
          </div>
        </div>
      </header>
      <DialogNavMenu isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-4 items-start">
          {CONFIG.socials.map((social, idx) => {
            return (
              <Link
                onClick={() => setIsOpen(false)}
                href={social.link}
                target="_blank"
                key={idx}
              >
                <div className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 group duration-200">
                  {social.icon}
                  <span>{social.platform}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </DialogNavMenu>
    </>
  );
}
