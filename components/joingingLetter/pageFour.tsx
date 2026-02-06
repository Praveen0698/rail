"use client";

import Image from "next/image";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;
  footer: string;
  footerHindi: string;
}

export default function OfficeMemoPage4({ data }: { data: OfficeMemoData }) {
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

        <div className="relative z-10 mx-20 mt-6 text-[11.5px] leading-[1.65] text-black">
          <p className="text-center font-bold underline mb-4">
            Resident Proof Certificate
          </p>

          <p className="mb-3">
            I Mr./Miss/Mrs. _______________________________________________ S /
            O, D / O, W / O _______________________________________________ My
            present address is Vill. __________________________________________
            P.O. _____________________________ &nbsp;&nbsp; P.S.
            ______________________________ &nbsp;&nbsp; Dist.
            ______________________________ Pin code
            _________________________________ &nbsp;&nbsp; State
            ___________________________________
          </p>

          <p className="font-bold underline mb-3">Family Information</p>

          <p className="mb-3">
            1. Local Guardian&apos;s Name
            ____________________________________________
          </p>

          <p className="mb-3">
            2. Relation with Local Guardian
            _____________________________________
          </p>

          <p className="mb-3">
            3. Monthly Family Income ___________________________________________
          </p>

          <p className="mb-3">
            4. Occupation of Guardian __________________________________________
          </p>

          <p className="mb-3">
            5. No. of Family Members ___________________________________________
          </p>

          <p className="mb-5">
            6. Nationality ______________________________ &nbsp;&nbsp; Religion
            _______________________________
          </p>

          <p className="mb-4 font-bold">
            The above declaration is true to the best of my knowledge and
            belief.
          </p>

          <p className="mb-6">
            Place _____________________________ &nbsp;&nbsp;&nbsp; Date
            _____________________________
          </p>

          <div className="flex justify-end mb-8">
            <div className="text-right">
              <p className="mt-6">____________________________</p>
              <p>Signature of the Candidate</p>
            </div>
          </div>

          <p className="font-bold underline mb-3">Certified By:</p>

          <div className="mb-6">
            <p className="mb-2">Signature of any Gazetted Officer</p>
            <p>____________________________</p>
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
