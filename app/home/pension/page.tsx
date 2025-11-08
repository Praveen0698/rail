"use client";
import dynamic from "next/dynamic";

const NPSCreator = dynamic(() => import("@/components/NPSCreator"), {
  ssr: false,
});

export default function Page() {
  return <NPSCreator />;
}
