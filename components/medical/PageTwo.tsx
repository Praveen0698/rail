"use client";

interface OfficeMemoData {
  boardCityHindi: string;
  boardCity: string;
  boardAddress: string;
  boardContact: string;

  footer: string;
  footerHindi: string;
}

export default function OfficeMemoPage2({ data }: any) {
  return (
    <div className=" min-h-screen flex flex-col items-center">
      <div
        style={{
          width: "210mm",
          height: "297mm",
          // padding: "12mm 15mm",
          background: "white",
          position: "relative",
          boxSizing: "border-box",
          border: "1px solid black",
        }}
      >
        <div className="text-[12px] m-5">
          <div className="grid grid-cols-[140px_1fr_1fr] border border-black text-[12px]">
            <div className="row-span-2 flex flex-col items-center p-2 border-r border-black">
              <div className="border border-black w-[110px] h-[130px] flex items-center justify-center text-center text-[12px] font-semibold leading-snug">
                Affix one
                <br />
                passport size
                <br />
                recent photograph
              </div>
            </div>

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

            <div className="p-2 border-b border-black leading-relaxed">
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

            <div className="col-span-2 px-2 py-1 leading-snug">
              <p className="mt-1">
                उम्मीदवार का नाम / Candidate’s Name:{" "}
                <b className="uppercase">{data.candidateName}</b>
              </p>
              <p className="mt-1">
                पिता / पति का नाम / Father’s / Husband’s Name:{" "}
                <b className="uppercase">{data.fatherName}</b>
              </p>
              <p className="mt-1">
                स्थान / Venue: <b className="uppercase">{data.venue}</b>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-black">
            <div className="flex justify-center items-center px-2.5 pb-1 pt-10 border-r border-l border-black text-[12px] leading-snug">
              <div>
                {/* <p className="font-bold">उम्मीदवार का हस्ताक्षर</p> */}
                <p className="mt-2">
                  Candidate’s Signature as signed on the application form
                </p>
                <p className="text-[11px]">
                  (to be signed in presence of Railway Official)
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center px-2.5 pb-1 pt-10 border-r border-black text-[12px]">
              <div>
                {/* <p className="font-bold">रेलवे अधिकारी का पूर्ण हस्ताक्षर</p> */}
                <p className="mt-2">
                  Full signature of Railway official issuing medical memo
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center px-2.5 pb-1 pt-10 text-[12px] text-center border-r border-black">
              <div>
                <p className="font-bold">Chief General Manager</p>
                <p>E.Co. Railway, Bhubaneswar</p>
              </div>
            </div>
          </div>

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
