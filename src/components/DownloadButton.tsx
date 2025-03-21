"use client";

import React, { useState } from "react";

interface DownloadButtonProps {
  qrCodeURL: string;
  fileName: string;
}

export default function DownloadButton({
  qrCodeURL,
  fileName,
}: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(qrCodeURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="rounded-lg bg-amber-500 px-5 py-2 text-white transition-all hover:bg-amber-600 disabled:bg-gray-400"
      disabled={loading}
    >
      {loading ? "Downloading..." : "Download"}
    </button>
  );
}
