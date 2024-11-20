"use client";

import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Laptop, Linkedin, Mail } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "@/components/ui/hybrid-tooltip";

export default function Authors() {
  return (
    <main className="flex w-full flex-col items-center py-8 max-[768px]:py-4 max-[768px]:px-0 gap-8 px-16 max-[1024px]:px-10 min-h-[calc(100vh-88px)] !bg-[#eef5ff] justify-start">
      <Card className="w-full p-4 shadow-none border-none flex flex-col justify-between min-h-[350px]">
        <CardHeader className="flex max-[768px]:px-0 max-[768px]:flex-col flex-row items-center justify-between space-y-0 max-[768px]:pt-2 pb-0">
          <h1 className="text-xl font-semibold max-[768px]:pb-4 max-[768px]:w-full max-[768px]:py-4 max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center">
            Autores
          </h1>
        </CardHeader>

        <CardContent
          className={cn(
            "max-[1100px]:px-0 py-0 min-h-[400px] items-center flex max-[768px]:px-0"
          )}
        >
          <div className="flex items-center justify-start max-[768px]:gap-8 max-[768px]:flex-col gap-2 mt-10 pb-2">
            <div className="w-full flex items-start justify-center flex-col gap-2">
              <Image
                src="/png/guilherme.png"
                alt="Guilherme C. Lenzi"
                className="rounded-2xl"
                width={400}
                height={400}
                style={{
                  objectFit: "cover",
                }}
              />

              <div className="flex items-start justify-center flex-col gap-2">
                <h2 className="text-xs font-semibold">Guilherme Costa Lenzi</h2>

                <div className="flex items-center justify-start gap-2">
                  <a
                    href="mailto:guilherme.clenzi@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Mail size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            E-mail
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>

                  <a
                    href="https://instagram.com/guilherme.lenzi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Instagram size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            Instagram
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>
                </div>
              </div>
            </div>

            <Separator className="w-full min-[768px]:hidden" />

            <div className="w-full flex items-start justify-center flex-col gap-2">
              <Image
                src="/png/cibelly.png"
                alt="Cibely Moreira Silva"
                className="rounded-2xl"
                width={400}
                height={400}
                style={{
                  objectFit: "cover",
                }}
              />

              <div className="flex items-start justify-center flex-col gap-2">
                <h2 className="text-xs font-semibold">Cibely Moreira Silva</h2>

                <div className="flex items-center justify-start gap-2">
                  <a
                    href="mailto:cibelymoreirasilva344@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Mail size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            E-mail
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>

                  <a
                    href="https://instagram.com/cibelymsilva/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Instagram size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            Instagram
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>
                </div>
              </div>
            </div>

            <Separator className="w-full min-[768px]:hidden" />

            <div className="w-full flex items-start justify-center flex-col gap-2">
              <Image
                src="/png/luis.png"
                alt="Luís Lenzi"
                className="rounded-2xl"
                width={400}
                height={400}
                style={{
                  objectFit: "cover",
                }}
              />

              <div className="flex items-start justify-center flex-col gap-2">
                <h2 className="text-xs font-semibold">Luís Lenzi</h2>

                <div className="flex items-center justify-start gap-2">
                  <a
                    href="https://github.com/LuisLenzi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Github size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            Github
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>

                  <a
                    href="https://luislenzi.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Laptop size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            Portfólio
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/luis-lenzi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Linkedin size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            Linkedin
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>

                  <a
                    href="https://instagram.com/luis.lenzi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TooltipProvider>
                      <HybridTooltip delayDuration={200}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <Button
                              type="button"
                              variant={"outline"}
                              className="h-8 w-8 p-1 border rounded-full text-xs"
                            >
                              <Instagram size={16} />
                            </Button>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[175px] p-2 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="right"
                        >
                          <p className="!tracking-normal !leading-normal !text-[10px] text-background">
                            Instagram
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    </TooltipProvider>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
