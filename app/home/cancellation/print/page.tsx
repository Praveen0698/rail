"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";

import CancellationPage1 from "@/components/cancellationLetter/pageOne";
import CancellationPage2 from "@/components/cancellationLetter/pageTwo";

export default function CancellationLetterPrint() {
  const printRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [data, setData] = useState({
    boardCity: "NEW DELHI",
    boardCityHindi: "नई दिल्ली",

    boardAddress: "Railway Recruitment Board, Rail Bhawan, New Delhi – 110001",

    boardContact: "Phone: 011-000000 | www.rrb.gov.in | info@rrb.gov.in",

    division: "NORTHERN RAILWAY",

    letterNo: "RRB/CANCEL/2026/001",
    letterDate: "20 January 2026",

    candidateName: "RAVI VERMA",
    candidateSO: "S/O MAHESH VERMA",
    applicationNo: "RRB/NTPC/2026/001",

    designation: "Junior Clerk",
    community: "General",

    reason:
      "It has been found that the candidate did not fulfil the eligibility criteria as prescribed in the recruitment notification.",

    authority: "Chief Personnel Officer",

    trainingZone: "Northern Railway",

    // candidate signature
    candidateImg: "",

    // personnel officer details
    personnelName: "ANIL SHARMA",
    personnelBranch: "LKO",
    personnelZone: "NR",

    personnelBranchNo: "NR/LKO/2026/01",
    personnelDate: "05.01.2026",

    footer:
      "OFFICE OF THE CHIEF PERSONNEL OFFICER, NORTHERN RAILWAY, NEW DELHI – 110001",

    footerHindi:
      "मुख्य कार्मिक अधिकारी का कार्यालय, उत्तरी रेलवे, नई दिल्ली – 110001",
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
      body {
        font-family: "Times New Roman", serif;
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

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-700 text-white rounded"
        >
          Home
        </button>

        <button
          onClick={handlePrint}
          className="px-6 py-2 bg-green-700 text-white rounded"
        >
          Print Cancellation Letter
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

      {/* PRINT */}

      <div ref={printRef}>
        <CancellationPage1 data={data} />
        <CancellationPage2 data={data} />
      </div>
    </div>
  );
}
