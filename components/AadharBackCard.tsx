"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface Props {
  aadharNumber: string;
  addressE: string;
  addressH: string;
}

export default function RailwayIDCardBack({
  aadharNumber,
  addressE,
  addressH,
}: Props) {
  const router = useRouter();
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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 space-y-6">
      <div
        ref={cardRef}
        className="bg-white rounded-xl border border-gray-400 relative shadow-md"
        style={{ width: "325px", height: "204px" }}
      >
        {/* UI Same as Before */}
        <div className="flex items-center justify-between px-3 pt-2">
          <Image src="/aadharMain.png" alt="Logo" width={55} height={55} />
          <Image src="/backAadhar.png" alt="Aadhaar" width={180} height={30} />
          <div />
        </div>

        <div className="flex justify-between mt-2 px-3 text-[9px] font-medium">
          <div className="w-1/2 break-words">{addressH}</div>
          <div className="w-1/2 break-words">{addressE}</div>
        </div>

        {/* <div className="absolute bottom-0 w-full">
          <div className="text-center font-bold tracking-widest text-[14px]">
            {aadharNumber}
          </div>
        </div> */}
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
          className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded"
        >
          Print
        </button>

        <button
          onClick={() => router.back()}
          className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
