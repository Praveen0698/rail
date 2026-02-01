import React from "react";

const pageBack = () => {
  return (
    <div
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "18mm",
        background: "white",
        boxSizing: "border-box",
        border: "1px solid black",
      }}
      className="text-[13px] leading-relaxed text-black"
    >
      {/* ===== TITLE ===== */}
      <p className="text-center font-bold text-[15px] mb-4 uppercase">
        INSTRUCTIONS TO THE CANDIDATES FOR ATTENDING MEDICAL EXAMINATION
      </p>

      {/* ===== BULLET POINTS ===== */}
      <ul className="list-disc pl-6 space-y-3">
        <li>
          This call letter is <b>“Provisional”</b>. Candidates should note that
          mere issue of this call letter does not confer on them any right to be
          placed on the final panel unless they are found suitable after due
          verification of their candidature and all their original certificates
          of education, age, caste, etc. and also the original call letters,
          photographs and signatures, merit position and vacancy position.
        </li>

        <li>
          RRB reserves the right to reject the application/candidature of the
          candidate at any stage of recruitment process in case the candidate is
          not fulfilling the requisite criteria and if so appointed, such
          candidates are liable to be removed from service summarily.
        </li>

        <li>
          Request for change of date and time for medical test will not be
          entertained.
        </li>

        <li>
          Candidates are requested to produce the following original
          certificates/documents for verification in support of their
          candidature (as applicable):
        </li>
      </ul>

      {/* ===== DOCUMENT LIST ===== */}
      <ol className="list-decimal pl-10 mt-3 space-y-1">
        <li>
          Matriculation/High School Examination Certificate or equivalent
          certificate (Proof for Date of Birth and Metric Qualification).
        </li>
        <li>ITI/Diploma/Degree Certificate (As applicable).</li>
        <li>Caste Certificate for SC/ST – Annexure-3.</li>
        <li>Caste Certificate for OBC – Annexure-4.</li>
        <li>Income Certificate for Waiving Examination Fee – Annexure-7.</li>
        <li>
          Medical Certificate for Persons with Disabilities (PWD) – Annexure-9.
        </li>
        <li>
          NOC from serving employees / Pension Payment Order (PPO) and discharge
          certificate for Ex-Servicemen.
        </li>
        <li>Minority declaration on Non-judicial Stamp Paper.</li>
        <li>Two recent passport size colour photographs.</li>
        <li>Two sets of attested copies of all original certificates.</li>
      </ol>

      {/* ===== CONTINUED INSTRUCTIONS ===== */}
      <ul className="list-disc pl-6 mt-4 space-y-3">
        <li>
          Candidates, who are already serving employees in any Central/State
          Government Department including Railways or Public Sector
          Undertakings, are required to produce{" "}
          <b>No Objection Certificate (NOC)</b> from the employer during
          document verification without fail.
        </li>

        <li>
          <b>Note:</b> Candidates should note that in case a communication is
          received from their employer by the RRB concerned withholding
          permission to the candidates applying for/appearing at the
          examination, their candidature is liable to be rejected/cancelled.
        </li>

        <li>
          Candidates applying against reserved vacancies (SC/ST/OBC) and/or
          seeking age relaxation must submit requisite caste certificate in the
          prescribed format from the competent authority. Otherwise, their claim
          for reserved status will not be entertained and candidature, if
          eligible under General (UR), will be considered only under UR vacancy.
        </li>

        <li>
          The result is purely provisional and in case any candidate is found to
          have been debarred by any of the RRBs, his/her candidature will be
          cancelled and may be removed from service at any later stage.
        </li>

        <li>
          If you fail to produce the relevant original certificates on the date
          of document verification, your candidature is liable to be rejected
          and no further correspondence will be entertained.
        </li>

        <li>
          Please note that you may have to stay one/two days extra for
          completion of medical examination, if necessary.
        </li>
      </ul>

      {/* ===== FOOTER ===== */}
      <p className="text-center mt-6 font-bold">*******</p>
    </div>
  );
};

export default pageBack;
