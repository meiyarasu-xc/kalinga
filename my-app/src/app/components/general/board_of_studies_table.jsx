"use client";

import React from "react";

export default function BoardOfStudiesTable({
  title = "Board Of Studies",
  description = null,
  columns = ["", "", ""],
  rows = [],
  emptyRows = 4,
  className = "",
}) {
  const hasData = Array.isArray(rows) && rows.length > 0;

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + Description */}
        <div className="mb-6">
          <h2 className="font-stix text-[32px] leading-[42px] text-[var(--button-red)]">
            {title}
          </h2>

          {description && (
            <p className="mt-2 max-w-3xl text-[15px] leading-[26px] text-[var(--light-text-gray)]">
              {description}
            </p>
          )}
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--dark-blue)]">
                  {columns.map((c, idx) => (
                    <th
                      key={idx}
                      className="px-5 py-4 text-sm font-semibold text-white"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {hasData ? (
                  rows.map((r, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-t border-black/10 bg-[#f3f3f3]"
                    >
                      {columns.map((_, cIdx) => (
                        <td
                          key={cIdx}
                          className="px-5 py-4 text-sm text-black/70"
                        >
                          {r[cIdx] ?? ""}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  Array.from({ length: emptyRows }).map((_, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-t border-black/10 bg-[#f3f3f3]"
                    >
                      {columns.map((_, cIdx) => (
                        <td key={cIdx} className="px-5 py-6" />
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}