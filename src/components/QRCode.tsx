import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function QRCode({ qrCodeURL }: { qrCodeURL: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-10"
    >
      <Image
        src={qrCodeURL}
        alt="QR Code"
        title="QR Code"
        width={300}
        height={300}
        className="rounded-lg border shadow-lg"
      />
    </motion.div>
  );
}
