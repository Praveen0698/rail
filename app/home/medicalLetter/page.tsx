"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import PageOne from "@/components/medical/PageOne";
import { useRouter } from "next/navigation";
import PageBack from "@/components/medical/pageBack";

export default function MedicalLetterPrint() {
  const printRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [data, setData] = useState({
    boardCityHindi: "नई दिल्ली",
    boardCity: "NEW DELHI",
    boardAddress: "123, Demo Rail Bhawan, Sample Nagar, New Delhi – 110001",
    boardContact:
      "Phone: 011-00000000 | www.demo-rrb.gov.in | info@demo-rrb.gov.in",

    designation: "ASSISTANT LOCO PILOT",
    cenNo: "02/2026",

    photo: "",

    employmentNotice: "DEMO/RRB/2026/01",
    rollNo: "99998888",
    testDate: "10/03/2026 TO 15/03/2026",
    controlNo: "1234567",
    community: "GENERAL",
    group: "C",
    reportingTime: "09:00 AM – 4:00 PM",
    qrValue: "DEMO-RRB-99998888",
    candidateName: "ARUN KUMAR",
    fatherName: "S/O RAMESH KUMAR",
    addressLine1: "12-45, SAMPLE COLONY",
    addressLine2: "MODEL TOWN, LUCKNOW – 226001",
    venue: "DEMO RAILWAY HOSPITAL, CENTRAL DIVISION",

    chiefGeneralManagerZone: "Northern Railway, New Delhi",

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

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setData((prev) => ({ ...prev, photo: reader.result as string }));
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
        <div className="flex flex-col">
          <label className="text-xs font-semibold mb-1">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div ref={printRef}>
        <PageOne data={data} />
        <PageBack />
      </div>
    </div>
  );
}
