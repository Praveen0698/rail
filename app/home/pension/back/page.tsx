"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function NPSCardBack() {
  const navigation = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(350);

  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "NPS_ID_Back",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      {/* Control Panel */}
      <div className="bg-white p-4 rounded-lg shadow-md border w-full max-w-3xl space-y-3">
        <h2 className="text-lg font-bold text-center text-gray-700">
          NPS Card – Back Side
        </h2>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <label>Width (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="border rounded w-full px-2 py-1"
            />
          </div>
          <div>
            <label>Height (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="border rounded w-full px-2 py-1"
            />
          </div>
        </div>
      </div>

      {/* ---- Card Back Side ---- */}
      <div
        ref={cardRef}
        className="relative rounded-lg shadow-lg overflow-hidden flex items-center justify-center"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage:
            "linear-gradient(to bottom, rgba(225,238,255,0.65), rgba(228,241,255,0.55), rgba(215,234,255,0.80)), url('/download.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-6 leading-tight text-[13px] font-medium">
          {/* English Header */}
          <div className="font-semibold text-[14px] mb-2">
            In case this card is lost/found, kindly inform/return to:
          </div>

          {/* English Address */}
          <div className="mb-3">
            Central Recordkeeping Agency,
            <br />
            NSDL e-Governance Infrastructure Limited
            <br />
            2nd Floor, Times Tower, Kamala Mills Compound,
            <br />
            Senapati Bapat Marg, Lower Parel, Mumbai 400 013
            <br />
            Tel. No. 022-24994200 Fax: No. 022-24994974 • Email ID:
            info.cra@nsdl.co.in
          </div>

          {/* Penalty */}
          <div className="font-bold text-[14px] mb-3">
            Penalty for loss of card is ₹ 50/- only
          </div>

          {/* Hindi Section */}
          <div className="font-semibold text-[14px] mt-4 mb-1">
            इस कार्ड के खो जाने पर / खोया हुआ कार्ड मिलने पर कृपया सूचित करें /
            लौटायें :
          </div>

          <div className="mb-3">
            सी.के.ए. <br />
            एन.एस.डी.एल ई-गवर्नेंस इंफ्रास्ट्रक्चर लिमिटेड <br />
            २रा फ्लोर, टाइम्स टावर, कमला मिल्स कंपाउंड,
            <br />
            सेनापति बापट मार्ग, लोअर परेल, मुंबई - ४०० ०१३
            <br />
            टेल. - ०२२-२४९९४२०० फैक्स - ०२२-२४९९४९७४ • ई-मेल :
            info.cra@nsdl.co.in
          </div>

          <div className="font-bold text-[14px]">
            कार्ड गुम होने पर जुर्माना राशि ₹ ५०/- मात्र
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-5">
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
