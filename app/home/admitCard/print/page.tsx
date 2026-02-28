"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { QRCodeSVG } from "qrcode.react";

export default function AdmitCardPage() {
  const router = useRouter();
  const printRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    boardCityHindi: "नई दिल्ली",
    boardCity: "NEW DELHI",
    boardAddress: "123, Sample Road, Demo Area, New Delhi – 110001",
    boardContact: "Phone: 011-12345678 | www.example.com | info@example.com",

    notificationNo: "RRB/2026/001",
    dateOfIssue: "15/Jan/2026",
    rollNo: "999999999999",
    registrationNo: "REG12345678",
    candidateName: "RAHUL SHARMA",
    address: "45, Demo Street, Model Town, Jaipur, Rajasthan - 302001",
    logo: "",
    gender: "Male",
    community: "General",
    group: "Group C",
    designation: "Junior Assistant",

    examDate: "20/Mar/2026",
    reportingTime: "10:00 AM",
    shift: "2",
    examLanguage: "Hindi",
    landmark: "Near City Mall",
    nearestStation: "JAIPUR JUNCTION",

    instructionE1:
      "This is a dummy instruction for testing layout purposes only.",
    instructionE2:
      "Please arrive at the venue 30 minutes before the reporting time.",
    instructionE3:
      "Do not bring any prohibited electronic items inside the exam hall.",
    instructionE4:
      "Follow all instructions mentioned in this sample admit card.",
    instructionE5:
      "This call letter is generated for UI testing purposes only.",

    instructionH1: "यह केवल लेआउट परीक्षण के लिए एक डमी निर्देश है।",
    instructionH2: "रिपोर्टिंग समय से 30 मिनट पहले परीक्षा केंद्र पर पहुंचें।",
    instructionH3:
      "परीक्षा कक्ष में किसी भी प्रकार के इलेक्ट्रॉनिक उपकरण न लाएं।",
    instructionH4:
      "इस नमूना प्रवेश पत्र में दिए गए सभी निर्देशों का पालन करें।",
    instructionH5: "यह कॉल लेटर केवल यूआई परीक्षण के उद्देश्य से बनाया गया है।",
  });

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    pageStyle: `
    @page { size: A4; margin: 0; }
    html, body {
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Times New Roman", serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  `,
  });

  const handleChange = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setData((prev) => ({ ...prev, [key]: reader.result as string }));
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 print:bg-white print:py-0">
      <div className="flex gap-4 mb-6 print:hidden">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 bg-gray-700 text-white rounded"
        >
          Home
        </button>

        <button
          onClick={handlePrint}
          className="px-5 py-2 bg-green-700 text-white rounded"
        >
          Print Admit Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mb-10">
        {Object.entries(data)
          .filter(([key]) => key !== "logo")
          .map(([key, value]) => (
            <div key={key}>
              <label className="text-xs font-semibold">
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}{" "}
              </label>
              <input
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                className="border w-full p-2 rounded text-sm"
              />
            </div>
          ))}

        <div>
          <label className="text-xs font-semibold">Upload Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleSignUpload(e, "logo")}
            className="border w-full p-2 rounded text-sm"
          />
        </div>
      </div>

      <div ref={printRef}>
        <div className="flex justify-center">
          <div
            style={{
              width: "210mm",
              height: "297mm",
              background: "white",
              border: "1px solid black",
              padding: "10px",
              boxSizing: "border-box",
            }}
            className="font-serif text-[13px] text-black"
          >
            <div className="flex items-center px-6 py-2">
              <div className="w-[90px]">
                <Image
                  src="/emblemBlack.png"
                  alt="Emblem"
                  width={60}
                  height={80}
                />
              </div>

              <div className="flex-1 text-center">
                <p className="text-[14px] font-medium uppercase">
                  Govt. of India (Ministry of Railways)
                </p>
                <p className="text-[16px] font-bold uppercase mt-1">
                  Railway Recruitment Board, {data.boardCity}
                </p>
                <p className="text-[12.5px] mt-1">{data.boardAddress}</p>
                <p className="text-[12.5px]">{data.boardContact}</p>
              </div>

              <div className="w-[100px] flex justify-end">
                <Image
                  src="/indian-railway.png"
                  alt="Railways Logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>

            <table className="w-full text-[13px] border-b-0">
              <tbody>
                <tr>
                  <Cell label="Notification No" value={data.notificationNo} />
                  <Cell label="Date of issue" value={data.dateOfIssue} />
                </tr>
              </tbody>
            </table>
            <div className="flex border border-black border-b-0 border-t-0">
              <div className="flex-1 text-[13px]">
                <InfoRow
                  label="Roll Number / रोल संख्या"
                  value={data.rollNo}
                  highlight
                />

                <InfoRow
                  label="Registration Number / पंजीकरण संख्या"
                  value={data.registrationNo}
                />

                <InfoRow
                  label="Name of the Candidate / उम्मीदवार का नाम"
                  value={data.candidateName}
                />

                <InfoRow label="Gender / लिंग" value={data.gender} />
                <InfoRow label="Community / वर्ग" value={data.community} />
                <InfoRow label="Group / समूह" value={data.group} />
                <InfoRow label="Designation / पद" value={data.designation} />

                <div className="text-center font-semibold text-[13px] py-2 border-b border-r border-black">
                  EXAM DETAILS - परीक्षा विवरण
                </div>

                <div className="grid grid-cols-[45%_55%] min-h-[90px]">
                  <div className="flex items-start px-4 py-2 border-r border-black font-medium">
                    Name and address of exam centre
                  </div>
                  <div className="flex items-start px-4 py-2 border-r border-black">
                    {data.address}
                  </div>
                </div>
              </div>

              <div className="w-[170px] flex flex-col items-center pt-2">
                <div className="w-[150px] h-[180px] border border-black mb-1.5" />

                <div className="w-[120px] h-[120px] border border-black flex items-center justify-center mb-3">
                  <QRCodeSVG value="121194120660787" size={100} />
                </div>

                <div className="w-[150px] h-[45px] border border-black">
                  {data.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={data.logo}
                      alt="Logo"
                      style={{
                        height: "40px",
                        width: "140px",
                        objectFit: "contain",
                        margin: "0 auto",
                      }}
                    />
                  )}
                </div>
                <p className="text-xs mt-1">For Chairman</p>
              </div>
            </div>

            <table className="w-full text-[13px] border border-black">
              <tbody>
                <tr>
                  <Cell label="Date of Exam" value={data.examDate} />
                  <Cell label="Reporting Time" value={data.reportingTime} />
                </tr>
                <tr>
                  <Cell label="Shift" value={data.shift} />
                  <Cell label="Exam Language" value={data.examLanguage} />
                </tr>
                <tr>
                  <Cell label="Landmark" value={data.landmark} />
                  <Cell
                    label="Nearest Railway Station"
                    value={data.nearestStation}
                    bold
                  />
                </tr>
              </tbody>
            </table>

            <div className="text-center font-semibold text-[13px] py-2">
              To be filled in examination center -{" "}
              <span className="text-[11px]">
                परीक्षा केंद्र में भरा जाना है
              </span>
            </div>
            <table className="w-full text-[13px] border border-black">
              <tbody>
                <tr>
                  <td
                    colSpan={2}
                    className="border border-black px-4 py-1.5 h-20 font-medium w-1/2"
                  ></td>
                  <td
                    colSpan={2}
                    className="border border-black px-4 py-1.5 h-20 font-medium w-1/2"
                  ></td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className="border border-black text-center px-4 py-1.5 font-medium w-1/2"
                  >
                    Candidate&apos;s Signature /{" "}
                    <span className="text-xs">उम्मीदवार के हस्ताक्षर</span>
                  </td>
                  <td
                    colSpan={2}
                    className="border border-black text-center px-4 py-1.5 font-medium w-1/2"
                  >
                    Invigilator&apos;s Signature /{" "}
                    <span className="text-xs">पर्यवेक्षक के हस्ताक्षर</span>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    className="border border-black text-center px-4 py-1.5 font-medium w-1/2"
                  >
                    CBT Admit card is valid only with an original ID card /{" "}
                    <span className="text-xs">
                      सीबीटी का एडमिट कार्ड केवल मूल पहचान पत्र के साथ ही मान्य
                      है।
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center font-semibold text-[13px] py-2">
              IMPORTANT INSTRUCTIONS /{" "}
              <span className="text-[11px]">महत्वपूर्ण निर्देश</span>
            </div>

            <div className="border border-black">
              <div className="grid grid-cols-2 text-[12.5px]">
                <div className="p-4 border-r border-black leading-relaxed space-y-2">
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>{data.instructionE1}</li>
                    <li>{data.instructionE2}</li>
                    <li>{data.instructionE3}</li>
                    <li>{data.instructionE4}</li>
                    <li>{data.instructionE5} </li>
                  </ol>
                </div>

                <div className="p-4 leading-relaxed space-y-2">
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>{data.instructionH1}</li>
                    <li>{data.instructionH2}</li>
                    <li>{data.instructionH3}</li>
                    <li>{data.instructionH4} </li>
                    <li>{data.instructionH5}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[45%_55%] border-b border-r border-black min-h-[38px]">
      <div className="flex items-center px-4 border-r border-black font-medium">
        {label}
      </div>
      <div
        className={`flex items-center justify-end px-4 ${
          highlight ? "text-[16px] font-semibold" : "font-semibold"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function Cell({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <>
      <td className="border border-black px-4 py-2 font-medium w-1/4">
        {label}
      </td>
      <td
        className={`border border-black px-4 py-2 w-1/4 ${
          bold ? "font-bold" : "font-semibold"
        }`}
      >
        {value}
      </td>
    </>
  );
}
