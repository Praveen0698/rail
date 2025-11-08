"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function RailwayIDCardBack() {
  const navigation = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  // Card size
  const [width, setWidth] = useState(340);
  const [height, setHeight] = useState(215);

  // Fields (with sample defaults from the image)
  const [pfNo, setPfNo] = useState("50200084219");
  const [resAddress, setResAddress] = useState(
    "RLY COLONY BARAKAR, QTR NO-37/A\nPO-BARAKAR, WB-713324"
  );
  const [telOffice, setTelOffice] = useState("87642 (RLY)");
  const [telResidence, setTelResidence] = useState("");
  const [mobileNo, setMobileNo] = useState("8972937947");
  const [bloodGroup, setBloodGroup] = useState("B+");
  const [identMark, setIdentMark] = useState("WOUND MARK IN RIGHT LEG FINGER");

  // Instructions (bilingual)
  const [instr1Hi, setInstr1Hi] = useState(
    "स्थानान्तरण / सेवानिवृत्ति पर हमें लौटा दें!"
  );
  const [instr1En, setInstr1En] = useState(
    "RETURN IT ON TRANSFER / RETIREMENT."
  );
  const [instr2Hi, setInstr2Hi] = useState(
    "खो जाने पर कार्यालय तथा थाना पर तत्काल रिपोर्ट करें!"
  );
  const [instr2En, setInstr2En] = useState(
    "IN CASE OF LOSS, REPORT TO OFFICE & PS IMMEDIATELY."
  );

  // Print
  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "Railway_ID_Card_Back",
    pageStyle: `
      @page { size: auto; margin: 10mm; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    `,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6 space-y-6">
      {/* Controls */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl space-y-4 border border-gray-300">
        <h2 className="font-bold text-lg text-gray-700 text-center">
          Enter Back-Side Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block font-semibold">Width (px):</label>
            <input
              type="number"
              min={200}
              max={600}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Height (px):</label>
            <input
              type="number"
              min={150}
              max={400}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">
              PF / Employee No. (पीएफ / कर्मचारी संख्या)
            </label>
            <input
              value={pfNo}
              onChange={(e) => setPfNo(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold">
              Residential Address (निवास का पता)
            </label>
            <textarea
              value={resAddress}
              onChange={(e) => setResAddress(e.target.value)}
              className="border rounded px-2 py-1 w-full h-20 whitespace-pre-wrap"
            />
          </div>

          <div>
            <label className="block font-semibold">Tel No (O) – कार्यालय</label>
            <input
              value={telOffice}
              onChange={(e) => setTelOffice(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Tel No (R) – निवास</label>
            <input
              value={telResidence}
              onChange={(e) => setTelResidence(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">
              Mobile No. (मोबाइल नं.)
            </label>
            <input
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">
              Blood Group (रक्त समूह)
            </label>
            <input
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold">
              Identification Mark (पहचान चिन्ह)
            </label>
            <input
              value={identMark}
              onChange={(e) => setIdentMark(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          {/* Instructions */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold">
                Instruction 1 (Hindi)
              </label>
              <input
                value={instr1Hi}
                onChange={(e) => setInstr1Hi(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                lang="hi"
                inputMode="text"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              />
            </div>
            <div>
              <label className="block font-semibold">
                Instruction 1 (English)
              </label>
              <input
                value={instr1En}
                onChange={(e) => setInstr1En(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">
                Instruction 2 (Hindi)
              </label>
              <input
                value={instr2Hi}
                onChange={(e) => setInstr2Hi(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                lang="hi"
                inputMode="text"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              />
            </div>
            <div>
              <label className="block font-semibold">
                Instruction 2 (English)
              </label>
              <input
                value={instr2En}
                onChange={(e) => setInstr2En(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Back-side Card Preview */}
      <div
        ref={cardRef}
        className="bg-white rounded-xl border border-gray-400 overflow-hidden relative shadow-md px-3 py-2"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="text-[9px] font-semibold text-black leading-tight">
          {/* Top block: PF / Address */}
          <div className="grid grid-cols-2 gap-x-2">
            <div>
              <div className="flex">
                <span className="font-bold mr-1">PF/Employee No.</span>
                <span>:</span>
                <span className="ml-1">{pfNo}</span>
              </div>
              <div className="text-[8px] -mt-[1px] text-gray-700">
                पीएफ / कर्मचारी संख्या
              </div>

              <div className="mt-[6px] flex items-start">
                <div className="font-bold mr-1 whitespace-nowrap">
                  Residential Address
                </div>
                <span>:</span>
                <div className="ml-1 whitespace-pre-wrap">{resAddress}</div>
              </div>
              <div className="text-[8px] -mt-[1px] text-gray-700">
                निवास का पता
              </div>
            </div>

            {/* Right column (phones) */}
            <div>
              <div className="flex">
                <span className="font-bold mr-1">Tel No (O)</span>
                <span>:</span>
                <span className="ml-1">{telOffice}</span>
              </div>
              <div className="text-[8px] -mt-[1px] text-gray-700">
                दूरभाष (कार्यालय)
              </div>

              <div className="mt-[6px] flex">
                <span className="font-bold mr-1">Tel No (R)</span>
                <span>:</span>
                <span className="ml-1">{telResidence}</span>
              </div>
              <div className="text-[8px] -mt-[1px] text-gray-700">
                दूरभाष (निवास)
              </div>

              <div className="mt-[6px] flex">
                <span className="font-bold mr-1">Mobile No.</span>
                <span>:</span>
                <span className="ml-1">{mobileNo}</span>
              </div>
              <div className="text-[8px] -mt-[1px] text-gray-700">
                मोबाइल नं.
              </div>
            </div>
          </div>

          {/* Middle rows: Blood Group & Identification Mark */}
          <div className="mt-[6px] grid grid-cols-2 gap-x-2">
            <div className="flex">
              <span className="font-bold mr-1">Blood Group</span>
              <span>:</span>
              <span className="ml-1">{bloodGroup}</span>
            </div>
            <div className="flex">
              <span className="font-bold mr-1">Identification Mark</span>
              <span>:</span>
              <span className="ml-1">{identMark}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="text-[8px] -mt-[1px] text-gray-700">रक्त समूह</div>
            <div className="text-[8px] -mt-[1px] text-gray-700">
              पहचान चिन्ह
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-[6px]"
            style={{ borderBottom: "1.5px solid #111" }}
          />

          {/* Instructions */}
          <div className="text-[9px]">
            <div className="font-bold">अनु्देश / Instructions :</div>
            <ol className="list-decimal ml-4 mt-[2px] space-y-[2px]">
              <li>
                <span
                  lang="hi"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  {instr1Hi}
                </span>
                <br />
                <span className="font-semibold">{instr1En}</span>
              </li>
              <li>
                <span
                  lang="hi"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  {instr2Hi}
                </span>
                <br />
                <span className="font-semibold">{instr2En}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Actions */}
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
