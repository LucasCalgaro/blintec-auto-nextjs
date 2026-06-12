"use client";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      variant="whatsapp"
      className="fixed bottom-4 right-4 rounded-full h-14 w-14 cursor-pointer flex items-center justify-center gap-2 py-1 px-4"
    >
      <FaWhatsapp className="size-8" />
    </Button>
  );
};

export default WhatsAppButton;
