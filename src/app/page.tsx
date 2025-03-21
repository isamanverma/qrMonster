import DownloadButton from "@/components/DownloadButton";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "QR Monster",
  description:
    "Generate high-quality QR codes instantly with QRMonster - the free and easy-to-use QR code generator. Customize, download, and share QR codes for URLs, text, WiFi, and more. No sign-up required!",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = (await searchParams) || null;
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${query}&size=500x500`;

  return (
    <main
      className="flex min-h-screen flex-col items-center gap-10 pt-20"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.3) 1px, transparent 1.5px)`,
        backgroundSize: "20px 20px",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="pb-5 text-3xl font-extralight lg:text-5xl">
        <Link href={"/"}>QR Code Generator</Link>
      </h1>

      <Form action={"/"} className="flex w-3/4 items-center justify-center">
        <input
          type="text"
          name="query"
          className="border border-gray-300 bg-white p-2 lg:w-1/2"
          placeholder="Enter text or URL to generate your QR Code"
        />
        <button className="cursor-pointer border-y border-r border-amber-400 bg-amber-400 p-2 px-10 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500">
          Submit
        </button>
      </Form>
      {query ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src={qrCodeURL}
            alt="QR Code"
            title="QR Code"
            width={300}
            height={300}
            className="motion-preset-pop"
          />
          <DownloadButton
            qrCodeURL={qrCodeURL}
            fileName={`QR Code ${new Date().toLocaleTimeString()}`}
            key={query}
          />
        </div>
      ) : null}
    </main>
  );
}
