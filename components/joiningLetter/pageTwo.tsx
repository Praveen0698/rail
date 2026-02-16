"use client";

import Image from "next/image";

interface OfficeMemoData {
  divionalManagerCity: string;
  trainingDate: string;
  stipend: string;
  trainingInstitute: string;
  payScale: string;
  trainingZone: string;
  group: string;
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

        <div className="m-5 mx-20 mt-20 text-[12px] leading-[1.55]">
          <div className="leading-relaxed font-base">
            <p>
              He is directed to report to the Principal, Zonal Railway Training
              Institute, {data.divionalManagerCity}, to undergo the initial
              training scheduled to be held on {data.trainingDate}. He will be
              eligible for a stipend of {data.stipend} under the rules in force
              from the date of joining at the {data.trainingInstitute}.
              <br />
              <br />
              On successful completion of the training, he will be absorbed
              against a working post in the pay scale of {data.payScale} plus
              all allowances as admissible. He will be on probation for a period
              of two years from the date of absorption against the working post.
              He must undergo the prescribed training and pass the same
              successfully. In the event of failure, he may be given a second
              chance without stipend. If he fails again, he will be governed by
              the conditions stipulated in the Offer of Appointment.
              <br />
              <br />
              He will be responsible for Government money, stores, and any other
              property entrusted to him in the discharge of official duties. No
              change of category will be permitted for a minimum period of three
              years unless he is declared medically unsuitable for the category.
              <br />
              <br />
              His service will be terminable by one month’s notice on either
              side or by payment of one month’s salary, including allowances, in
              lieu of the notice (except in cases of removal or dismissal for
              misconduct). It will, however, be open to the Government to
              recover from him the salary for the period by which the notice
              falls short of one month. Similarly, if he wishes to resign, he
              may do so by depositing salary in lieu of notice for the period of
              shortfall. Such notice of resignation should be addressed to the
              competent authority.
              <br />
              <br />
              In cases of misconduct, he will be entitled to a reasonable
              opportunity to show cause why his services should not be
              terminated. In such cases, the condition of one month’s notice
              will not apply. This provision will also not apply if the services
              are dispensed with during the probation period.
            </p>
          </div>
          <div className="mt-5 ml-5 leading-relaxed font-base">
            <div className="flex items-start gap-2 mb-1">
              <span>1.</span>
              <p>
                On appointment/joining, you will be required to take an oath of
                allegiance to the Constitution of India.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <span>2.</span>
              <p>
                You will be governed by the {data.trainingZone} and Railway
                Recruitment Board, New Delhi (Group {data.group}) Service Rules,
                1997, as amended from time to time. In respect of pay, leave,
                and other matters not expressly provided for in these rules, you
                shall be governed by such regulations and rules as may be framed
                and adopted by the competent authority under the Constitution of
                India.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <span>3.</span>
              <p>
                You will be subject to the Government Employees Conduct Rules,
                2016, and the Railway Servants (Discipline & Appeal) Rules,
                2016, as amended from time to time. You will also be governed by
                the Civil Services Rules and the relevant recruitment and
                conditions of service applicable to your post.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <span>4.</span>
              <p>
                For all other matters not specified herein, you will be governed
                by the rules, regulations, and instructions issued by the
                Government from time to time.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <span>5.</span>
              <p>
                You will be governed by the New Pension Scheme as notified by
                the Government from time to time.
                <br />
                If any information or declaration furnished by you in connection
                with this appointment is found to be false or incorrect at any
                time, you will be liable to dismissal from service and other
                action as deemed fit under the law.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <span>6.</span>
              <p>You must submit the following:</p>
            </div>
            <div className="flex items-start gap-2 mb-1 ml-5">
              <span>(i)</span>
              <p>
                A written declaration that you have not been dismissed from
                service by any department of the Government on any previous
                occasion, that you have not been convicted by a court of law,
                and that no criminal case is pending against you.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-1 ml-5">
              <span>(ii)</span>
              <p>
                If married, a declaration regarding non-acceptance or non-giving
                of dowry. If unmarried, such declaration must be furnished
                immediately after marriage, as per the prescribed format in the
                relevant Government instructions.
              </p>
            </div>
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
