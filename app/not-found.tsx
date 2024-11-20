"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="transition-all duration-500 w-full min-[768px]:h-screen flex items-center justify-center bg-[#FFFFFF]">
      <div className="flex h-screen w-full items-center justify-center max-[768px]:!pt-10">
        <div className="h-full w-full flex items-center justify-center">
          <div className="z-10 flex items-start text-left gap-6 justify-center max-w-[400px] flex-col max-[768px]:px-6">
            <h1 className="text-8xl max-[768px]:text-7xl font-bold max-[768px]:leading-[2.5rem] leading-[3.25rem]">
              404
            </h1>
            <h1 className="text-2xl max-[768px]:text-2xl font-semibold">
              Essa página não existe.
            </h1>
            <p className="text-sm opacity-80">
              A página que você está tentando acessar provavelmente foi alterada
              ou removida.
            </p>
            <Button
              type="button"
              onClick={() => router.back()}
              className="font-semibold !py-3 bg-primary px-4 !h-auto hover:!bg-foreground/50 transition-all duration-300 text-md max-[768px]:py-6"
            >
              <h3 className="text-white text-sm font-semibold">RETORNAR</h3>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
