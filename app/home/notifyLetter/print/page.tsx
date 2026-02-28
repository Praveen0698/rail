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
    boardCity: "NEW DELHI",
    boardCityHindi: "नई दिल्ली",
    boardAddress: "123, Demo Rail Bhawan, Sample Nagar, New Delhi – 110001",
    boardContact:
      "Phone: 011-00000000 | www.demo-rrb.gov.in | info@demo-rrb.gov.in",

    noticeHindiTitle:
      "गैर-तकनीकी श्रेणियों (स्नातक स्तर) के लिए नोटिस संख्या 01/2026",
    noticeHindiSub: "सीधी भर्ती हेतु नमूना परिपत्र",

    circularNo: "100/RRB-DEMO/2026 – NR",
    circularHindiNo: "100/आरआरबी-डेमो/2026 – एनआर",
    circularDateEnglish: "15th January, 2026",
    circularDateHindi: "15 जनवरी, 2026",

    fromOffice1: "Office of the Chief Personnel Officer",
    fromOffice2: "Northern Railway",
    fromOffice3:
      "1st Floor, Demo Rail Bhawan, Sample Nagar, New Delhi – 110001",

    toName: "AMIT SHARMA",
    toRelation: "S/O RAJESH SHARMA",
    applicationNo: "RRB/DEMO/2026/UG/001",
    letterDate: "15th January, 2026",

    subjectPost: "JUNIOR CLERK",
    subjectNoticeNo: "01/2026",
    subjectCategories: "NON-TECHNICAL CATEGORIES (UNDER GRADUATE)",

    selected: "provisionally selected",
    noticeNo: "01/2026 NTPC (UNDER GRADUATE)",
    postName: "JUNIOR CLERK",
    payScale: "₹25,000 to ₹75,000",

    examDateTime: "10/02/2026 at 10:00 A.M.",
    examVenue:
      "Office of the Demo Railway Recruitment Board, Sample Nagar, New Delhi",
    examNoticeNo: "01/2026 NTPC (UNDER GRADUATE)",
    selectionCriteria: "Minimum 80% marks in qualifying examination",

    dvDate: "20th February, 2026",
    dvAddress1: "O/O Demo Railway Recruitment Board, New Delhi",
    dvAddress2: "123, Sample Nagar, New Delhi – 110001",
    dvNoticeNo: "(01/2026 NTPC – UNDER GRADUATE)",

    candidatureSelection: "PROVISIONAL",
    medicalTestDetails:
      "The Medical Fitness Test will be conducted on 25th / 26th February, 2026 at Demo Railway Hospital, Sample Zone. Candidates must report between 09:00 A.M. and 12:00 P.M.",

    appointmentDate: "10th March, 2026",
    appointmentBoard: "Demo Railway Recruitment Board, New Delhi",
    appointmentZone: "Northern Railway",

    probationPeriod: "six (6) months",

    signature: "Deputy Chief Personnel Officer (DYCPO)",

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
