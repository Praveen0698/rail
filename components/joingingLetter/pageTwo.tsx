"use client";

import Image from "next/image";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;
  group: string;
  chiefOfficerDivison: string;
  chiefOfficerCity: string;
  pageThreeDivison: string;
  pageThreeSpecialInstruction: string;
  footer: string;
  footerHindi: string;
}

export default function OfficeMemoPage2({ data }: { data: OfficeMemoData }) {
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

        <hr className="border-black my-3" />

        <div className="relative z-10 mx-20 mt-6 text-[11.5px] leading-[1.65]">
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-bold">
                The Chief Personal Officer
                <br />
                {data.chiefOfficerDivison}
                <br />
                {data.chiefOfficerCity}
              </p>
            </div>

            <div className="flex gap-2.5">
              <div>
                <p>
                  <b>Date:</b> __________
                </p>
                <p>
                  <b>Place:</b> __________
                </p>
              </div>
              <div
                className={`border border-black w-[110px] h-[130px] flex items-center justify-center text-center text-[12px] font-semibold leading-snug`}
              >
                <p>Photo</p>
              </div>
            </div>
          </div>

          <p className="font-bold underline mb-3">
            Sub:- Sacrificing Letter for the post of New Recruitment of R.R.B.
          </p>

          <p className="mb-3 font-bold">Respected Sir,</p>

          <p className="mb-3">
            With due respect, I beg to inform you that I am Mr./Miss/Mrs.
            _____________________________________________________ S/O / D/O /
            W/O _____________________________________________ My present address
            is Village __________________________ P.O. ________________________
            P.S. ________________________ Dist. ________________________ Pin
            code ________________________ State ________________________
          </p>

          <p className="mb-3 font-semibold">
            Now I am a Group “{data.group}” Category Staff under your kind control in
            {data.pageThreeDivison}
          </p>

          <p className="mb-3">
            And I will continue my service for the Indian Railway on behalf of
            President of India and I shall undertake and declaration given by me
            if found any false or incorrect then I will be liable to accept any
            type of punishment from your administration or from the recruiting
            authority with this connection.
          </p>

          <p className="mb-3">Three specimen signature are as under:</p>

          <div className="mb-4">
            <p>1. ____________________</p>
            <p>2. ____________________</p>
            <p>3. ____________________</p>
          </div>

          <p className="mb-3">
            Signature of guardian with full postal address:
          </p>

          <p>________________________________________________________</p>
          <p className="mb-6">
            ________________________________________________________
          </p>

          <p className="mb-6">Thanking you,</p>

          <div className="flex justify-between mt-10">
            <div>
              <p>Yours Faithfully</p>
              <p className="mt-6">____________________________</p>
              <p>____________________________</p>
              <p>Signature of Witness with full postal address</p>
            </div>

            <div className="text-right">
              <p className="mt-6">________________________</p>
              <p>Signature of the Candidate</p>
            </div>
          </div>

          <p className="mt-8 text-[11px] font-bold">
            Special Instruction: {data.pageThreeSpecialInstruction}
          </p>
        </div>

        <div className="absolute bottom-[8mm] left-[18mm] right-[18mm] text-center text-blue-900 font-medium text-[12px]">
          <p>{data.footer}</p>
          <p>{data.footerHindi}</p>
        </div>
      </div>
    </div>
  );
}
