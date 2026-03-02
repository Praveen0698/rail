import AadharBackCard from "@/components/AadharBackCard";

export default async function RailwayIDCardBack({
  searchParams,
}: {
  searchParams: Promise<{
    aadharNumber?: string;
    addressE?: string;
    addressH?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <AadharBackCard
      aadharNumber={params.aadharNumber || ""}
      addressE={params.addressE || ""}
      addressH={params.addressH || ""}
    />
  );
}
