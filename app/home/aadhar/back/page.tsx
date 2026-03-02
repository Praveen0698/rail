"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function RailwayIDCardBack() {
  const searchParams = useSearchParams();

  const aadharNumber = searchParams.get("aadharNumber") || "";
  const addressE = searchParams.get("addressE") || "";
  const addressH = searchParams.get("addressH") || "";
  const navigation = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "PVC_ID_card_back",
    pageStyle: `
      @page {
        size: 86mm 54mm;
        margin: 0;
      }
      body {
        margin: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    `,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl space-y-4 border border-gray-300">
        <h2 className="font-bold text-lg text-gray-700 text-center">
          Aadhar Back-Side
        </h2>
      </div>

      <div
        ref={cardRef}
        className="bg-white rounded-xl border border-gray-400 overflow-hidden relative shadow-md"
        style={{ width: `325.03937008px`, height: `204.09448819px` }}
      >
        <div className="flex items-center justify-between px-3 pt-2">
          <Image src="/aadharMain.png" alt="Logo" width={55} height={55} />
          <Image src="/backAadhar.png" alt="Aadhaar" width={180} height={30} />
          <div />
        </div>

        <div className="flex justify-between items-start gap-20 mt-2.5 px-2.5 font-medium">
          <div>
            <p className="text-[10px]">{addressH}</p>
          </div>
          <div>
            <p className="text-[10px]">{addressE}</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full py-1">
          <div className="text-center font-bold tracking-wide text-[15px]">
            {aadharNumber}
          </div>
          <div className="mb-1 border-b-[3px] border-red-600" />
          <div className="flex justify-between items-center px-2.5">
            <div className="flex flex-col items-center justify-center">
              <Image src="/phone.png" alt="phone" width={10} height={10} />
              <p className="text-[6px] font-semibold text-center">
                1947 <br /> 1800 300 1947
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/mail.png" alt="phone" width={15} height={15} />
              <p className="text-[7px] font-semibold text-center">
                help@uidai.gov.in
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/www.png" alt="phone" width={20} height={15} />
              <p className="text-[7px] font-semibold text-center">
                www.uidai.gov.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Print Back Side
        </button>
        <button
          onClick={() => navigation.back()}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
