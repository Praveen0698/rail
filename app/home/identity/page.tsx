"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";

export default function RailwayIDCard() {
  const navigation = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  // 🧱 Card dimensions
  const [width, setWidth] = useState(340);
  const [height, setHeight] = useState(215);

  // 📋 Card details
  const [cardNo, setCardNo] = useState("ASN/009090");
  const [yearOfIssue, setYearOfIssue] = useState("2021");
  const [name, setName] = useState("BACHHU PASWAN");
  const [designation, setDesignation] = useState("TRACK MAINTAINER");
  const [department, setDepartment] = useState("ENGINEERING");
  const [dob, setDob] = useState("12-12-1972");
  const [divisionHindi, setDivisionHindi] = useState(
    "पूर्व रेलवे, आसनसोल मंडल"
  );
  const [divisionEnglish, setDivisionEnglish] = useState(
    "EASTERN RAILWAY, ASANSOL DIVISION"
  );

  // 🖊️ Uploaded images
  const [signature, setSignature] = useState<string | null>(null);
  const [authoritySignature, setAuthoritySignature] = useState<string | null>(
    null
  );
  const [idPhoto, setIdPhoto] = useState<string | null>(null);

  // 🖨 Print card
  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "Railway_ID_Card",
    pageStyle: `
      @page { size: auto; margin: 10mm; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    `,
  });

  // 🖼 Handle file uploads
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setter(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl space-y-4 border border-gray-300">
        <div className="flex flex-row justify-between items-center">
          <button
            className="px-2.5 py-1 border border-gray-400 rounded-2xl cursor-pointer"
            onClick={() => navigation.back()}
          >
            Back
          </button>
          <h2 className="font-bold text-lg text-gray-700 text-center">
            Enter Card Details
          </h2>
          <div />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <div>
            <label className="block font-semibold">Width (px):</label>
            <input
              type="number"
              min="200"
              max="600"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Height (px):</label>
            <input
              type="number"
              min="150"
              max="400"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Card No:</label>
            <input
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Year of Issue:</label>
            <input
              value={yearOfIssue}
              onChange={(e) => setYearOfIssue(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Designation:</label>
            <input
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Department:</label>
            <input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Date of Birth:</label>
            <input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          {/* Division Inputs */}
          <div>
            <label className="block font-semibold">Division (Hindi):</label>
            <input
              value={divisionHindi}
              onChange={(e) => setDivisionHindi(e.target.value)}
              className="border rounded px-2 py-1 w-full"
              lang="hi"
              inputMode="text"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            />
          </div>
          <div>
            <label className="block font-semibold">Division (English):</label>
            <input
              value={divisionEnglish}
              onChange={(e) => setDivisionEnglish(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          {/* Upload Inputs */}
          <div>
            <label className="block font-semibold">Upload ID Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setIdPhoto)}
              className="text-sm"
            />
          </div>
          <div>
            <label className="block font-semibold">Upload Signature:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setSignature)}
              className="text-sm"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Upload Authority Signature:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setAuthoritySignature)}
              className="text-sm"
            />
          </div>
        </div>
      </div>

      {/* 🪪 ID Card */}
      <div
        ref={cardRef}
        className="relative bg-white rounded-xl border border-gray-400 font-sans overflow-hidden shadow-md"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Background watermark logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Image
            src="/indian-railway.png"
            alt="Background Watermark"
            width={180}
            height={180}
            className="object-contain select-none pointer-events-none"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-3 pt-1">
            <Image
              src="/golden-emblem.png"
              alt="Emblem"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex-1 text-center leading-tight">
              <div
                className="font-semibold text-[10px]"
                style={{ color: "rgb(220,38,38)", letterSpacing: "1px" }}
              >
                भारत सरकार
              </div>
              <div
                className="font-extrabold text-[11px] uppercase"
                style={{ color: "rgb(220,38,38)", letterSpacing: "2px" }}
              >
                GOVERNMENT OF INDIA
              </div>
              <div
                className="text-[10px] font-bold text-black mt-[2px]"
                style={{ letterSpacing: "0.8px" }}
              >
                {divisionHindi}
              </div>
              <div
                className="text-[10px] font-bold text-black mt-[1px]"
                style={{ letterSpacing: "1.2px" }}
              >
                {divisionEnglish}
              </div>
            </div>
            <Image
              src="/indian-railway.png"
              alt="Indian Railways Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Red Divider */}
          <div
            className="mx-0.5"
            style={{ borderBottom: "3px solid rgb(220,38,38)" }}
          />

          {/* Main Content */}
          <div className="flex px-3 pt-[4px]">
            {/* Photo */}
            <div
              className={`flex-shrink-0 border ${
                !idPhoto ? "border-black" : "border-none"
              } w-[75px] h-[85px]`}
            >
              {idPhoto ? (
                <Image
                  src={idPhoto}
                  alt="ID Photo"
                  width={75}
                  height={85}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src="/id-photo.jpg"
                  alt="Default ID Photo"
                  width={75}
                  height={85}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Details */}
            <div className="ml-3 flex-1 text-[9px] text-black leading-tight font-semibold">
              <div className="flex justify-between">
                <span>
                  <span className="font-bold">ID Card No.</span> {cardNo}
                </span>
                <span>
                  <span className="font-bold">Year of Issue:</span>{" "}
                  {yearOfIssue}
                </span>
              </div>
              <div className="mt-[3px]">
                <span className="font-bold">नाम / Name :</span> {name}
              </div>
              <div className="mt-[3px]">
                <span className="font-bold">पद / Desig. :</span> {designation}
              </div>
              <div className="mt-[3px]">
                <span className="font-bold">विभाग / Dept. :</span> {department}
              </div>
              <div className="mt-[3px]">
                <span className="font-bold">जन्मतिथि / DOB :</span> {dob}
              </div>
            </div>
          </div>

          {/* Signature Row */}
          <div className="absolute bottom-[6px] left-0 right-0 px-3 flex justify-between items-end text-[8px] text-black font-semibold z-10">
            <div className="flex flex-col items-center">
              {signature ? (
                <Image
                  src={signature}
                  alt="Signature"
                  width={70}
                  height={30}
                  className="object-contain"
                />
              ) : (
                <div className="h-[25px]" />
              )}
              <div>हस्ताक्षर / Signature</div>
            </div>

            <div className="flex flex-col items-center text-center">
              {authoritySignature ? (
                <Image
                  src={authoritySignature}
                  alt="Authority Signature"
                  width={70}
                  height={30}
                  className="object-contain"
                />
              ) : (
                <div className="h-[25px]" />
              )}
              <div className="font-bold text-[10px] mt-1">
                Signature of Issuing Authority
              </div>
              <div>जारीकर्ता का हस्ताक्षर</div>
              <div>व. म. का. अ. / Sr. D.P.O / ASN</div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Print Card
        </button>
        <button
          onClick={() => navigation.push("/home/identity/back")}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Back Side
        </button>
      </div>
    </div>
  );
}
