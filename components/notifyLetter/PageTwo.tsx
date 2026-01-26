"use client";

interface OfficeMemoPage1Props {
  data: {
    dvAddress1: string;
    dvAddress2: string;
    dvNoticeNo: string;
    candidatureSelection: string;
    medicalTestDetails: string;
    footer: string;
    footerHindi: string;
  };
}

export default function OfficeMemoPage1({ data }: OfficeMemoPage1Props) {
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
        <div className="text-[14px] leading-[1.6]">
          <p className="mt-2">
            <b>{data.dvAddress1}</b>
            <br />
            {data.dvAddress2}
            <br />
            {data.dvNoticeNo}
          </p>

          <p className="mt-2 ml-10">
            <b>(i)</b> Matriculation / High School / Higher Secondary School /
            equivalent certificate issued by the State / Central Education Board
            (and not by the Principal / Headmaster of the School / Institution
            where studied), indicating your date of birth (in Christian Era).
          </p>

          <p className="mt-2 ml-10">
            <b>(ii)</b> All other certificates, i.e., Degree / Master’s Degree /
            Diploma / Experience, etc., in support of your educational /
            technical / professional qualifications, along with mark sheets of
            all years of each course, indicating the subjects studied in each
            year, as claimed in your application.
          </p>

          <p className="mt-2 ml-10">
            <b>(iii)</b> In case you are appearing as a departmental candidate,
            a certificate in support of the qualifying period of service from
            the concerned department.
          </p>

          <p className="mt-2 ml-10">
            <b>(iv)</b> Certificates in support of the claim regarding
            experience, indicating the nature of duties performed and the
            functions of the organization where such experience was gained.
          </p>

          <p className="text-justify my-5">
            <b>2.</b> In addition to the above, the following documents are also
            required to be produced at the time of Document Verification:
          </p>

          <p className="ml-10">
            <b>(i)</b> Duly filled-in Interview Attendance Sheet with a recent
            passport-size photograph pasted on it.
          </p>

          <p className="mt-2 ml-10">
            <b>(ii)</b> Three copies of duly filled-in Attestation Forms. The
            last page of each set of the Attestation Form should be attested by
            any one of the competent authorities mentioned therein and signed in
            original. (All the forms should be attested by the same officer.)
          </p>

          <p className="mt-2 ml-10">
            <b>(iii)</b> Two passport-size photographs and a photo-bearing
            identity card.
          </p>

          <p className="text-justify my-5">
            <b>3.</b> If you fail to produce any of the above-mentioned
            documents, you will not be admitted for Document Verification under
            any circumstances whatsoever, and no further opportunity will be
            provided.
          </p>

          <p className="text-justify my-5">
            <b>4.</b> Any change in your present postal address should be
            communicated to this office immediately, indicating your Application
            Number, name of the interview/selection (Advertisement No. &
            Category No.), the post applied for, and the new address.
          </p>

          <p className="text-justify my-5">
            <b>5.</b> Your candidature is <b>{data.candidatureSelection}</b>.
            You must ensure that you fulfill all the conditions of eligibility,
            including the essential qualifications as laid down in the
            Advertisement/Notice of the Computer Based Examination, along with
            Medical Fitness Test and Document Verification.
            <br />
            <br />
            <b>{data.medicalTestDetails}</b>
            <br />
            <br />
            If, at any stage, it is found that you do not fulfill any of the
            eligibility conditions, your candidature will be cancelled, and no
            appeal against such cancellation will be entertained. The fact that
            you have been called for interview does not confer any right to be
            treated as eligible for appointment.
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
