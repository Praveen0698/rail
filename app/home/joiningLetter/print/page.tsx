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
    boardCityHindi: "भुवनेश्वर",
    boardCity: "BHUBANESWAR",
    boardAddress: "D-79/80, Rail Vihar, Chandrasekharpur, Bhubaneswar – 751023",
    boardContact: "Phone: 0674-2303015 | www.rrbbbs.gov.in | rrbbbs.od@gov.in",

    division: "EAST COAST RAILWAY",
    ooNo: "14/III/2025/TCs",

    ref1: "DPO/KUR Memorandum No. U/Z 735/CS/Gr.C/Vol.IV dated 01.12.2025",
    ref2: "Offer of Appointment Letter No. U/P 587/III/TCs dated 04.12.2025",

    from: "Office of the Principal Chief Personnel Officer",
    fromAddress:
      "2nd Floor, Rail Sadan, Chandrasekharpur, Bhubaneswar – 751017",
    applicationDate: "03 Mar 2026",

    trainingSubDate: "03 February 2026",
    trainingDays: "45",

    candidateName: "Kadaboina Rajkumar",
    candidateSO: "Kadaboina Ilaiah",
    applicationNo: "198-2025/RRB-07/2025 NTPC (Under Graduate)",
    memoNo: "101/53-14/III/2025/TCs-1E-1-2025 dated 04.12.2025",

    group: "C",
    designation: "Ticket Collector",
    payScale: "₹21,700 – ₹81,700 (Pay Level–3) with Grade Pay ₹2,000",
    stipend: "₹21,830 per month with Grade Pay ₹2,000",

    letterNo: "RRBNTPC/Confcl.Recomm./2025/1012",
    letterDated: "25.09.2025",
    divionalManagerCity: "Khurda Road",
    divisionZoneAddress:
      "East Coast Railway Complex, Jatni, Khurda, Odisha – 752050",

    community: "Other Backward Class",
    dob: "07.04.1993",
    education: "HSC (Intermediate)",
    medical:
      "Aye Two and below without glasses vide Sr. DMO/RH/KUR Memo No. 01404/C-141 dated 13.11.2025",
    bank: "State Bank of India, Textile Park Branch, A/c No. 41640406610",

    trainingDate: "8th/10th December, 2025",
    trainingInstitute: "ECoR Training Institute, Khurda Road",
    trainingZone: "East Coast Railway",

    personnelName: "Souvik Saha",
    personnelBranch: "KUR",
    personnelZone: "ECoR",
    personnelBranchNo: "101/53-III/TCs-1E/2025",
    personnelDate: "04.12.2025",

    candidateImg: "",

    footer:
      "OFFICE OF THE PRINCIPAL CHIEF PERSONNEL OFFICER, EAST COAST RAILWAY, RAIL SADAN, CHANDRASEKHARPUR, BHUBANESWAR – 751017, ODISHA",
    footerHindi:
      "प्रधान मुख्य कार्मिक अधिकारी का कार्यालय, पूर्वी तट रेलवे, रेल सदन, चंद्रशेखरपुर, भुवनेश्वर – 751017, ओडिशा",
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
