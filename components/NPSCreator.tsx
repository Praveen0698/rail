"use client";
import { useRef, useState, useEffect } from "react";
import * as htmlToImage from "html-to-image";
import Image from "next/image";
import Emblem from "@/public/Emblem.svg";

// ✅ Date formatting helper
function formatDateToDDMMYYYY(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function NPSCreator() {
  const [form, setForm] = useState({
    name: "SANJU KUMARI",
    father: "BIRENDRA KUMAR SINGH",
    dob: "1989-12-31",
    pran: "500070879580",
    signatureText: "Sanju Kumari",
    photo: "",
    signatureImg: "",
  });

  const [preview, setPreview] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // ✅ Ensures code only runs after client mount (avoids hydration mismatch)
  useEffect(() => setIsClient(true), []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((s) => ({ ...s, photo: reader.result as string }));
    reader.readAsDataURL(f);
  };

  const onSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((s) => ({ ...s, signatureImg: reader.result as string }));
    reader.readAsDataURL(f);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        backgroundColor: undefined,
        pixelRatio: 2,
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${(form.name || "pension-card").replace(/\s+/g, "-")}.png`;
      a.click();
    } catch (err) {
      console.error(err);
      alert("Failed to generate image. Check console.");
    }
  };

  // ✅ Render nothing until client mounts (prevents mismatch)
  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 py-10 px-4">
      {/* Form */}
      {!preview ? (
        <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow">
          <h1 className="text-2xl font-extrabold text-slate-800 mb-4">
            New Pension System — ID Creator
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Name (UPPERCASE)"
              className="border rounded p-2"
            />
            <input
              name="father"
              value={form.father}
              onChange={onChange}
              placeholder="Father's / Spouse Name (UPPERCASE)"
              className="border rounded p-2"
            />
            <input
              name="dob"
              type="date"
              value={form.dob}
              onChange={onChange}
              className="border rounded p-2"
            />
            <input
              name="pran"
              value={form.pran}
              onChange={onChange}
              placeholder="PRAN Number"
              className="border rounded p-2"
            />
            <input
              name="signatureText"
              value={form.signatureText}
              onChange={onChange}
              placeholder="Signature text (fallback)"
              className="col-span-1 md:col-span-2 border rounded p-2"
            />

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Upload Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={onPhotoUpload}
                className="w-full"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Upload Signature Image (handwritten)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={onSignatureUpload}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setPreview(true)}
              className="bg-blue-700 text-white px-5 py-2 rounded font-semibold hover:bg-blue-800"
            >
              Preview Card
            </button>
            <button
              onClick={() =>
                setForm({
                  name: "",
                  father: "",
                  dob: "",
                  pran: "",
                  signatureText: "",
                  photo: "",
                  signatureImg: "",
                })
              }
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      ) : null}

      {/* Preview and Buttons */}
      {preview && (
        <div className="flex flex-col items-center gap-4">
          <div
            ref={cardRef}
            className="relative w-[560px] h-[320px] rounded-lg shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(90deg, #cfeff0 0%, #bfeff2 50%, #c9f2ec 100%)",
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          >
            {/* Curved Header */}
           {/* Curved Header (exact shape like uploaded card) */}
<div className="relative h-[90px] overflow-hidden">
  <svg
    viewBox="0 0 560 90"
    className="absolute top-0 left-0 w-full h-full"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="headerGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="40%" stopColor="#5aa9e6" />
        <stop offset="100%" stopColor="#78c6f7" />
      </linearGradient>
    </defs>

    <path
      d="
        M0,0
        H560
        V70
        Q430,85 280,75
        Q130,65 0,70
        Z
      "
      fill="url(#headerGradient)"
    />
  </svg>

  <div className="relative flex items-center justify-between px-5 pt-4 text-white drop-shadow-md">
    <div>
      <div className="text-[20px] font-extrabold">Government of India</div>
      <div className="text-[14px] font-bold mt-0">भारत सरकार</div>
    </div>

    <div className="flex items-center justify-center">
      <Image
        src={Emblem}
        alt="emblem"
        className="w-12 h-12 object-contain"
      />
    </div>

    <div className="text-right">
      <div className="text-[20px] font-extrabold">New Pension System</div>
      <div className="text-[14px] font-bold mt-0">नई पेंशन सिस्टम</div>
    </div>
  </div>
</div>


            {/* Body */}
            <div className="absolute top-[95px] left-0 right-0 bottom-0 p-4 flex">
              {/* Left Side */}
              <div className="flex-1 pr-3">
                <div className="mb-2">
                  <div className="text-red-600 text-[12px] font-semibold">
                    Name
                  </div>
                  <div className="text-[18px] font-bold uppercase">
                    {form.name || "_____________"}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-red-600 text-[12px] font-semibold">
                    Father&apos;s Name
                  </div>
                  <div className="text-[14px] font-bold uppercase">
                    {form.father || "_____________"}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-red-600 text-[12px] font-semibold">
                    Date of Birth
                  </div>
                  <div className="text-[14px] font-bold">
                    {formatDateToDDMMYYYY(form.dob) || "DD/MM/YYYY"}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-red-600 text-[12px] font-medium">
                    Permanent Retirement Account Number
                  </div>
                  <div className="text-[13px] font-bold mt-1">
                    {form.pran || "_____________"}
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-6">
                  <div className="text-[12px] font-semibold mb-2">
                    Specimen Signature
                  </div>
                  <div className="w-52 h-12 bg-white border border-gray-300 flex items-center justify-center px-2">
                    {form.signatureImg ? (
                      <Image
                        src={form.signatureImg}
                        alt="signature"
                        className="h-full object-contain"
                        unoptimized
                      />
                    ) : (
                      <div className="font-semibold italic text-[14px]">
                        {form.signatureText || ""}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-40 flex flex-col items-end">
                {/* Hologram */}
                <div
                  className="mb-4 w-24 h-28 rounded-sm relative overflow-hidden border border-gray-300"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)",
                    transform: "skewY(-6deg)",
                    filter: "saturate(0.9) contrast(1.05)",
                  }}
                >
                  <div className="absolute bottom-1 right-1 text-[9px] font-bold text-gray-700/70">
                    INDIA
                  </div>
                </div>

                {/* Photo */}
                <div className="w-28 h-36 bg-white border border-gray-400 overflow-hidden">
                  {form.photo ? (
                    <Image
                      src={form.photo}
                      alt="photo"
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[12px] text-gray-500">
                      Photo
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Signature */}
            <div style={{ position: "absolute", left: 18, bottom: 10 }}>
              <div className="text-[13px] font-semibold">
                {form.signatureText || ""}
              </div>
              <div className="text-[10px] text-gray-700 mt-1">
                Subscriber Signature
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setPreview(false)}
              className="px-5 py-2 rounded bg-gray-800 text-white hover:bg-gray-900"
            >
              Edit
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Download PNG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
