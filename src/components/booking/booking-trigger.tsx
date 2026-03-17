"use client";

import { useState } from "react";
import { BookingModal } from "./booking-modal";

interface BookingTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function BookingTrigger({ children, className = "" }: BookingTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </button>
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
