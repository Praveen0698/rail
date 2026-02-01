"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import PageOne from "@/components/medical/PageOne";
import { useRouter } from "next/navigation";
import PageBack from "@/components/medical/pageBack";

export default function NotifyLetterPrint() {
  const printRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [data, setData] = useState({
    boardCityHindi: "भुवनेश्वर",
    boardCity: "BHUBANESWAR",
    boardAddress: "D-79/80, Rail Vihar, Chandrasekharpur, Bhubaneswar – 751023",
    boardContact: "Phone: 0674-2303015 | www.rrbbbs.gov.in | rrbbbs.od@gov.in",

    designation: "ALP / TECHNICIAN",
    cenNo: "01/2018",

    photo: "",

    employmentNotice: "MR/RRB/14/17",
    rollNo: "57565334",
    testDate: "04/11/2017 TO 08/11/2017",
    controlNo: "4452035",
    community: "UR",
    group: "C",
    reportingTime: "10:00 AM – 5:00 PM",
    qrValue: "RRB-MEDICAL-57565334",
    candidateName: "SUKUMAR MISTRY",
    fatherName: "RAMPADA MISTRY",
    addressLine1: "PARGHUMTI, PARGHUMTI",
    addressLine2: "NORTH 24 PARGANAS, WEST BENGAL – 743439",
    venue: "OS/RECTT. UNDER CMO, KHURDA RAILWAY HOSPITAL, KHURDA DIVISION",

    chiefGeneralManagerZone: "E.Co. Railway, Bhubaneswar",

    footer:
      "OFFICE OF THE PRINCIPAL CHIEF PERSONNEL OFFICER, EAST COAST RAILWAY RAIL SADAN, CHANDRASEKHARPUR BHUBANESWAR PIN 751017 ODISHA",
    footerHindi:
      "प्रधान मुख्यकार्मिक अर्धकारी का कार्ािलर्, पूर्वी तट रे लर्वेरे ल सदन, चंद्रशेखरपुर भुर्वनेश्वर र्पन 751017 ओर्िशा",
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
