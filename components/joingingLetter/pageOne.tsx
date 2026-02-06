"use client";

import Image from "next/image";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;
  number: string;
  admNumber: string;
  memoNo: string;
  programmeDemand: string;
  year: string;
  candidateSO: string;
  addressStreet: string;
  addressLocality: string;
  addressCityState: string;
  applicationDate: string;
  group: string;
  payScale: string;
  reference: string;
  candidateName: string;
  pageOnePointThree: string;
  asName: string;
  asLocation: string;
  cpName: string;
  cpLocation: string;
  cpSign: string;
  asSign: string;
  footer: string;
  footerHindi: string;
}

export default function OfficeMemoPage1({ data }: { data: OfficeMemoData }) {
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

        <p className="text-center font-bold w-[70%] text-[15px] leading-snug mb-[30px] mx-auto">
          GOVT. OF INDIA NO. {data.number} / ADMN / {data.admNumber} / GROUP-
          {data.group} / N.DELHI /{data.year} MEMO NO. {data.memoNo} / PROGRAMME
          / DEMAND / {data.programmeDemand}
        </p>

        <div className="m-5 mx-20 text-[11px] leading-[1.55]">
          <div className="flex justify-between items-start">
            <div className="text-[12px] leading-[1.55] font-bold">
              <p>To,</p>
              <p>{data.candidateName}</p>
              <p>S/o. {data.candidateSO}</p>
              <p>{data.addressStreet},</p>
              <p>{data.addressLocality},</p>
              <p>{data.addressCityState}</p>
            </div>

            <p className="text-[12px] leading-[1.55]">
              <b>Date:</b> {data.applicationDate}
            </p>
          </div>

          <div className="mt-8 text-[12px] leading-[1.6] font-bold flex gap-2.5">
            <p>Sub:</p>
            <p className="underline">
              Appointment Letter for the post of Group – &quot; {data.group}{" "}
              &quot; in the Payscale of {data.payScale} plus Other Allowance.
              (R.P.)
            </p>
          </div>

          <div className="my-4 text-[12px] leading-[1.6] font-bold flex gap-2.5">
            <p>Ref:</p>
            <p className="underline">{data.reference}</p>
          </div>

          <div className="mt-2 text-[11px] leading-relaxed font-bold">
            <p>
              You are hereby directed to reported to SPO / RP / Recruitment
              section at once (Except Sunday and Gazetted Holiday) along with
              all original certificates together with one attested copy of each
              certificate (Xerox copy should also be attested).
            </p>
          </div>

          <div className="my-4 text-[11px] leading-[1.6]">
            <p>
              1. Enclosed documents must be brought with you duly filled in.
            </p>

            <p className="my-4">
              2. 3 (three) attestations from Head Master / Principal where you
              have studied last and the same must be attested by Stipendiary
              Executive Magistrate, District Magistrate or Sub-Divisional
              Magistrate.
            </p>

            <p>3. {data.pageOnePointThree}</p>
          </div>
        </div>

        <p className="text-center underline text-[18px] font-semibold">
          BY ORDER
        </p>

        <div className="flex justify-between items-center mx-20 text-[11px]">
          <div>
            <p>Copy to for necessary action:</p>
            <p>Rly. Recruitment Board</p>
            <p>A) Union cell</p>
            <p>B) O.S. / Pay Bill</p>
            <p>C) D.R.M. / KUR</p>
            <p>D) Sr. DFM</p>
          </div>

          <div className="flex flex-col gap-5 text-center mt-5">
            <div>
              {data.asSign ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.asSign}
                  alt="Signature"
                  className="h-[25px] object-contain mb-1 mx-auto"
                />
              ) : (
                <div className="h-10" />
              )}
              <p>({data.asName})</p>
              <p>Assistant Secretary</p>
              <p>Rly. Recruitment Board</p>
              <p>{data.asLocation}</p>
            </div>

            <div>
              {data.cpSign ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.cpSign}
                  alt="Signature"
                  className="h-[25px] mx-auto object-contain mb-1"
                />
              ) : (
                <div className="h-10" />
              )}
              <p>({data.cpName})</p>
              <p>Chief Personnel Officer (RP)</p>
              <p>{data.cpLocation}</p>
            </div>
          </div>
        </div>

        <p className="mx-20 mt-3 text-[11px] leading-relaxed">
          Special instruction: After joining you will get 46 days joining leave
          for readiness & to complete I. Card, Medical Facility Card &
          arrangement of Railway Quarter. Police verification will be completed
          during this period.
        </p>

        <div className="absolute bottom-[8mm] left-[18mm] right-[18mm] text-center text-blue-900 font-medium text-[12px]">
          <p>{data.footer}</p>
          <p>{data.footerHindi}</p>
        </div>
      </div>
    </div>
  );
}
