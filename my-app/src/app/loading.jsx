'use client';

import React from 'react';
import Image from 'next/image';
import { getLogoSrc } from './config/contact-info';

export default function Loading() {
    const logoSrc = getLogoSrc('secondary');

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center">
                {/* Animated Logo Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 animate-logo-flash">
                    <Image
                        src={logoSrc}
                        alt="Kalinga University"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Loading Text */}
                <div className="mt-8 flex items-center gap-1">
                    <span className="text-[var(--dark-blue)] font-medium tracking-widest uppercase text-sm">Loading</span>
                    <span className="flex gap-1">
                        <span className="w-1 h-1 bg-[var(--red)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1 h-1 bg-[var(--red)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1 h-1 bg-[var(--red)] rounded-full animate-bounce"></span>
                    </span>
                </div>
            </div>

            <style jsx global>{`
        @keyframes logo-flash {
          0% {
            opacity: 0.5;
            transform: scale(0.9);
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
            filter: brightness(1.5) drop-shadow(0 0 20px rgba(151, 43, 40, 0.4));
          }
          100% {
            opacity: 0.5;
            transform: scale(0.9);
            filter: brightness(1);
          }
        }
        .animate-logo-flash {
          animation: logo-flash 2s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
}
