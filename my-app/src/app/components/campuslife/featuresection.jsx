"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const imageSets = [
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Class-room.jpg", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Rectangle+574056814.png", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Rectangle+574056814+(1).png"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Transportation.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/transport.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Transport1-1024x683.png"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/reliance-market-poonamallee-chennai-grocery-stores-7y0lkgvzc9.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Micro%2Bmarket%2Bsquare-01-640w.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/reliance-market-poonamallee-chennai-grocery-stores-5j3kv0y5q5.jpg"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/elderly-man-hospital-reception-wearing-face-mask-taking-with-nurse-while-waiting-coronavirus-examination+(2).png", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/clipboard-face-mask-non-profit-with-doctor-community-center-healthcare-checkup-consulting-documents-volunteer-with-medical-professional-outreach-event-charity-medicare.jpg", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/elderly-man-hospital-reception-wearing-face-mask-taking-with-nurse-while-waiting-coronavirus-examination+(3).png"],
    ["./student.jpg", "/img2.jpg", "/img3.jpg"],
    ["/img4.jpg", "/img5.jpg", "/img6.jpg"],
  ];

  const [indexes, setIndexes] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % imageSets[i].length)
      );
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const SandalButton = (
    <button className="group bg-[var(--button-red)] h-[45px] px-2 rounded-xl shadow-lg text-white font-semibold transition-all flex items-center justify-between">
      <p className="px-3">Apply Now</p>
      <span className="bg-white rounded-lg p-1 px-2 flex items-center">
        <svg width="25" height="25" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="var(--button-red)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );

  const RedButton = (
    <button className="group bg-[var(--background)] text-[var(--button-red)] h-[45px] px-2 ml-[100px] rounded-xl shadow-lg font-semibold transition-all flex items-center justify-between">
      <p className="px-3">Apply Now</p>
      <span className="bg-[var(--button-red)] rounded-lg p-1 px-2 flex items-center">
        <svg width="25" height="25" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col gap-32">

      {[
        { type: "sandal", title: "Academic Infrastructure", desc: "Kalinga University offers state-of-the-art academic infrastructure with smart classrooms, digital learning tools, and well-equipped labs that promote innovation and practical learning." },
        { type: "red", title: "Transportation", desc: "With 30+ buses and 4-wheelers, our transport service offers convenient, safe, and affordable pick-up and drop facilities across Raipur, covering up to 70 km each way." },
        { type: "sandal", title: "Mini Market", desc: "The on-campus mini market includes an ATM, stationery shop, salon, juice and snack counters, and a chemist — ensuring students have access to essentials without leaving campus." },
        { type: "red", title: "Health Clinic", desc: "Our on-campus health clinic, staffed by qualified doctors and nurses, provides consultation, counseling, and emergency medical support for students and staff." },
        { type: "sandal", title: "Banking & ATM", desc: "With tie-ups with the Central Bank of India and Canara Bank, students can avail of education loans easily. Two 24×7 ATMs (ICICI & OBC Bank) are also available on campus, supporting all major digital payment methods."},
        { type: "red", title: "Safety & Security", desc: "The entire campus, including hostels and academic areas, is under continuous CCTV surveillance and managed by a trained in-house security team for complete safety." },
      ].map((sec, index) => (
        
        <div
          key={index}
          className="relative w-full min-h-[380px] 
                     md:min-h-[380px] 
                     flex flex-col md:block"
        >

          {sec.type === "sandal" ? (
            // IMAGE RIGHT
            <div
              className="
                absolute md:bottom-[150px] md:left-[550px] md:w-[40%]
                w-full static md:absolute 
              "
            >
              <div className="relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg w-full z-10">
                <img
                  src={imageSets[index][indexes[index]]}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2 z-20">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${
                      i === indexes[index]
                        ? "bg-[#F2A33A] w-12"
                        : "bg-gray-300 w-4"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            // IMAGE LEFT
            <div
              className="
                absolute md:-top-[60px] md:left-[100px] md:w-[40%] z-20
                w-full static md:absolute
              "
            >
              <div className="relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src={imageSets[index][indexes[index]]}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${
                      i === indexes[index]
                        ? "bg-[#F2A33A] w-12"
                        : "bg-gray-300 w-4"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* CONTENT BOXES */}
          {sec.type === "sandal" ? (
            <div
              className="
              bg-[#F9E7D1] rounded-2xl p-8 shadow-md w-full md:w-[45%] 
              min-h-[280px] md:min-h-[280px]
              md:left-[180px] 
              mt-6 md:mt-0 relative
            "
            >
              <h1 className="text-2xl font-regular mt-[40px] mb-3">{sec.title}</h1>
              <p className="text-sm text-black/70 leading-relaxed mb-4 w-[338px]">{sec.desc}</p>
              {SandalButton}
            </div>
          ) : (
            <div
              className="
              bg-[#8D2221] text-white rounded-2xl p-8 shadow-md 
              w-full md:w-[45%] min-h-[280px]
              md:absolute md:right-[180px] md:top-[80px]
              mt-6 md:mt-0
            "
            >
              <h2 className="text-2xl font-regular mb-3 mt-8 md:pl-[100px]">
                {sec.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4 md:pl-[100px]">
                {sec.desc}
              </p>
              {RedButton}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
