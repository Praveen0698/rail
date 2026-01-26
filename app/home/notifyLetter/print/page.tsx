"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import PageOne from "@/components/notifyLetter/PageOne";
import PageTwo from "@/components/notifyLetter/PageTwo";
import PageThree from "@/components/notifyLetter/PageThree";
import { useRouter } from "next/navigation";

export default function NotifyLetterPrint() {
  const printRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [data, setData] = useState({
    boardCity: "BHUBANESWAR",
    boardCityHindi: "भुवनेश्वर",
    boardAddress: "D-79/80, Rail Vihar, Chandrasekharpur, Bhubaneswar – 751023",
    boardContact: "Phone: 0674-2303015 | www.rrbbbs.gov.in | rrbbbs.od@gov.in",

    noticeHindiTitle:
      "गैर-तकनीकी श्रेणियों (स्नातक स्तर) के लिए नोटिस संख्या 07/2025",
    noticeHindiSub: "सीधी भर्ती के लिए रेलवे बोर्ड का परिपत्र",

    circularNo: "387/RRB-NTPC/2025 – ECOR",
    circularHindiNo: "387/आरआरबी-एनटीपीसी/2025 – ईसीओआर",
    circularDateEnglish: "11th November, 2025",
    circularDateHindi: "11 नवम्बर, 2025",

    fromOffice1: "Office of the Principal Chief Personnel Officer",
    fromOffice2: "East Coast Railway",
    fromOffice3:
      "2nd Floor, Rail Sadan, Chandrasekharpur, Bhubaneswar – 751017",

    toName: "Moku Mani Kumar Reddy",
    toRelation: "S/O – Moku Bal Reddy",
    applicationNo: "199-2025/RRB-07/2025 NTPC (UNDER GRADUATE)",
    letterDate: "11th November, 2025",

    subjectPost: "TICKET COLLECTOR (TC)",
    subjectNoticeNo: "07/2025",
    subjectCategories: "NON-TECHNICAL CATEGORIES (UNDER GRADUATE)",

    selected: "provisionally selected",
    noticeNo: "07/2025 NTPC (UNDER GRADUATE)",
    postName: "TICKET COLLECTOR (TC)",
    payScale: "₹21,700 to ₹81,700",

    examDateTime: "06/11/2025 at 12:30 P.M.",
    examVenue:
      "Office of the Railway Recruitment Board, Bhubaneswar, located at D-79/80, Rail Vihar, Chandrasekharpur, Bhubaneswar",
    examNoticeNo: "07/2025 NTPC (UNDER GRADUATE)",
    selectionCriteria: "85% and above marks in Matriculation",

    dvDate: "18th November, 2025",
    dvAddress1: "O/O Railway Recruitment Board, Bhubaneswar",
    dvAddress2: "D-79/80, Rail Vihar, Chandrasekharpur, Bhubaneswar",
    dvNoticeNo: "(07/2025 NTPC – UNDER GRADUATE)",

    candidatureSelection: "PROVISIONAL",
    medicalTestDetails:
      "The Medical Fitness Test will be conducted on 12th / 13th November, 2025. Candidates are required to report to the Divisional Railway Hospital, Khurda Road – East Coast Railway Complex, Traffic Colony, Jatni, Odisha – 752050, between 08:00 A.M. and 12:00 P.M.",

    appointmentDate: "20th November, 2025",
    appointmentBoard: "Railway Recruitment Board, Bhubaneswar",
    appointmentZone: "East Coast Railway",

    probationPeriod: "six (6) months",

    signature: "Dy. Chief Personnel Officer (DYCPO)",

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

  const openEnglishToHindiTranslate = () => {
    const text = Object.values(data).join("\n\n");

    const url = `https://translate.google.com/?sl=en&tl=hi&text=${encodeURIComponent(
      text,
    )}&op=translate`;

    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center py-10">
      {/* Buttons */}
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

      {/* Grid Form */}
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

      {/* Printable Pages */}
      <div ref={printRef}>
        <PageOne data={data} />
        <PageTwo data={data} />
        <PageThree data={data} />
      </div>
    </div>
  );
}
