"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function ServiceBookPage() {
  const router = useRouter();
  const printRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    departmentName: "NORTHERN RAILWAY",
    departmentAddress: "Demo Rail Bhawan, Sample Nagar, New Delhi – 110001",
    departmentLogo: "",
    candidatePhoto: "",
    candidateNameEnglish: "RAHUL SHARMA",
    candidateNameHindi: "राहुल शर्मा",
    designationEnglish: "Junior Clerk",
    designationHindi: "कनिष्ठ लिपिक",
  });

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

  const handleChange = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () =>
      setData((prev) => ({ ...prev, [key]: reader.result as string }));

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
          Print Service Book
        </button>

        <button
          onClick={openEnglishToHindiTranslate}
          className="px-6 py-2 bg-blue-700 text-white rounded cursor-pointer"
        >
          English → Hindi
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mb-10 print:hidden">
        <Input
          label="Department Name"
          value={data.departmentName}
          onChange={(v) => handleChange("departmentName", v)}
        />

        <Input
          label="Department Address"
          value={data.departmentAddress}
          onChange={(v) => handleChange("departmentAddress", v)}
        />

        <Input
          label="Candidate Name (English)"
          value={data.candidateNameEnglish}
          onChange={(v) => handleChange("candidateNameEnglish", v)}
        />

        <Input
          label="Candidate Name (Hindi)"
          value={data.candidateNameHindi}
          onChange={(v) => handleChange("candidateNameHindi", v)}
        />

        <Input
          label="Designation (English)"
          value={data.designationEnglish}
          onChange={(v) => handleChange("designationEnglish", v)}
        />

        <Input
          label="Designation (Hindi)"
          value={data.designationHindi}
          onChange={(v) => handleChange("designationHindi", v)}
        />

        <div>
          <label className="text-xs font-semibold">
            Upload Department Logo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "departmentLogo")}
            className="border w-full p-2 rounded text-sm"
          />
        </div>

        <div>
          <label className="text-xs font-semibold">
            Upload Candidate Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "candidatePhoto")}
            className="border w-full p-2 rounded text-sm"
          />
        </div>
      </div>

      <div ref={printRef}>
        <div className="flex justify-center">
          <div
            style={{
              width: "210mm",
              height: "297mm",
              background: "#fff",
              position: "relative",
              padding: "25mm 20mm",
              boxSizing: "border-box",
              fontFamily: "Times New Roman, serif",
            }}
          >
            <div className="text-center">
              {data.departmentLogo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.departmentLogo}
                  alt="Logo"
                  className="mx-auto mb-3 h-20 object-contain"
                />
              )}

              <h2 className="text-[20px] font-bold uppercase">
                {data.departmentName}
              </h2>

              <p className="text-[13px] mt-1">{data.departmentAddress}</p>
            </div>

            <div className="text-center mt-14">
              <h1 className="text-[28px] font-semibold">सेवा पंजी</h1>
              <h2 className="text-[30px] tracking-widest mt-2">SERVICE BOOK</h2>
            </div>

            <div className="flex justify-center mt-20">
              <div className="relative h-[220px] flex items-center">
                <div className="absolute left-[-18px] h-[180px] border-l border-black"></div>
                <div className="h-[220px] border-l-2 border-black"></div>
                <div className="absolute right-[-18px] h-[180px] border-l border-black"></div>
              </div>
            </div>

            <div className="text-center mt-10 text-[18px] tracking-widest">
              OF
            </div>

            <div className="absolute bottom-[30mm] left-[15mm] right-[15mm] space-y-8 flex items-center gap-10">
              {data.candidatePhoto && (
                <div className="border border-black w-[30mm] h-[40mm]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.candidatePhoto}
                    alt="Candidate"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex-1 gap-5 flex flex-col">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="text-[16px]">श्री / श्रीमती / कुमारी</span>
                    <div className="flex-1 border-b border-black text-center">
                      {data.candidateNameHindi}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[14px]">
                      Shri / Shrimati / Kumari
                    </span>
                    <div className="flex-1 border-b border-black text-center">
                      {data.candidateNameEnglish}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4">
                    <span className="text-[16px]">पदनाम</span>
                    <div className="flex-1 border-b border-black text-center">
                      {data.designationHindi}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[14px]">Designation</span>
                    <div className="flex-1 border-b border-black text-center">
                      {data.designationEnglish}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs font-semibold">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border w-full p-2 rounded text-sm"
      />
    </div>
  );
}
