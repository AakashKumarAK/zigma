"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

export default function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      window.location.href = items[focusedIndex].href;
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0} // 👈 keyboard focusable
    >
      <button className="flex items-center gap-1">
        {label} {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-64 py-2">
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                index === focusedIndex ? "bg-gray-200" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
