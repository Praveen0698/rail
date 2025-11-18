"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function NPSCard() {
  const navigation = useRouter();

  const cardRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(350);

  const [name, setName] = useState("MANARANJAN CHAND");
  const [fatherName, setFatherName] = useState("RABI SHANKAR CHAND");
  const [dob, setDob] = useState("18/06/1978");
  const [npsNumber, setNpsNumber] = useState("500012168552");
  const [photo, setPhoto] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

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

  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "NPS_ID_Card",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      {/* --- Form Controls --- */}
      <div className="bg-white p-4 rounded-lg shadow-md border w-full max-w-3xl space-y-3">
        <h2 className="text-lg font-bold text-center text-gray-700">
          National Pension System ID Card
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

          <div className="col-span-2">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div className="col-span-2">
            <label>Father’s Name</label>
            <input
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
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
          <div className="col-span-2">
            <label>Permanent Retirement Account Number</label>
            <input
              value={npsNumber}
              onChange={(e) => setNpsNumber(e.target.value)}
              className="border rounded w-full px-2 py-1"
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
            <label>Upload Signature</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, setSignature)}
            />
          </div>
        </div>
      </div>

      {/* --- Card Layout --- */}
      <div
        ref={cardRef}
        className="relative rounded-lg shadow-lg overflow-hidden"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage:
            "linear-gradient(to bottom, rgba(225,238,255,0.65) 0%, rgba(228,241,255,0.55) 35%, rgba(215,234,255,0.80) 100%), url('/download.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <div
          className="w-full flex items-center justify-between px-6 pt-3 pb-6"
          style={{
            background: `
    linear-gradient(to bottom, 
      #5a8cc4 0%,     
      #7db1e6 35%,    
      #b7d6f5 75%,     
      rgba(201,230,255,0) 100%
    ),
    radial-gradient(circle at top center, rgba(255,255,255,0.45), transparent 70%)
  `,
            boxShadow: "0 5px 12px rgba(0,0,0,0.25)",
            clipPath: "path('M0,80 Q300,58 600,95 L600,0 L0,0 Z')",
          }}
        >
          {/* Left: Government of India */}
          <div className="text-left leading-tight">
            <div className="text-[18px] font-bold text-black">
              Government of India
            </div>
            <div className="text-[13px] mt-1 text-black">भारत सरकार</div>
          </div>

          {/* Center Emblem */}
          <div className="flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Emblem.svg"
              alt="Ashoka Emblem"
              className="w-[58px] h-[58px] object-contain"
            />
          </div>

          {/* Right side */}
          <div className="text-right leading-tight">
            <div className="text-[18px] font-bold text-black">
              National Pension System
            </div>
            <div className="text-[13px] mt-1 text-black">
              नेशनल पेंशन सिस्टम
            </div>
          </div>
        </div>

        <svg width="100%" height="40" style={{ marginTop: "-35px" }}>
          <path
            d="M0 21 Q300 6 600 30"
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>

        {/* Body */}
        <div className="flex justify-between px-6 py-4 mt-[-10px] text-[13px] relative z-10">
          {/* Left Details */}
          <div className="space-y-2 w-[65%] mt-[-10px]">
            <div>
              <span className="font-semibold text-red-600">
                Name / <span className="text-[10px]">नाम :</span>
              </span>
              <br />
              <span className="font-bold">{name}</span>
            </div>

            <div>
              <span className="font-semibold text-red-600">
                Father&apos;s Name /{" "}
                <span className="text-[10px]">पिता का नाम :</span>
              </span>
              <br />
              <span className="font-bold">{fatherName}</span>
            </div>

            <div>
              <span className="font-semibold text-red-600">
                Date of Birth / <span className="text-[10px]">जन्म तिथि :</span>
              </span>
              <br />
              <span className="font-bold">{dob}</span>
            </div>

            <div>
              <span className="font-semibold text-red-600">
                Permanent Retirement Account Number :
              </span>
              <br />
              <span className="font-bold">{npsNumber}</span>
            </div>
            <div>
              {signature && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={signature}
                  alt="Signature"
                  className="h-[25px] object-contain mb-1"
                />
              )}
              <div className="font-semibold text-red-600">
                Subscriber Signature /{" "}
                <span className="text-[10px]">सदस्य हस्ताक्षर</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start justify-start w-[120px]">
            {/* Hologram Box */}
            <div className="w-[90px] h-[90px] bg-gray-200 border ml-2 border-gray-400 rounded-sm overflow-hidden">
              {/* Hologram image if you want */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hologram.png"
                alt="Hologram"
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            {/* Photo + Vertical Number Row */}
            <div className="flex flex-row mt-2 items-end">
              {/* Photo Box */}
              <div className="w-[90px] h-[110px] bg-white flex items-center justify-center overflow-hidden">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo}
                    alt="Photo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-xs">Photo</span>
                )}
              </div>

              {/* Vertical ID Number */}
              <div className="ml-1 flex items-center">
                <div
                  className="text-black font-bold tracking-widest text-[10px]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {npsNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Buttons --- */}
      <div className="flex gap-5">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Print NPS Card
        </button>
        <button
          onClick={() => navigation.push("/home/pension/back")}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Back Side
        </button>
      </div>
    </div>
  );
}
