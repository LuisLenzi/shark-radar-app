"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Map, MapPin } from "lucide-react";

export function LoadingFixed() {
  const [icon, setIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcon((icon) => (icon === 2 ? 0 : icon + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed !z-[999] w-full h-full left-0 top-0 flex items-center justify-center bg-background/50">
      {icon === 0 && (
        <Map className="animate-pulse text-primary transition-all min-w-12" />
      )}

      {icon === 1 && (
        <Image
          priority
          alt="Shark Radar App Logo"
          src="/svg/shark-icon.svg"
          width={20}
          height={20}
          className="animate-pulse text-primary transition-all min-w-12"
        />
      )}

      {icon === 2 && (
        <MapPin className="animate-pulse text-primary transition-all min-w-12" />
      )}
    </div>
  );
}
