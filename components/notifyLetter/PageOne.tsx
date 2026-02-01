"use client";

import Image from "next/image";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;
  noticeHindiTitle: string;
  noticeHindiSub: string;
  circularNo: string;
  circularHindiNo: string;
  circularDateEnglish: string;
  circularDateHindi: string;
  fromOffice1: string;
  fromOffice2: string;
  fromOffice3: string;
  toName: string;
  toRelation: string;
  applicationNo: string;
  letterDate: string;
  subjectPost: string;
  subjectNoticeNo: string;
  subjectCategories: string;
  selected: string;
  noticeNo: string;
  postName: string;
  payScale: string;
  examDateTime: string;
  examVenue: string;
  examNoticeNo: string;
  selectionCriteria: string;
  dvDate: string;
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
          padding: "12mm 15mm",
          background: "white",
          position: "relative",
          boxSizing: "border-box",
          border: "1px solid black",
        }}
      >
        <div className="flex justify-between items-start">
          <Image src="/emblemBlack.png" alt="" width={60} height={80} />
          <div className="text-center flex-1 px-4">
            <p className="text-[18px] font-bold">
              रेलवे भर्ती बोर्ड/{data.boardCityHindi}
            </p>
            <p className="text-[17px] font-bold uppercase">
              RAILWAY RECRUITMENT BOARD/{data.boardCity}
            </p>
            <p className="text-[13px]">
              भारत सरकार (रेल मंत्रालय) / GOVT. OF INDIA (MINISTRY OF RAILWAYS)
            </p>
            <p className="text-[12px]">{data.boardAddress}</p>
            <p className="text-[12px]">{data.boardContact}</p>
          </div>
          <Image src="/indian-railway.png" alt="" width={90} height={90} />
        </div>

        <hr className="border-black my-3" />

        {/* ================= TITLES ================= */}
        <p className="text-center font-bold text-[15px]">
          {data.noticeHindiTitle}
        </p>
        <p className="text-center font-bold text-[15px] mb-3">
          {data.noticeHindiSub}
        </p>

        <p className="text-center font-bold underline text-[16px] mb-4">
          OFFICE MEMORANDUM
        </p>

        <div className="flex justify-between text-[14px] mb-3">
          <div>
            <p className="font-bold">Circular No. {data.circularNo}</p>
            <p>परिपत्र संख्या {data.circularHindiNo}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">DATED ON {data.circularDateEnglish}</p>
            <p>दिनांक {data.circularDateHindi}</p>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="text-[14px] leading-[1.6]">
          <p className="font-bold">From</p>
          <p>{data.fromOffice1}</p>
          <p>{data.fromOffice2}</p>
          <p>{data.fromOffice3}</p>

          <br />

          <p className="font-bold">To</p>
          <p className="font-bold">{data.toName}</p>
          <p>{data.toRelation}</p>
          <p>Application No. {data.applicationNo}</p>

          <p className="mt-2">
            <b>Dated on:</b> {data.letterDate}
          </p>

          <br />

          <p>
            <b>Subject –</b> SELECTION TO THE POST OF <b>{data.subjectPost}</b>{" "}
            OF CENTRALISED EMPLOYMENT NOTICE NO.
            {data.subjectNoticeNo} FOR {data.subjectCategories}.
          </p>

          <br />

          <p>Dear Candidature,</p>

          <p className="mt-2 text-justify">
            With reference to your application for the above-mentioned
            recruitment, I am to inform you that you have been{" "}
            <b>{data.selected}</b> for appointment under <b>{data.noticeNo}</b>{" "}
            as <b>{data.postName}</b> for the pay scale of{" "}
            <b>{data.payScale}</b>, which includes Basic Pay and applicable
            allowances such as Dearness Allowance (DA), House Rent Allowance
            (HRA), Transport Allowance, and other admissible benefits.
          </p>

          <p className="mt-2 text-justify">
            Accordingly, the Computer Based Examination was conducted on{" "}
            <b>{data.examDateTime}</b> at the {data.examVenue}, for Notice No.{" "}
            <b>{data.examNoticeNo}</b>. The selection criteria were based on{" "}
            <b>{data.selectionCriteria}</b>.
          </p>

          <br />

          <p className="text-justify">
            1. You are required to bring a copy of this selection letter along
            with the following documents in original and one self-attested copy
            of each, for verification and record, respectively, on{" "}
            <b>{data.dvDate}</b> at the time of Document Verification at:
          </p>
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
