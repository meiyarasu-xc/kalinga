"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "../general/SectionHeading";

export default function ResearchIntro({
  title,
  subtitle,
  secondarySubtitle,
  description = [],
  imageUrl,
  imageAlt,
  initialVisibleParagraphs = 1,
}) {
  const paragraphs = Array.isArray(description) ? description : [description];
  const [expanded, setExpanded] = useState(false);

  const visibleText = expanded
    ? paragraphs
    : paragraphs.slice(0, initialVisibleParagraphs);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${
            expanded ? "items-start" : "items-center"
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* RED TITLE */}
            <SectionHeading
              title={title}
              subtitle={subtitle}
              titleClassName="!text-[var(--button-red)] !text-left leading-tight"
              subtitleClassName="!text-black !font-semibold !text-left mt-1"
            />

            {/* RED SECONDARY SUBTITLE */}
            {secondarySubtitle && (
              <p className="mt-6 text-[var(--button-red)] font-semibold text-[18px] md:text-[20px]">
                {secondarySubtitle}
              </p>
            )}

            {/* DESCRIPTION */}
            <div className="mt-4 space-y-4">
              {visibleText.map((text, idx) => (
                <p
                  key={idx}
                  className="text-[var(--light-text-gray)] leading-[28px]"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* READ MORE */}
            {paragraphs.length > initialVisibleParagraphs && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-[var(--button-red)] font-semibold hover:underline w-fit"
              >
                {expanded ? "Show Less" : "Read more"}
              </button>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2">
            <div
              className={`relative w-full overflow-visible ${
                expanded ? "min-h-[420px]" : "min-h-[360px]"
              }`}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={520}
                height={420}
                className="w-full h-full object-cover rounded-2xl shadow-lg transform-3d-slant"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}