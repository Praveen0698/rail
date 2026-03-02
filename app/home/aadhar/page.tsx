"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";

export default function RailwayIDCard() {
  const navigation = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("AMIT KUMAR");
  const [fatherName, setFatherName] = useState("RAJESH KUMAR");
  const [dob, setDob] = useState("01/01/1995");
  const [gender, setGender] = useState("Male");
  const [aadharNumber, setAadharNumber] = useState("1234 5678 9012");
  const [addressEnglish, setAddressEnglish] = useState(
    "Plot No 154/5, KPHB, Hyderabad, Telangana, 500072",
  );
  const [addressHindi, setAddressHindi] = useState(
    "प्लॉट नंबर 154/5, केपीएचबी, हैदराबाद, तेलंगाना, 500072",
  );

  const [idPhoto, setIdPhoto] = useState<string | null>(null);
  const [qrImage, setQrImage] = useState<string | null>(null);

  useEffect(() => {
    const generateQR = async () => {
      const qrData = {
        name,
        fatherName,
        dob,
        gender,
        aadharNumber,
        addressEnglish,
        addressHindi,
      };

      const qrString = JSON.stringify(qrData);

      try {
        const url = await QRCode.toDataURL(qrString, {
          width: 200,
          margin: 1,
        });
        setQrImage(url);
      } catch (err) {
        console.error(err);
      }
    };

    generateQR();
  }, [
    name,
    fatherName,
    dob,
    gender,
    aadharNumber,
    addressEnglish,
    addressHindi,
  ]);

  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: "PVC_ID_card_front",
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

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setter(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl space-y-4 border border-gray-300">
        <div className="flex justify-between items-center">
          <button
            className="px-3 py-1 border border-gray-400 rounded-lg"
            onClick={() => navigation.back()}
          >
            Back
          </button>
          <h2 className="font-bold text-lg text-gray-700">
            Enter Card Details
          </h2>
          <div />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border rounded px-2 py-1"
          />
          <input
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            placeholder="Father Name"
            className="border rounded px-2 py-1"
          />
          <input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="DOB"
            className="border rounded px-2 py-1"
          />
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
            className="border rounded px-2 py-1"
          />
          <input
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            placeholder="Aadhaar Number"
            className="border rounded px-2 py-1"
          />

          <input
            value={addressEnglish}
            onChange={(e) => setAddressEnglish(e.target.value)}
            placeholder="Address (English)"
            className="border rounded px-2 py-1"
          />

          <input
            value={addressHindi}
            onChange={(e) => setAddressHindi(e.target.value)}
            placeholder="Address (Hindi)"
            className="border rounded px-2 py-1"
          />

          <input
            className="border rounded px-2 py-1"
            type="file"
            accept="image/*"
            placeholder="Image"
            onChange={(e) => handleImageUpload(e, setIdPhoto)}
          />
        </div>
      </div>

      <div
        ref={cardRef}
        className="relative bg-white rounded-xl border border-gray-400 font-sans overflow-hidden shadow-md"
        style={{ width: `325px`, height: `204px` }}
      >
        <div className="flex items-center justify-between px-3 pt-2">
          <Image src="/emblemBlack.png" alt="Emblem" width={35} height={35} />
          <Image src="/aadharFront.png" alt="Aadhaar" width={180} height={30} />
          <Image src="/aadharMain.png" alt="Logo" width={55} height={55} />
        </div>

        <div className="flex px-3 pt-2 items-end justify-between">
          <div className="w-[75px] h-[90px] border border-gray-300 overflow-hidden">
            {idPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={idPhoto}
                alt="photo"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          <div className="flex flex-col justify-between items-start">
            <div className="text-[10px] leading-tight">
              <p className="font-medium mb-[2px]">{name}</p>
              <p className="text-[9px] mb-[2px]">Father: {fatherName}</p>
              <p className="text-[9px] mb-[2px]">DOB: {dob}</p>
              <p className="text-[9px]">{gender}</p>
            </div>

            <div className="text-center font-bold tracking-wide text-[15px] mt-2">
              {aadharNumber}
            </div>
          </div>

          <div className="w-[75px] h-[75px] flex items-center justify-center">
            {qrImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={qrImage}
                alt="qr"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>

        <div className="absolute bottom-0 w-full py-2">
          <div className="mb-1 border-b-[3px] border-red-600" />
          <p className="text-center text-sm font-semibold text-gray-700">
            मेरा <span className="text-red-500">आधार</span>, मेरी पहचान
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => handlePrint?.()}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Print Card
        </button>
        <button
          onClick={() =>
            navigation.push(
              `/home/aadhar/back?aadharNumber=${aadharNumber}&addressE=${addressEnglish}&addressH=${encodeURIComponent(
                addressHindi,
              )}`,
            )
          }
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Back Side
        </button>
      </div>
    </div>
  );
}
