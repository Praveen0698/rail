"use client";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import QRCode from "qrcode";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EastCoastRailwayIDFront() {
  const navigation = useRouter();

  const cardRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(680);
  const [height, setHeight] = useState(400);

  // 🔹 Form fields
  const [divisionHindi, setDivisionHindi] = useState("पूर्व तट रेलवे");
  const [divisionEnglish, setDivisionEnglish] = useState("East Coast Railway");
  const [subDivision, setSubDivision] = useState("Khurda Road Division");
  const [department, setDepartment] = useState("Commercial");

  const [name, setName] = useState("AVINASH BHAGAT");
  const [designation, setDesignation] = useState("TC/CC");
  const [pfNo, setPfNo] = useState("01179794");
  const [office, setOffice] = useState("Khurda Road");
  const [dob, setDob] = useState("06.01.1994");
  const [issueDate, setIssueDate] = useState("23.08.2024");

  // 🖼 Uploads
  const [photo, setPhoto] = useState<string | null>(null);
  const [employeeSign, setEmployeeSign] = useState<string | null>(null);
  const [authoritySign, setAuthoritySign] = useState<string | null>(null);
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [qrAuto, setQrAuto] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null); // ✅ User-uploaded Logo

  // 🖨 Print
  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "EastCoast_Railway_ID_Front",
  });

  // 📸 File Upload Helper
  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setter(reader.result as string);
    reader.readAsDataURL(file);
  };

  // 🔳 Auto-generate QR from PF No + Name
  useEffect(() => {
    (async () => {
      const dataUrl = await QRCode.toDataURL(`PF: ${pfNo}\nName: ${name}`, {
        margin: 1,
        scale: 6,
      });
      setQrAuto(dataUrl);
    })();
  }, [pfNo, name]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      <div className="bg-white p-4 rounded-lg shadow-md border w-full max-w-4xl space-y-3">
        <div className="flex flex-row justify-between items-center">
          <button
            className="px-2.5 py-1 border border-gray-400 rounded-2xl cursor-pointer"
            onClick={() => navigation.back()}
          >
            Back
          </button>
          <h2 className="text-lg font-bold text-center text-gray-700">
            East Coast Railway ID - Front Side
          </h2>
          <div />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <div>
            <label>Width (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Height (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="border rounded w-full px-2 py-1"
            />
          </div>

          <div>
            <label>Division (Hindi)</label>
            <input
              value={divisionHindi}
              onChange={(e) => setDivisionHindi(e.target.value)}
              className="border rounded w-full px-2 py-1"
              lang="hi"
            />
          </div>
          <div>
            <label>Division (English)</label>
            <input
              value={divisionEnglish}
              onChange={(e) => setDivisionEnglish(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Sub-Division</label>
            <input
              value={subDivision}
              onChange={(e) => setSubDivision(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Department</label>
            <input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>

          <div>
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Designation</label>
            <input
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>PF/NPS No</label>
            <input
              value={pfNo}
              onChange={(e) => setPfNo(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Office</label>
            <input
              value={office}
              onChange={(e) => setOffice(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Date of Birth</label>
            <input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Date of Issue</label>
            <input
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>

          {/* ✅ Upload Fields */}
          <div>
            <label>Upload Logo (Right)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, setLogo)}
            />
          </div>
          <div>
            <label>Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, setPhoto)}
            />
          </div>
          <div>
            <label>Employee Signature</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, setEmployeeSign)}
            />
          </div>
          <div>
            <label>Authority Signature</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, setAuthoritySign)}
            />
          </div>
          <div>
            <label>Upload QR (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, setQrImage)}
            />
          </div>
        </div>
      </div>

      {/* --- ID Card Layout --- */}
      <div
        ref={cardRef}
        className="relative rounded-lg border bg-white shadow-lg overflow-hidden"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Header Section */}
        <div className="relative z-10 p-3">
          <div className="flex justify-between items-center px-5">
            {/* Left Logo */}
            <Image
              src="/indian-railway.png"
              alt="Railway Logo"
              width={60}
              height={60}
              className="object-contain"
            />

            {/* Center Title */}
            <div className="text-center flex-1">
              <div className="font-semibold text-[16px]">{divisionHindi}</div>
              <div className="font-bold text-[18px]">{divisionEnglish}</div>
              <div className="text-[12px] font-medium">{subDivision}</div>
            </div>

            {/* ✅ Right Uploadable Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo || "/golden-emblem.png"}
              alt="Uploaded Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Department Strip */}
          <div className="flex justify-between bg-[#3a3b8f] text-white font-bold text-sm px-3 py-1 mt-2">
            <div>विभाग Department</div>
            <div>{department}</div>
          </div>

          {/* Identity Strip */}
          <div className="flex justify-between bg-black text-white px-3 py-1 text-sm">
            <div>परिचय पत्र Identity Card</div>
            <div>कं.सा. No. KUR/COMM/TC/CC/7983</div>
          </div>
        </div>

        {/* Main Section */}
        <div className="relative z-10 flex gap-5 px-5 py-3">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Image
              src="/indian-blue.png"
              alt="Watermark"
              width={200}
              height={200}
              className="object-contain mt-10"
            />
          </div>

          {/* Photo Section */}
          <div className="border w-[80px] h-[100px]">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo}
                alt="Photo"
                className="w-full h-full object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/id-photo.jpg"
                alt="Default"
                width={80}
                height={100}
                className="object-cover"
              />
            )}
          </div>

          {/* Details Section */}
          <div className="flex-1 text-[13px] ml-10 font-medium">
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-[#c930a4] text-xs">
                <div>नाम</div>
                <div>पदनाम</div>
                <div>पी.एफ./एन.पी.एस. स.</div>
                <div>कार्यालय / स्टेशन</div>
                <div>जन्म तिथि</div>
                <div>जारी तिथि</div>
              </div>
              <div className="text-xs font-bold ml-2">
                {name}
                <br />
                {designation}
                <br />
                {pfNo}
                <br />
                {office}
                <br />
                {dob}
                <br />
                {issueDate}
              </div>
            </div>
          </div>
        </div>

        {/* QR + Signatures */}
        <div className="flex flex-row items-end justify-between w-full px-10">
          {/* QR + Employee Signature */}
          <div>
            <div className="flex flex-col items-center">
              {qrImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrImage} alt="QR" className="w-[60px] h-[60px]" />
              ) : qrAuto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrAuto} alt="Auto QR" className="w-[60px] h-[60px]" />
              ) : (
                <span className="text-[10px] text-gray-400">QR</span>
              )}
            </div>

            {/* Employee Signature */}
            <div className="flex flex-col items-center text-[10px] mt-2">
              {employeeSign && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={employeeSign}
                  alt="Employee Sign"
                  className="h-[25px] mx-auto object-contain"
                />
              )}
              <div className="mt-1">
                हस्ताक्षर / <span className="font-semibold">Signature</span>
              </div>
            </div>
          </div>

          {/* Authority Signature */}
          <div className="flex flex-col items-center text-right text-[10px]">
            {authoritySign && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={authoritySign}
                alt="Authority Signature"
                className="h-[25px] object-contain"
              />
            )}
            <div className="mt-1 leading-tight">
              प्राधिकारी <span className="font-semibold">Sr. APO/KUR</span>
            </div>
            <div className="font-semibold">Issuing Authority</div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-5">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Print Front Side
        </button>
        <button
          onClick={() => navigation.push("/home/training/back")}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Back Side
        </button>
      </div>
    </div>
  );
}
