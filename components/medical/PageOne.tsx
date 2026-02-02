"use client";

import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;
  designation: string;
  cenNo: string;
  employmentNotice: string;
  photo: string;
  rollNo: string;
  testDate: string;
  controlNo: string;
  community: string;
  group: string;
  reportingTime: string;
  qrValue: string;
  candidateName: string;
  fatherName: string;
  addressLine1: string;
  addressLine2: string;
  venue: string;
  chiefGeneralManagerZone: string;
  footer: string;
  footerHindi: string;
}

export default function OfficeMemoPage1({ data }: { data: OfficeMemoData }) {
  return (
    <div className=" min-h-screen flex flex-col items-center">
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

        <p className="text-center font-bold text-[17px] leading-snug mb-[30px]">
          CALL LETTER FOR MEDICAL EXAMINATION <br />
          FOR {data.designation} POSTS <br />
          AGAINST CEN No. {data.cenNo}
        </p>

        <div className="text-[12px] m-5">
          <div className="grid grid-cols-[1fr_1fr_140px] border border-black text-[12px]">
            <div className="p-2 border-r border-b border-black leading-relaxed">
              <p>
                रोजगार सूचना संख्या / Employment Notice No{": "}
                <b>{data.employmentNotice}</b>
              </p>

              <p className="mt-2">
                रोल संख्या / Roll No{": "}
                <b>{data.rollNo}</b>
              </p>

              <p className="mt-2">
                परीक्षा तिथि / Test Date{": "}
                <b>{data.testDate}</b>
              </p>
            </div>

            <div className="p-2 border-r border-b border-black leading-relaxed">
              <p>
                नियंत्रण संख्या / Control No{": "}
                <b>{data.controlNo}</b>
              </p>

              <p className="mt-2">
                समूह / Group{": "}
                <b>{data.group}</b>
              </p>

              <p className="mt-2">
                समुदाय / Community{": "}
                <b>{data.community}</b>
              </p>

              <p className="mt-2">
                रिपोर्टिंग समय / Reporting Time{": "}
                <b>{data.reportingTime}</b>
              </p>
            </div>

            <div className="row-span-2 flex flex-col items-center p-2 gap-2">
              <div
                className={`${data.photo ? null : "border border-black"}  w-[110px] h-[130px] flex items-center justify-center text-center text-[12px] font-semibold leading-snug`}
              >
                {data.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={data.photo}
                    alt="Photo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p>
                    Affix one
                    <br />
                    passport size
                    <br />
                    recent photograph
                  </p>
                )}
              </div>

              <QRCodeCanvas value={data.qrValue} size={90} />
            </div>

            <div className="col-span-2 p-2 text-center font-bold leading-snug border-r border-black ">
              <p className="text-[12px]">
                उम्मीदवार का नाम / पिता / पति का नाम / पता / Candidate’s Name/
                Father’s / Husband’s Name / Address
              </p>

              <p className="uppercase mt-1">{data.candidateName}</p>
              <p>S/O – {data.fatherName}</p>
              <p>{data.addressLine1}</p>
              <p>{data.addressLine2}</p>
            </div>
          </div>

          <div className="mt-2 text-[12px] leading-relaxed">
            <p className="font-bold">
              चिकित्सा परीक्षण हेतु कॉल लेटर / Call Letter for Medical
              Examination before empanelment
            </p>

            <p className="mt-1 border border-black p-2">
              स्थान / Venue: <b>CANDIDATES WILL REPORT TO {data.venue}</b>
            </p>
          </div>

          <div className="border-b border-black p-2 text-[12px] leading-relaxed">
            <p>Note:</p>
            <p>
              1. You are advised to report for medical examination prior to
              empanelment at the venue, date & time indicated above.
            </p>
            <p>
              2. You should carry with portion of call letter of written test &
              P.E.T. along with proof of birth & 3 passport size photographs.
            </p>
            <p>
              3. This letter does not confer any right in Railway’s under terms
              & conditions indicated in the reverse side is to be followed
              scrupulously.
            </p>
          </div>

          <div className="grid grid-cols-3 border-b border-black">
            <div className="flex justify-center items-center px-2.5 pb-1 pt-[60px] border-r border-l border-black text-[12px] leading-snug">
              <div>
                <p className="font-bold">उम्मीदवार का हस्ताक्षर</p>
                <p className="mt-2">
                  Candidate’s Signature as signed on the application form
                </p>
                <p className="text-[11px]">
                  (to be signed in presence of Railway Official)
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center px-2.5 pb-1 pt-[60px] border-r border-black text-[12px]">
              <div>
                <p className="font-bold">रेलवे अधिकारी का पूर्ण हस्ताक्षर</p>
                <p className="mt-2">
                  Full signature of Railway official issuing medical memo
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center px-2.5 pb-1 pt-[60px] text-[12px] text-center border-r border-black">
              <div>
                <p className="font-bold">Chief General Manager</p>
                <p>{data.chiefGeneralManagerZone}</p>
              </div>
            </div>
          </div>
          {/* <div className="mt-1 text-[12px] leading-relaxed">
            <p className="font-bold">
              कृपया इसे फाड़कर उम्मीदवार को लौटा दें। / Please tear off and
              return to the candidate
            </p>
          </div>
          <div className="mt-5 flex flex-row justify-between items-start leading-relaxed">
            <p className="font-bold text-[14px]">
              रेलवे भर्ती बोर्ड, {data.boardCityHindi}
              <br />
              RAILWAY RECRUITMENT BOARD,{data.boardCity}
            </p>
            <div className="border border-black p-2">
              <p className="font-semibold text-[16px]">
                CALL LETTER MEDICAL EXAMINATION
              </p>
            </div>
          </div> */}

          <div className="border border-black p-1 mt-2 text-[11px] leading-relaxed">
            <p>
              (Valid for SC/ST candidates only) on this Travel Authority you are
              entitled to travel free by rail in second class outward Journey
              should count one day before and return Journey should be completed
              before.
            </p>
          </div>
          <div className="border border-black p-1 mt-2 text-[12px] relative leading-relaxed">
            <p>
              From : <br />
              To : <br />
              (Journey should Not Commence before Station)
            </p>

            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[16px] whitespace-nowrap">
              NOT ELIGIBLE FOR FREE TRAVEL
            </p>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="absolute bottom-[8mm] left-[18mm] right-[18mm] text-center text-blue-900 font-medium text-[12px]">
          <p>{data.footer}</p>
          <p>{data.footerHindi}</p>
        </div>
      </div>
    </div>
  );
}
