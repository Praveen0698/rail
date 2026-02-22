"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";

export default function ReportingLetterPrint() {
  const router = useRouter();

  const envelopeRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    candidateName: "G. BHANUCHANDER REDDY",
    candidateSO: "S/O G. LAXMA REDDY",
    addressStreet: "9-1-100, REDDY BASTI",
    addressLocality: "CHAMPAPET, SAROORNAGAR",
    addressCityState: "K.V.RANGAREDDY, TELANGANA - 500079",

    logo: "",
    companyColor: "blue",
    companyName: "EAST COAST RAILWAY",
    companyAddress1: "RAIL SADAN, CHANDRASEKHARPUR",
    companyAddress2: "BHUBANESWAR - 751017",
  });

  const handleChange = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePrintEnvelope = useReactToPrint({
    contentRef: envelopeRef,
    pageStyle: `
    @page {
      size: 27.5cm 12.5cm;
      margin: 0;
    }
    body {
      margin: 0;
    }
  `,
  });

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
    <div className="flex flex-col items-center py-10">
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-700 text-white rounded"
        >
          Home
        </button>

        <button
          onClick={handlePrintEnvelope}
          className="px-6 py-2 cursor-pointer bg-purple-700 text-white rounded"
        >
          Print Envelope
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

      <div ref={envelopeRef}>
        <div
          style={{
            width: "27.5cm",
            height: "12.5cm",
            marginLeft: "2cm",
            padding: "1cm",
            boxSizing: "border-box",
            fontFamily: "Times New Roman",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* TOP SECTION */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                width: "10cm",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "1.6",
                textAlign: "left",
                marginLeft:"2cm"
              }}
            >
              To,
              <br />
              {data.candidateName}
              <br />
              {data.candidateSO}
              <br />
              {data.addressStreet}
              <br />
              {data.addressLocality}
              <br />
              {data.addressCityState}
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom:"2cm" }}>
            <div>
              <p style={{ color: "red", marginBottom: "10px" }}>
                <i>&quot;If undelivered, please return to&quot;</i>
              </p>

              {data.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.logo}
                  alt="Logo"
                  style={{
                    height: "120px",
                    width: "100px",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
              ) : (
                <div
                  style={{
                    height: "120px",
                    width: "100px",
                    border: "1px solid black",
                    marginBottom: "8px",
                  }}
                />
              )}

              <div style={{ color: data.companyColor }}>
                {data.companyName}
                <br />
                {data.companyAddress1}
                <br />
                {data.companyAddress2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
