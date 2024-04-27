"use client";
import Image from "next/image";
import React, { useState } from "react";

import viewOffIcon from "@/assets/view-off.svg";
import viewOnIcon from "@/assets/view-on.svg";

interface InputProps {
  placeholder: string;
  type: string;
  isPassword?: boolean;
}

export default function Input({ placeholder, type, isPassword }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="rounded-xl flex justify-between py-3 px-4 w-full text-subTitle bg-inputField-background border-inputField-outline border">
      <input
        className="bg-transparent flex-1 focus:outline-none placeholder:text-subtileText placeholder:text-base"
        type={showPassword ? "text" : type}
        name={placeholder}
        placeholder={placeholder}
        required
      />
      {isPassword && (
        <button
          type="button"
          className=""
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? (
            <Image
              alt="Hidden password icon"
              src={viewOffIcon}
              width={20}
              height={20}
            />
          ) : (
            <Image
              alt="Shown password icon"
              src={viewOnIcon}
              width={20}
              height={20}
            />
          )}
        </button>
      )}
    </div>
  );
}
