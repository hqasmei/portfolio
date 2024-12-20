'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CONFIG } from '@/lib/config';

export default function Header() {
  return (
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
      <div className="flex flex-row items-center gap-4">
        <Link
          href="/projects"
          className="text-neutral-400 hover:text-secondary duration-200 transition-all"
        >
          Projects
        </Link>
        <Link
          href="/posts"
          className="text-neutral-400 hover:text-secondary duration-200 transition-all"
        >
          Posts
        </Link>
      </div>
    </header>
  );
}
