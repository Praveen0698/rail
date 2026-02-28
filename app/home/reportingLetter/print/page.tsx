"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import PageOne from "@/components/reportingLetter/pageOne";
import { useRouter } from "next/navigation";
import PageTwo from "@/components/reportingLetter/pageTwo";
import PageThree from "@/components/reportingLetter/pageThree";
import PageFour from "@/components/reportingLetter/pageFour";

export default function ReportingLetterPrint() {
  const printRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [data, setData] = useState({
    boardCityHindi: "नई दिल्ली",
    boardCity: "NEW DELHI",
    boardAddress: "123, Demo Rail Bhawan, Sample Nagar, New Delhi – 110001",
    boardContact:
      "Phone: 011-00000000 | www.demo-railway.gov.in | info@demo.gov.in",

    number: "1001",
    admNumber: "99990001",
    group: "C",
    memoNo: "2026/01",
    programmeDemand: "DEMO/Gr.C/2026-2027/NEW DELHI",
    year: "26-27",

    candidateName: "AMIT KUMAR",
    candidateSO: "S/O RAJESH KUMAR",
    addressStreet: "12-45-678, SAMPLE COLONY",
    addressLocality: "MODEL TOWN, CENTRAL AREA",
    addressCityState: "LUCKNOW, UTTAR PRADESH - 226001",

    applicationDate: "15-01-2026",
    payScale: "Rs.25,000/- to 75,000/- Level-4",
    reference: "Demo Recruitment Board / Northern Railway / New Delhi",

    pageOnePointThree:
      "The reporting date is two days before the joining date. You are required to report between 09:00 hrs – 13:00 hrs at the Demo Division Office with original documents of educational qualification, age proof, and address proof for verification.",

    chiefOfficerDivison: "DEMO RAILWAY SOUTH ZONE",
    chiefOfficerCity: "New Delhi – 110001",
    pageThreeDivison: "DEMO/LKO/KAN Division / Northern Railway",
    pageThreeSpecialInstruction:
      "This letter must be filled by the candidate in their own handwriting and submitted to the Recruitment Cell along with valid residential proof certificate for further necessary action.",

    zone: "Northern Railway",
    divison: "Demo Division, Central Zone",

    cpSign: "",
    cpName: "R. SHARMA",
    cpLocation: "Northern Railway / New Delhi",
    asSign: "",
    asName: "P. VERMA",
    asLocation: "Sample Nagar, New Delhi - 110001",

    footer:
      "OFFICE OF THE CHIEF PERSONNEL OFFICER, NORTHERN RAILWAY, DEMO RAIL BHAWAN, NEW DELHI – 110001",
    footerHindi:
      "मुख्य कार्मिक अधिकारी का कार्यालय, उत्तरी रेलवे, डेमो रेल भवन, नई दिल्ली – 110001",
  });

  const handleChange = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    pageStyle: `
    @page { size: A4; margin: 0; }
    html, body {
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Times New Roman", serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  `,
  });

  const handleASUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setData((prev) => ({ ...prev, asSign: reader.result as string }));
    reader.readAsDataURL(file);
  };
  const handleCPUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setData((prev) => ({ ...prev, cpSign: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const openEnglishToHindiTranslate = () => {
    const text = Object.values(data).join("\n\n");

    const url = `https://translate.google.com/?sl=en&tl=hi&text=${encodeURIComponent(
      text,
    )}&op=translate`;

    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-700 text-white rounded cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={handlePrint}
          className="px-6 py-2 bg-green-700 text-white rounded cursor-pointer"
        >
          Print All Pages
        </button>

        <button
          onClick={openEnglishToHindiTranslate}
          className="px-6 py-2 bg-blue-700 text-white rounded cursor-pointer"
        >
          English → Hindi
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 w-full max-w-7xl">
        {Object.entries(data)
          .filter(([key]) => key !== "asSign" && key !== "cpSign")
          .map(([key, value]) => (
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
        <div className="flex flex-col">
          <label className="text-xs font-semibold mb-1">Upload AS Sign</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleASUpload(e)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-semibold mb-1">Upload CP Sign</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleCPUpload(e)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div ref={printRef}>
        <PageOne data={data} />
        <PageTwo data={data} />
        <PageThree data={data} />
        <PageFour data={data} />
      </div>
    </div>
  );
}
