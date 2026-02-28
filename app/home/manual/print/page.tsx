"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function ServiceBookPage() {
  const router = useRouter();
  const printRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    year: "2026",
    yearHindi: "२०२६",
    volume: "Volume I",
  });

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    pageStyle: `
      @page { size: A4; margin: 0; }
      body {
        margin: 0;
        font-family: "Times New Roman", serif;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    `,
  });

  const handleChange = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 print:bg-white print:py-0">
      {/* Buttons */}
      <div className="flex gap-4 mb-6 print:hidden">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 bg-gray-700 text-white rounded"
        >
          Home
        </button>

        <button
          onClick={handlePrint}
          className="px-5 py-2 bg-green-700 text-white rounded"
        >
          Print Cover
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 w-full max-w-7xl">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label className="text-xs font-semibold mb-1">
              {key.replace(/([A-Z])/g, " $1").toUpperCase()}
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        ))}
      </div>

      {/* PRINT AREA */}
      <div ref={printRef}>
        <div className="flex justify-center">
          <div
            style={{
              width: "210mm",
              height: "297mm",
              background: "#fff",
              padding: "35mm 25mm",
              boxSizing: "border-box",
              fontFamily: "Times New Roman, serif",
              position: "relative",
            }}
          >
            {/* Emblem */}
            <div className="text-center">
              <Image
                src="/emblemBlack.png"
                alt="Government of India Emblem"
                width={60}
                height={80}
                className="mx-auto"
              />

              <p className="text-[14px] tracking-wide">सत्यमेव जयते</p>
            </div>

            {/* Government Title */}
            <div className="text-center mt-10 space-y-2">
              <h2 className="text-[20px] tracking-wide font-semibold">
                भारत सरकार
              </h2>

              <h2 className="text-[22px] tracking-widest font-bold">
                GOVERNMENT OF INDIA
              </h2>

              <h3 className="text-[18px] mt-4">रेल मंत्रालय</h3>

              <h3 className="text-[20px] tracking-wide font-semibold">
                MINISTRY OF RAILWAYS
              </h3>

              <h3 className="text-[16px] mt-2">( रेलवे बोर्ड )</h3>

              <h3 className="text-[18px] tracking-wide">(RAILWAY BOARD)</h3>
            </div>

            {/* Main Title */}
            <div className="text-center mt-20">
              <h1 className="text-[28px] tracking-wide font-semibold mb-5">
                भारतीय रेल स्थापना मैनुअल
              </h1>

              <h1 className="text-[34px] tracking-widest font-bold">
                INDIAN RAILWAY
              </h1>

              <h1 className="text-[34px] tracking-widest font-bold">
                ESTABLISHMENT MANUAL
              </h1>
            </div>

            {/* Volume + Year */}
            <div className="text-center absolute bottom-[40mm] left-0 right-0">
              <p className="mt-4 text-[16px]">(संशोधित संस्करण)</p>
              <p className="text-[18px] tracking-widest mt-2">
                {data.yearHindi}
              </p>

              <p className="text-[16px] mt-1">(Revised Edition)</p>

              <p className="text-[18px] tracking-widest mt-2">{data.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
