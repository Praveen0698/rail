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
    boardCityHindi: "भुवनेश्वर",
    boardCity: "BHUBANESWAR",
    boardAddress: "D-79/80, Rail Vihar, Chandrasekharpur, Bhubaneswar – 751023",
    boardContact: "Phone: 0674-2303015 | www.rrbbbs.gov.in | rrbbbs.od@gov.in",

    number: "1616",
    admNumber: "44581615",
    group: "C",
    memoNo: "1276",
    programmeDemand: "MR’Q’/Gr.C/2017-2018/N.DELHI",
    year: "17-18",

    candidateName: "G. BHANUCHANDER REDDY",
    candidateSO: "G. LAXMA REDDY",
    addressStreet: "9-1-100, REDDY BASTI",
    addressLocality: "CHAMPAPET, SAROORNAGAR",
    addressCityState: "K.V.RANGAREDDY, TELANGANA - 500079",

    applicationDate: "10-01-2018",
    payScale: "Rs.9,300/- to 34,800/- GP-4200/-",
    reference: "R.R.B./Chandrashekar Pur/Eco.Rly./Bhubaneswar",

    pageOnePointThree:
      "The date of reporting is two days before joining date. Your reporting date is 12-01-2018 to 19-01-2018 at KUR/CTC/PURI/BAM/VSKP/BBS Eco.Rly. with original documents of educational qualification, age proof & residential proof within 10.00 hrs – 14.00 hrs.",

    chiefOfficerDivison: "RAILWAY SOUTH A/C. Eco. Rly.",
    chiefOfficerCity: "Bhubaneswar – 751017",
    pageThreeDivison: "BBS/KUR/CTC/BAM Divn / Eco. Rly.",
    pageThreeSpecialInstruction:
      "This letter must be filled up by the candidate in his own handwriting & this sacrificing letter should be submit to the concerning authority of Recruitment Cell/Eco. Rly. with the Residential Proof Certificate for necessary action.",

    zone: "Eastcoast Railway",
    divison: "BBS/KUR/CTC/BAM Division, Tatalinges",

    cpSign: "",
    cpName: "N. SWAMINATHAN",
    cpLocation: "Eastcoast Railway / Bhubaneswar",
    asSign: "",
    asName: "BENUDHAR MOHANTY",
    asLocation: "Chandrashekar Pur, Bhubaneswar - 751023",

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
