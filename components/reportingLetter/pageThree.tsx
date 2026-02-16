"use client";

import Image from "next/image";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;
  group: string;
  zone: string;
  divison: string;
  footer: string;
  footerHindi: string;
}

export default function OfficeMemoPage3({ data }: { data: OfficeMemoData }) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div
        style={{
          width: "210mm",
          height: "297mm",
          background: "white",
          position: "relative",
          boxSizing: "border-box",
          border: "1px solid black",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/indian-railway.png"
            alt="Indian Railways Watermark"
            width={360}
            height={360}
            className="opacity-[0.08]"
          />
        </div>

        <div className="flex items-center px-10 py-2.5">
          <div className="w-[80px] flex justify-start">
            <Image
              src="/emblemBlack.png"
              alt="Government of India Emblem"
              width={60}
              height={80}
            />
          </div>

          <div className="flex-1 text-center leading-tight">
            <p className="text-[14px] font-semibold uppercase">
              Govt. of India (Ministry of Railways)
            </p>

            <p className="text-[16px] font-bold uppercase mt-1">
              Railway Recruitment Board, {data.boardCity}
            </p>

            <p className="text-[12px] mt-1">{data.boardAddress}</p>
            <p className="text-[12px] mt-1">{data.boardContact}</p>
          </div>

          <div className="w-[100px] flex justify-end">
            <Image
              src="/indian-railway.png"
              alt="Indian Railways Logo"
              width={90}
              height={90}
            />
          </div>
        </div>

        <hr className="border-black my-2" />

        <div className="relative z-10 mx-20 mt-6 text-[11.5px] leading-[1.6]">
          <div className="flex justify-between mb-4">
            <p className="font-bold">
              This record is only for the special action and the new joining
              staff
            </p>
            <p>
              <b>Date:</b> _______________________________
            </p>
          </div>

          <p className="mb-3 font-bold">
            Of Group “{data.group}” in {data.zone} at {data.divison}
          </p>

          <p className="mb-3">
            Impression of both hands of the new joining staff with specimen
            signature as per instruction below:
          </p>

          <p className="mb-3 font-bold">
            Name of the Candidate: ______________________________________
          </p>

          {/* ================= TABLE ================= */}
          <div className="border  mt-4">
            <div className="grid grid-cols-2 text-center font-bold border-b ">
              <div className="border-r py-1">Right Hand</div>
              <div className="py-1">Left Hand</div>
            </div>

            {/* Thumb */}
            <div className="grid grid-cols-2 border-b ">
              <div className="border-r p-2">
                <p className="font-bold text-center">Thumb</p>
                <p className="text-center mt-6">Signature</p>
              </div>
              <div className="p-2">
                <p className="font-bold text-center">Thumb</p>
                <p className="text-center mt-6">Signature</p>
              </div>
            </div>

            {/* F1 */}
            <div className="grid grid-cols-2 border-b ">
              <div className="border-r p-2">
                <p className="font-bold">F1</p>
                <p className="text-center mt-6">Signature</p>
              </div>
              <div className="p-2">
                <p className="font-bold">F1</p>
                <p className="text-center mt-6">Signature</p>
              </div>
            </div>

            {/* F2 */}
            <div className="grid grid-cols-2 border-b ">
              <div className="border-r p-2">
                <p className="font-bold">F2</p>
                <p className="text-center mt-6">Signature</p>
              </div>
              <div className="p-2">
                <p className="font-bold">F2</p>
                <p className="text-center mt-6">Signature</p>
              </div>
            </div>

            {/* F3 */}
            <div className="grid grid-cols-2 border-b ">
              <div className="border-r p-2">
                <p className="font-bold">F3</p>
                <p className="text-center mt-6">Signature</p>
              </div>
              <div className="p-2">
                <p className="font-bold">F3</p>
                <p className="text-center mt-6">Signature</p>
              </div>
            </div>

            {/* F4 */}
            <div className="grid grid-cols-2 border-b ">
              <div className="border-r p-2">
                <p className="font-bold">F4</p>
                <p className="text-center mt-6">Signature</p>
              </div>
              <div className="p-2">
                <p className="font-bold">F4</p>
                <p className="text-center mt-6">Signature</p>
              </div>
            </div>

            {/* F5 */}
            <div className="grid grid-cols-2">
              <div className="border-r p-2">
                <p className="font-bold">F5</p>
                <p className="text-center mt-6">Signature</p>
              </div>
              <div className="p-2">
                <p className="font-bold">F5</p>
                <p className="text-center mt-6">Signature</p>
              </div>
            </div>
          </div>

          <p className="mt-4 font-bold">Candidate Thumb Impression</p>

          <p className="mt-2">
            These fingers impression are valid if you make it in front of your
            Officer-in-charge only and return to office.
          </p>

          <div className="flex justify-end mt-10">
            <div className="text-right">
              <p className="font-bold">Signature Officer In-charge</p>
              <p className="mt-6">___________________________________</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[8mm] left-[18mm] right-[18mm] text-center text-blue-900 font-medium text-[12px]">
          <p>{data.footer}</p>
          <p>{data.footerHindi}</p>
        </div>
      </div>
    </div>
  );
}
