"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import PageOne from "@/components/joiningLetter/pageOne";
import { useRouter } from "next/navigation";
import PageTwo from "@/components/joiningLetter/pageTwo";
import PageThree from "@/components/joiningLetter/pageThree";

export default function JoiningLetterPrint() {
  const printRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [data, setData] = useState({
    boardCityHindi: "नई दिल्ली",
    boardCity: "NEW DELHI",
    boardAddress: "123, Demo Rail Bhawan, Sample Nagar, New Delhi – 110001",
    boardContact:
      "Phone: 011-00000000 | www.demo-railway.gov.in | demo@railway.gov.in",

    division: "NORTHERN RAILWAY",
    ooNo: "01/I/2026/SAMPLE",

    ref1: "Sample Memorandum No. DEMO/123/2026 dated 01.01.2026",
    ref2: "Sample Offer of Appointment Letter No. DEMO/456/2026 dated 05.01.2026",

    from: "Office of the Chief Personnel Officer",
    fromAddress:
      "1st Floor, Demo Rail Bhawan, Sample Nagar, New Delhi – 110001",
    applicationDate: "15 Jan 2026",

    trainingSubDate: "20 January 2026",
    trainingDays: "30",

    candidateName: "RAVI VERMA",
    candidateSO: "S/O MAHESH VERMA",
    applicationNo: "RRB/DEMO/NTPC/2026/001",
    memoNo: "DEMO/TC/2026/001 dated 05.01.2026",

    group: "C",
    designation: "Junior Clerk",
    payScale: "₹25,000 – ₹75,000 (Pay Level–4) with Grade Pay ₹2,400",
    stipend: "₹25,500 per month with Grade Pay ₹2,400",

    letterNo: "RRB/CONF/DEMO/2026/789",
    letterDated: "10.01.2026",
    divionalManagerCity: "Lucknow",
    divisionZoneAddress:
      "Demo Railway Division Office, Central Zone, Lucknow – 226001",

    community: "General",
    dob: "01.01.1995",
    education: "Graduate (B.A.)",
    medical:
      "Fit in all respects as per Demo Medical Board Certificate No. DEMO/2026/001",
    bank: "State Bank of Demo, Main Branch, A/c No. 000000000000",

    trainingDate: "5th February 2026",
    trainingInstitute: "Demo Railway Training Institute, Lucknow",
    trainingZone: "Northern Railway",

    personnelName: "ANIL SHARMA",
    personnelBranch: "LKO",
    personnelZone: "NR",
    personnelBranchNo: "DEMO/NR/TC/2026/01",
    personnelDate: "05.01.2026",

    candidateImg: "",

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

  const handleCIUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setData((prev) => ({ ...prev, candidateImg: reader.result as string }));
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
          .filter(([key]) => key !== "candidateImg")
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
          <label className="text-xs font-semibold mb-1">
            Upload Candidate Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleCIUpload(e)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div ref={printRef}>
        <PageOne data={data} />
        <PageTwo data={data} />
        <PageThree data={data} />
      </div>
    </div>
  );
}
