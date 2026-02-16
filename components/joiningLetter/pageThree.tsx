"use client";

import Image from "next/image";

interface OfficeMemoData {
  candidateImg: string;
  personnelName: string;
  personnelBranch: string;
  trainingZone: string;
  personnelBranchNo: string;
  personnelDate: string;
  personnelZone: string;
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

        <div className="m-5 mt-20 mx-20 text-[12px] leading-[1.55]">
          <div className="ml-5 leading-relaxed font-base">
            <div className="flex items-start gap-2 mb-1">
              <span>7.</span>
              <p>
                You shall furnish to this office, along with your joining
                report, a declaration duly attested by a Gazetted Officer or a
                Magistrate to the effect that you have only one living spouse
                and that you are not married to a person having a living husband
                or wife.
                <br />
                You are liable to be transferred anywhere within the East Coast
                Railway as per administrative requirements.
              </p>
            </div>
          </div>
          <p className="text-center my-5 font-bold">
            This has the approval of the competent authority.
          </p>

          <div className="flex justify-between items-start">
            <div />
            {data.candidateImg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.candidateImg}
                alt="Signature"
                className="h-[120px] w-[100px] mx-auto object-contain mb-1"
              />
            ) : (
              <div className="h-[120px] w-[100px] border" />
            )}
            <div className="flex flex-col items-end mt-20 text-[14px] font-semibold">
              <p>{data.personnelName}</p>
              <p>Asst. Personnel Officer (T)/{data.personnelBranch}</p>
              <p>(for Divisional Personnel Officer/{data.personnelBranch})</p>
              <p>{data.trainingZone}</p>
            </div>
          </div>
          <div className="m-5 text-[13px] leading-[1.55]">
            <p>
              Divisional Office <br />
              Personnel Branch/{data.personnelBranch} <br />
              No. {data.personnelBranchNo} &nbsp;&nbsp; Date:{" "}
              {data.personnelDate}
            </p>

            <p className="my-2.5">
              A copy is forwarded to the following for information and necessary
              action:
            </p>

            <p>
              Sr. DCM/{data.personnelBranch}; Sr. DFM/{data.personnelBranch};
              DCM/{data.personnelBranch} <br />
              The Principal, Divisional Traffic Training School (DTTS) <br />
              Ch. OS/Commercial Branch; Ch. OS/Traffic Bills <br />
              Confidential Section; O.O. File; Candidate
            </p>

            <p className="my-2.5">
              Ch. OS/Pass Section: to issue the necessary duty pass to the
              candidate.
            </p>

            <p>
              Divisional Secretary/{data.personnelBranch} – {data.personnelZone}
            </p>
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
