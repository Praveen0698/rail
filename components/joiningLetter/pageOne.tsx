"use client";

import Image from "next/image";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;

  division: string;
  ooNo: string;

  ref1: string;
  ref2: string;

  from: string;
  fromAddress: string;

  candidateName: string;
  candidateSO: string;

  applicationNo: string;
  memoNo: string;

  group: string;
  designation: string;
  payScale: string;

  letterNo: string;
  letterDated: string;
  divionalManagerCity: string;
  divisionZoneAddress: string;

  stipend: string;

  community: string;
  dob: string;
  education: string;
  medical: string;
  bank: string;

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

        <p className="text-center text-[16px] font-bold">{data.division}</p>
        <p className="text-center text-[16px] font-bold">O.O No. {data.ooNo}</p>

        <div className="flex items-center gap-2 justify-center my-4 font-medium">
          <div className="flex flex-col items-end">
            <p>Ref 1:</p>
            <p>2:</p>
          </div>
          <div className="flex flex-col items-start text-[14px]">
            <p>{data.ref1} </p>
            <p>{data.ref2} </p>
          </div>
        </div>

        <div className="m-5 mx-20 text-[11px] leading-[1.55]">
          <div className="flex justify-between items-start mb-5">
            <div className="text-[12px] leading-[1.55] font-semibold">
              <p>From,</p>
              <p>{data.from}</p>
              <p>{data.division}</p>
              <p>{data.fromAddress}</p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className="text-[12px] leading-[1.55] font-semibold">
              <p>To,</p>
              <p>{data.candidateName}</p>
              <p>S/o. {data.candidateSO}</p>
              <p>Application No. {data.applicationNo},</p>
              <p>Memo No. {data.memoNo},</p>
            </div>
          </div>

          <div className="mt-8 text-[12px] leading-[1.6] font-semibold flex gap-2.5">
            <p>Subject:</p>
            <p>
              Appointment to the Group ‘{data.group}’ service as Probationary{" "}
              {data.designation} in Pay Band {data.payScale}
            </p>
          </div>

          <div className="mt-5 text-[12px] leading-relaxed font-base">
            <p>
              On the recommendation of the Railway Recruitment Board, New Delhi
              vide their letter No. {data.letterNo} dated {data.letterDated},
              you are hereby offered appointment to the post of Probationary{" "}
              {data.designation} with posting in the Office of the Divisional
              Railway Manager (DRM), {data.divionalManagerCity}, situated at{" "}
              {data.divisionZoneAddress}, in the pay scale of {data.payScale},
              plus usual allowances as sanctioned by the Government from time to
              time, purely on a temporary basis and subject to the following
              terms and conditions.
            </p>
          </div>
          <div className="mt-5 text-[12px] leading-relaxed font-base">
            <p>
              Having accepted the terms and conditions stipulated in the Offer
              of Appointment cited above (Reference 2) and having been found
              medically fit in Aye Two and below without glasses, you are
              appointed as Probationary {data.designation} in the pay scale of{" "}
              {data.payScale}. You will draw a stipend of {data.stipend} as per
              the rules in force from time to time in the Commercial Department.
            </p>
          </div>
          <div className="mt-5">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr>
                  <th className="border border-black p-1 w-[5%]">S No.</th>
                  <th className="border border-black p-1 w-[12%]">
                    Name S/Shri
                  </th>
                  <th className="border border-black p-1 w-[13%]">Community</th>
                  <th className="border border-black p-1 w-[13%]">
                    Father’s Name
                  </th>
                  <th className="border border-black p-1 w-[10%]">
                    Date of birth
                  </th>
                  <th className="border border-black p-1 w-[13%]">
                    Educational qualification
                  </th>
                  <th className="border border-black p-1 w-[17%]">
                    Medical Fitness No. & Date
                  </th>
                  <th className="border border-black p-1 w-[17%]">
                    Name of the Bank/Branch & Account No.
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-black p-1 text-center">1.</td>
                  <td className="border border-black p-1">
                    {data.candidateName}
                  </td>
                  <td className="border border-black p-1">{data.community}</td>
                  <td className="border border-black p-1">
                    {data.candidateSO}
                  </td>
                  <td className="border border-black p-1">{data.dob}</td>
                  <td className="border border-black p-1">{data.education}</td>
                  <td className="border border-black p-1">{data.medical}</td>
                  <td className="border border-black p-1">{data.bank}</td>
                </tr>
              </tbody>
            </table>
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
