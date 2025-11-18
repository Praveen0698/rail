"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function EastCoastRailwayIDBack() {
  const navigation = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(680);
  const [height, setHeight] = useState(400);

  // 🔹 Data fields
  const [issueDate, setIssueDate] = useState("02.09.2024");
  const [bloodGroup, setBloodGroup] = useState("B+");
  const [fatherName, setFatherName] = useState("SHAILENDRA BHAGAT");
  const [address, setAddress] = useState(
    "AT: MADHOPUR ANANT\nPOST: KHAIRWA DARP\nDIST: SHEOHAR, PIN: 843329"
  );
  const [dob, setDob] = useState("06.01.1994");
  const [doj, setDoj] = useState("12.04.2024");
  const [dor, setDor] = useState("14.08.2054");
  const [phoneO, setPhoneO] = useState("NA");
  const [phoneR, setPhoneR] = useState("NA");
  const [phoneM, setPhoneM] = useState("7766995004");

  // ✅ Dynamic footer address
  const [returnAddress, setReturnAddress] = useState(
    "Sr.DPO/KUR, Office of DRM, East Coast Railway\nKhurda Road, Jatni - 752050 (Odisha)"
  );

  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "EastCoast_Railway_ID_Back",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      {/* --- Control Form --- */}
      <div className="bg-white p-4 rounded-lg shadow-md border w-full max-w-4xl space-y-3">
        <h2 className="text-lg font-bold text-center text-gray-700">
          East Coast Railway ID - Back Side
        </h2>

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
            <label>Issue Date</label>
            <input
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Blood Group</label>
            <input
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div className="col-span-2">
            <label>Father/Husband Name</label>
            <input
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div className="col-span-2">
            <label>Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded w-full px-2 py-1"
              rows={3}
            />
          </div>
          <div>
            <label>D.O.B</label>
            <input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>D.O.J</label>
            <input
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>D.O.R</label>
            <input
              value={dor}
              onChange={(e) => setDor(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Ph(o)</label>
            <input
              value={phoneO}
              onChange={(e) => setPhoneO(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Ph(R)</label>
            <input
              value={phoneR}
              onChange={(e) => setPhoneR(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Ph(M)</label>
            <input
              value={phoneM}
              onChange={(e) => setPhoneM(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>

          {/* ✅ Return Address Field */}
          <div className="col-span-3">
            <label>Return Address (Footer)</label>
            <textarea
              value={returnAddress}
              onChange={(e) => setReturnAddress(e.target.value)}
              className="border rounded w-full px-2 py-1"
              rows={2}
            />
          </div>
        </div>
      </div>

      {/* --- Back Card Layout --- */}
      <div
        ref={cardRef}
        className="relative rounded-lg border bg-white shadow-lg overflow-hidden"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Header */}
        <div className="flex justify-between bg-[#3a3b8f] text-white font-bold text-[14px] p-5 px-10">
          <div className="border-b border-white">परिवार का विवरण</div>
          <div className="border-b border-white">Details of the Family</div>
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/indian-blue.png"
            alt="Watermark"
            className="object-contain w-[220px] h-[220px]"
          />
        </div>

        {/* Family Details */}
        <div className="relative z-10 flex justify-between px-8 py-5 text-[13px] leading-relaxed">
          {/* LEFT COLUMN */}
          <div className="text-left w-[55%]">
            <p className="text-red-600 font-semibold">
              Issue Date :{" "}
              <span className="text-black font-bold">{issueDate}</span>
            </p>
            <p className="text-red-600 font-semibold">
              FATHER/HUSBAND NAME :{" "}
              <span className="text-black font-bold">{fatherName}</span>
            </p>
            <p className="text-red-600 font-semibold">ADDRESS :</p>
            <pre className="text-black font-bold whitespace-pre-wrap">
              {address}
            </pre>

            <div className="mt-2 flex flex-col">
              <p className="text-red-600 font-semibold">
                D.O.B : <span className="text-black font-bold">{dob}</span>
              </p>
              <p className="text-red-600 font-semibold">
                Ph(o) : <span className="text-black font-bold">{phoneO}</span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="text-left w-[40%]">
            <p className="text-red-600 font-semibold">
              Blood Group :{" "}
              <span className="text-black font-bold">{bloodGroup}</span>
            </p>
            <p className="text-black font-bold mb-3">{fatherName}</p>

            <p className="text-red-600 font-semibold">
              D.O.J : <span className="text-black font-bold">{doj}</span>
            </p>
            <p className="text-red-600 font-semibold">
              D.O.R : <span className="text-black font-bold">{dor}</span>
            </p>
            <p className="text-red-600 font-semibold">
              Ph(R): <span className="text-black font-bold">{phoneR}</span>
            </p>
            <p className="text-red-600 font-semibold">
              Ph(M): <span className="text-black font-bold">{phoneM}</span>
            </p>
          </div>
        </div>

        {/* ✅ Dynamic Footer */}
        <div className="absolute bottom-4 w-full text-center text-[12px] leading-tight px-6">
          <p className="font-medium">
            If Found Please Post it to the following address
          </p>
          <pre className="font-bold mt-1 whitespace-pre-wrap">
            {returnAddress}
          </pre>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-5">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Print Back Side
        </button>
        <button
          onClick={() => navigation.back()}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
