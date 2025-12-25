"use client";

export default function Organogram() {
  const Node = ({ children, variant = "sand", className = "", layout = "center" }) => {
    const variants = {
      blue: "bg-[var(--dark-blue)] text-white",
      gold: "bg-[var(--card-sandal)] text-[var(--dark-blue)]",
      sand: "bg-[var(--lite-sand)] text-[var(--dark-blue)]",
      white: "bg-white border border-gray-300 text-[var(--dark-blue)]",
    };

    return (
      <div
        className={[
          "org-node rounded-xl shadow-sm",
          "px-4 py-2 text-xs leading-snug",
          "whitespace-normal break-words",
          layout === "stack"
            ? "flex flex-col items-start text-left"
            : "inline-flex items-center justify-center text-center font-semibold",
          variants[variant],
          className,
        ].join(" ")}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-serif">Kalinga University</h2>
        <p className="text-center text-[var(--button-red)] font-semibold tracking-wide mt-1">
          ORGANOGRAM
        </p>

        <div className="org-wrap mt-14">
          <div className="org-chart">
            <ul className="org-level root">
              <li>
                <Node variant="blue" className="w-[220px] text-sm py-2">
                  CHANCELLOR
                </Node>

                <ul className="org-level level-1">
                  {/* LEFT BRANCH */}
                  <li>
                    <Node variant="gold" className="w-[220px] text-sm py-2">
                      VICE CHANCELLOR
                    </Node>

                    <ul className="org-level level-2">
                      <li>
                        <Node>REGISTRAR</Node>
                        <ul className="org-level level-3">
                          <li><Node variant="white">HR DEPARTMENT</Node></li>
                          <li><Node variant="white">EXAM CELL</Node></li>
                          <li><Node variant="white">FINANCE DEPARTMENT</Node></li>
                          <li><Node variant="white">ADMISSION DEPARTMENT</Node></li>
                          <li><Node variant="white">SCHOLARSHIP INCHARGE</Node></li>
                        </ul>
                      </li>

                      <li>
                        <Node>DIRECTOR IQAC</Node>
                        <ul className="org-level level-3">
                          <li><Node variant="white">IIC CELL</Node></li>
                          <li><Node variant="white">IEEE CELL</Node></li>
                          <li><Node variant="white">UBA CELL</Node></li>
                        </ul>
                      </li>

                      <li>
                        <Node>DIRECTOR CCRC</Node>
                        <ul className="org-level level-3">
                          <li><Node variant="white">T&amp;P</Node></li>
                          <li><Node variant="white">CTCD</Node></li>
                          <li><Node variant="white">KIF</Node></li>
                          <li><Node variant="white">KUIIC</Node></li>
                        </ul>
                      </li>

                      {/* DEAN ACADEMIC AFFAIRS (single big box) */}
                      <li>
                        <Node variant="sand" layout="stack" className="w-[260px] px-5 py-4">
                          <div className="w-full text-center font-semibold text-xs mb-2">
                            DEAN ACADEMIC AFFAIRS
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 font-normal">
                            <li>Dean Arts &amp; Humanities</li>
                            <li>Dean Commerce &amp; Management</li>
                            <li>Dean Education</li>
                            <li>Dean IT</li>
                            <li>Dean Law</li>
                            <li>Dean Pharmacy</li>
                            <li>Dean Research</li>
                            <li>Dean Science</li>
                            <li>Dean Technology</li>
                          </ul>
                        </Node>
                      </li>

                      {/* DEAN STUDENT WELFARE (single big box) */}
                      <li>
                        <Node variant="sand" layout="stack" className="w-[260px] px-5 py-4">
                          <div className="w-full text-center font-semibold text-xs mb-2">
                            DEAN STUDENT WELFARE
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 font-normal">
                            <li>Chief Proctor</li>
                            <li>Chief Warden</li>
                            <li>National Student Coordinator</li>
                            <li>International Student Coordinator</li>
                            <li>NCC Coordinator</li>
                            <li>NSS Coordinator</li>
                            <li>YI Coordinator</li>
                            <li>POSH Cell</li>
                          </ul>
                        </Node>
                      </li>
                    </ul>
                  </li>

                  {/* RIGHT BRANCH */}
                  <li>
                    <Node variant="gold" className="w-[220px] text-sm py-2">
                      DIRECTOR GENERAL
                    </Node>

                    <ul className="org-level level-2">
                      <li>
                        <Node>CENTRES OF EXCELLENCES</Node>
                        <ul className="org-level level-3">
                          <li><Node variant="white">TECHNOVIZ</Node></li>
                          <li><Node variant="white">EBLU</Node></li>
                          <li><Node variant="white">BHARAT DRONES</Node></li>
                          <li><Node variant="white">MSMEs</Node></li>
                          <li><Node variant="white">BOSCH</Node></li>
                          <li><Node variant="white">JustAuto</Node></li>
                          <li><Node variant="white">IBM</Node></li>
                        </ul>
                      </li>

                      <li>
                        <Node>CIF</Node>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.org-wrap) {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 12px;
        }

        :global(.org-chart) {
          width: max-content;
          padding: 10px 10px 50px;
        }

        :global(.org-chart ul.org-level) {
          margin: 0;
          padding: 0;
          list-style: none;
          position: relative;
        }

        :global(.org-chart ul.root) {
          display: flex;
          justify-content: center;
          padding-top: 0;
        }

        :global(.org-chart ul.level-1),
        :global(.org-chart ul.level-2) {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 34px;
          padding-top: 44px;
        }

        :global(.org-chart ul.level-3) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding-top: 28px;
        }

        :global(.org-chart li) {
          position: relative;
          text-align: center;
          padding: 0 8px;
        }

        /* CONNECTORS for horizontal rows (level-1 & level-2) */
        :global(.org-chart li > ul.level-1::before),
        :global(.org-chart li > ul.level-2::before) {
          content: "";
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          height: 22px;
          border-left: 2px solid #94a3b8;
        }

        :global(.org-chart ul.level-1 > li::before),
        :global(.org-chart ul.level-1 > li::after),
        :global(.org-chart ul.level-2 > li::before),
        :global(.org-chart ul.level-2 > li::after) {
          content: "";
          position: absolute;
          top: 22px;
          width: 50%;
          border-top: 2px solid #94a3b8;
        }

        :global(.org-chart ul.level-1 > li::before),
        :global(.org-chart ul.level-2 > li::before) {
          left: 0;
        }

        :global(.org-chart ul.level-1 > li::after),
        :global(.org-chart ul.level-2 > li::after) {
          right: 0;
        }

        :global(.org-chart ul.level-1 > li:first-child::before),
        :global(.org-chart ul.level-2 > li:first-child::before) {
          border-top-color: transparent;
        }

        :global(.org-chart ul.level-1 > li:last-child::after),
        :global(.org-chart ul.level-2 > li:last-child::after) {
          border-top-color: transparent;
        }

        :global(.org-chart ul.level-1 > li:only-child::before),
        :global(.org-chart ul.level-1 > li:only-child::after),
        :global(.org-chart ul.level-2 > li:only-child::before),
        :global(.org-chart ul.level-2 > li:only-child::after) {
          display: none;
        }

        /* CONNECTORS for vertical stacks (level-3) */
        :global(.org-chart ul.level-3 > li::before),
        :global(.org-chart ul.level-3 > li::after) {
          display: none !important;
        }

        :global(.org-chart li > ul.level-3::before) {
          content: "";
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          height: 18px;
          border-left: 2px solid #94a3b8;
        }

        :global(.org-chart ul.level-3 > li:not(:last-child)::after) {
          content: "";
          position: absolute;
          left: 50%;
          top: calc(100% - 2px);
          transform: translateX(-50%);
          height: 12px;
          border-left: 2px solid #94a3b8;
        }

        :global(.org-chart ul.level-1 > li > .org-node),
        :global(.org-chart ul.level-2 > li > .org-node) {
          margin-top: 22px;
        }
      `}</style>
    </section>
  );
}
