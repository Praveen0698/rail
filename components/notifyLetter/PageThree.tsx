"use client";

interface PageThreeData {
  appointmentBoard: string;
  appointmentZone: string;
  appointmentDate: string;
  probationPeriod: string;
  signature: string;
}

export default function OfficeMemoPage1({ data }: { data: PageThreeData }) {
  return (
    <div className="min-h-screen flex flex-col items-center">
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
          <p className="text-justify my-5">
            The date of appointment shall be effective from the date of joining,
            unless otherwise communicated in writing by the{" "}
            {data.appointmentBoard}. The {data.appointmentZone} will communicate
            details of appointment on or before
            <b> {data.appointmentDate}</b>.
            <br />
            <br />
            You will be on probation for a period of{" "}
            <b>{data.probationPeriod}</b> from the date of appointment. On
            completion of the probation period, your appointment may be
            confirmed at the discretion of the Railway Recruitment Board,
            Bhubaneswar, based on your performance and other applicable
            criteria. Unless confirmation is communicated in writing, the
            probation period shall be deemed to have been extended.
            <br />
            <br />
            You may be transferred to any other location, department, function,
            establishment, or branch of the Railway Recruitment Board,
            Bhubaneswar, or its associate/affiliate offices, in such capacity as
            deemed appropriate. In such cases, you shall be governed by the
            terms and conditions applicable to the new assignment, including
            compensation, working hours, holidays, leave, and service policies.
            <br />
            <br />A copy of this letter, duly signed by you, must be mandatorily
            submitted on the date of joining.
            <br />
            <br />
            <br />
            Candidate shortlisted for Selection does not confer any right to be
            treated as eligible in all aspects for Regards!!!
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span></span>
          <div className="text-right">
            <i>
              <b>{data.signature}</b>
            </i>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="absolute bottom-[8mm] left-[18mm] right-[18mm] text-center text-blue-900 font-medium text-[12px]">
          <p>
            OFFICE OF THE PRINCIPAL CHIEF PERSONNEL OFFICER, EAST COAST RAILWAY
            RAIL SADAN, CHANDRASEKHARPUR BHUBANESWAR PIN 751017 ODISHA
          </p>
          <p>
            प्रधान मुख्यकार्मिक अर्धकारी का कार्ािलर्, पूर्वी तट रे लर्वेरे ल
            सदन, चंद्रशेखरपुर भुर्वनेश्वर र्पन 751017 ओर्िशा
          </p>
        </div>
      </div>
    </div>
  );
}
