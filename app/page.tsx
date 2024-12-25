"use client";
// import TravelRecap from "@/components/TravelRecap";

import dynamic from "next/dynamic";

const TravelRecapWithNoSSR = dynamic(
  () => import("../components/TravelRecap"),
  { ssr: false }
);

export default function Home() {
  return <TravelRecapWithNoSSR />;
}
