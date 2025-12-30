"use client";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import QRCode from "qrcode";
import { useRouter } from "next/navigation";

export default function EastCoastRailwayIDFront() {
  const navigation = useRouter();

  const cardRef = useRef<HTMLDivElement>(null);

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
    documentTitle: "PVC_ID_CARD",
    pageStyle: `
      @page {
        size: 86mm 54mm;
        margin: 0;
      }
      body {
        margin: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    `,
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
        className="relative rounded-lg bg-white overflow-hidden"
        style={{ width: `325.03937008px`, height: `204.09448819px` }}
      >
        {/* Header Section */}
        <div className="relative z-10 p-1">
          <div className="flex justify-between items-center px-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/indian-railway.png"
              alt="Railway Logo"
              width={35}
              height={35}
              className="object-contain"
            />

            {/* Center Title */}
            <div className="text-center flex-1">
              <div className="font-semibold text-[8px]">{divisionHindi}</div>
              <div className="font-bold text-[9px]">{divisionEnglish}</div>
              <div className="text-[6px] font-medium">{subDivision}</div>
            </div>

            {/* ✅ Right Uploadable Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo || "/golden-emblem.png"}
              alt="Uploaded Logo"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Department Strip */}
          <div className="flex justify-between bg-[#3a3b8f] text-white font-bold text-[6px] px-3 py-0.5 mt-1">
            <div>विभाग Department</div>
            <div>{department}</div>
          </div>

          {/* Identity Strip */}
          <div className="flex justify-between bg-black text-white px-3 py-0.5 text-[6px]">
            <div>परिचय पत्र Identity Card</div>
            <div>कं.सा. No. KUR/COMM/TC/CC/7983</div>
          </div>
        </div>

        {/* Main Section */}
        <div className="relative z-10 flex gap-5 px-2.5 py-0.5">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/indian-blue.png"
              alt="Watermark"
              width={100}
              height={100}
              className="object-contain mt-5"
            />
          </div>

          {/* Photo Section */}
          <div className={`${!photo && "border"} w-[45px] h-[55px]`}>
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo}
                alt="Photo"
                width={45}
                height={55}
                className="w-full h-full object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/id-photo.jpg"
                alt="Default"
                width={45}
                height={55}
                className="object-cover"
              />
            )}
          </div>

          {/* Details Section */}
          <div className="flex-1 text-[9px] ml-5 font-medium">
            <div className="grid grid-cols-2 gap-y-1">
              <div className="text-[#c930a4] text-[6px]">
                <div className="flex justify-between">
                  <span className="text-[#c930a4]">नाम</span>
                  <span className="text-[#c930a4]">Name :</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c930a4]">पदनाम</span>
                  <span className="text-[#c930a4]">Desig :</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c930a4]">पी.एफ./एन.पी.एस. स.</span>
                  <span className="text-[#c930a4]">P.F/NPS No :</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c930a4]">कार्यालय / स्टेशन</span>
                  <span className="text-[#c930a4]">Office/Stn :</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c930a4]">जन्म तिथि</span>
                  <span className="text-[#c930a4]">D.O.B :</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c930a4]">जारी तिथि</span>
                  <span className="text-[#c930a4]">Date of Issue :</span>
                </div>
              </div>
              <div className="text-[6px] font-bold ml-2">
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
        <div className="flex flex-row items-end justify-between w-full px-2.5 mt-1">
          {/* QR + Employee Signature */}
          <div>
            <div className="flex flex-col items-center">
              {qrImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrImage} alt="QR" className="w-[20px] h-[20px]" />
              ) : qrAuto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrAuto} alt="Auto QR" className="w-[20px] h-[20px]" />
              ) : (
                <span className="text-[5px] text-gray-400">QR</span>
              )}
            </div>

            {/* Employee Signature */}
            <div className="flex flex-col items-center text-[5px] mt-1">
              {employeeSign && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={employeeSign}
                  alt="Employee Sign"
                  className="h-[13px] mx-auto object-contain"
                />
              )}
              <div className="mt-1">
                हस्ताक्षर / <span className="font-semibold">Signature</span>
              </div>
            </div>
          </div>

          {/* Authority Signature */}
          <div className="flex flex-col items-center text-right text-[5px]">
            {authoritySign && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={authoritySign}
                alt="Authority Signature"
                className="h-[13px] object-contain"
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
