'use client';

import Link from 'next/link';

const MegaMenu = ({ sections }) => {
  return (
    <div className="absolute  transform -translate-x-1/2 top-full pt-2 w-full  min-w-[600px] animate-fadeIn z-[10100] pointer-events-auto">
      <div className="bg-white text-black rounded-lg shadow-2xl border border-gray-100 p-6 z-[10100] relative">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Image Card */}
          <Link href="/about-us" className="relative rounded-lg overflow-hidden group cursor-pointer block h-full min-h-[200px]">
            <img
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/information.png"
              alt="About Kalinga"
              className="w-full h-full object-cover"
            />
            {/* Overlay text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold text-lg">About Kalinga</p>
            </div>
            {/* Red arrow icon in top right */}
            <div className="absolute top-3 right-3 w-8 h-8 bg-[var(--button-red)] rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          {/* Right Columns - Sections */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="block text-sm text-gray-600 hover:text-red-600 hover:pl-2 transition-all duration-200 normal-case"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

