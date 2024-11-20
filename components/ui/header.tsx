"use client";

import { useState } from "react";

import { Info, MessageCircleMore, Search } from "lucide-react";

import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "@/components/ui/hybrid-tooltip";

import { Form } from "@/components/ui/form";

import { z } from "zod";

import { useForm } from "react-hook-form";

import { formDashboardSchema } from "@/schemas/dashboard-schema";

import { zodResolver } from "@hookform/resolvers/zod";

import { fakeSharkData } from "@/seed/shark-data";

import { Skeleton } from "./skeleton";
import { DialogDescription, DialogTitle } from "./dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./dialog";

import { useSharkData } from "@/context/shark-data-context";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Header() {
  const { selectedShark, handleSelectShark } = useSharkData();

  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formDashboardSchema>>({
    resolver: zodResolver(formDashboardSchema),
    defaultValues: {},
  });

  async function onSubmit(_data: z.infer<typeof formDashboardSchema>) {}

  return (
    <header className="w-full z-[10] relative bg-white flex items-center justify-between min-h-[88px] max-h-[88px] min-[768px]:px-16 max-[1024px]:!px-10 max-[768px]:pr-4 border-b max-[768px]:!px-4">
      <SidebarTrigger className="fixed ml-[-4rem] max-[1024px]:ml-[-2.5rem] max-[768px]:ml-0 max-[768px]:static flex items-center !bg-transparent !hover:transparent hover:!opacity-75 transition-all duration-300 max-[768px]:!pr-0 focus:!bg-transparent justify-center max-[768px]:justify-start min-h-[50px] active:!bg-transparent focus-visible:!bg-transparent active:border-none focus:border-none focus:outline-none" />

      <div className="flex items-center w-full justify-end gap-6 max-[768px]:gap-5">
        <Dialog open={searchIsOpen} onOpenChange={setSearchIsOpen}>
          <DialogTrigger>
            <TooltipProvider>
              <HybridTooltip delayDuration={200}>
                <HybridTooltipTrigger asChild>
                  <div className="relative flex items-center cursor-pointer justify-center">
                    <Search
                      size={18}
                      className="text-muted-foreground max-[500px]:!w-4 max-[500px]:!h-4 hover:text-primary transition-all duration-300"
                    />
                  </div>
                </HybridTooltipTrigger>
                <HybridTooltipContent
                  className="max-w-[175px] p-3 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                  side="bottom"
                >
                  <p className="!tracking-normal !leading-normal !text-[11px] text-background">
                    Buscar espécie
                  </p>
                </HybridTooltipContent>
              </HybridTooltip>
            </TooltipProvider>
          </DialogTrigger>
          <DialogContent className="p-8 gap-4 max-w-[450px]">
            <DialogHeader>
              <DialogTitle className="text-md">Encontre um tubarão</DialogTitle>
              <DialogDescription className="text-xs">
                Busque por uma espécie de tubarão e veja os registros de
                avistamento.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex items-start max-w-[500px] justify-center gap-6 flex-col"
              >
                <TooltipProvider>
                  <ToggleGroup type="single" orientation="vertical">
                    {fakeSharkData.map((item) => (
                      <HybridTooltip delayDuration={200} key={item.id}>
                        <HybridTooltipTrigger asChild>
                          <div className="relative flex items-center cursor-pointer justify-center">
                            <ToggleGroupItem
                              key={item.id}
                              value={item.name}
                              className="flex items-center p-2 w-auto h-auto justify-start gap-4 cursor-pointer flex-col"
                              onClick={() => {
                                form.setValue("sharkName", item.name);
                                handleSelectShark(item);
                                setSearchIsOpen(false);
                              }}
                            >
                              <Avatar className="w-14 h-14 max-[340px]:hidden max-[500px]:!w-9 max-[500px]:!h-9 border-input border-2 transition-all duration-300">
                                <AvatarImage
                                  src={item.image}
                                  alt="Shark Icon"
                                />
                                <AvatarFallback className="!bg-input max-[500px]:text-sm">
                                  {item.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                            </ToggleGroupItem>
                          </div>
                        </HybridTooltipTrigger>
                        <HybridTooltipContent
                          className="max-w-[200px] p-3 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                          side="bottom"
                        >
                          <p className="!tracking-normal !leading-normal !text-[11px] text-background">
                            {item.name} ({item.nickName})
                          </p>
                        </HybridTooltipContent>
                      </HybridTooltip>
                    ))}
                  </ToggleGroup>
                </TooltipProvider>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        {(Object.values(selectedShark || {}).length > 0 && (
          <div className="flex items-center transition-all duration-300 justify-between gap-4 min-w-[175px] max-[500px]:min-w-[150px] max-[500px]:px-4 border border-input px-6 py-2 rounded-md">
            <div className="flex flex-col items-start justify-center">
              <p className="text-[10px] leading-tight text-muted-foreground">
                Você selecionou
              </p>
              <h2 className="text-xs leading-tight font-semibold">
                {selectedShark.name}
              </h2>
            </div>
          </div>
        )) || (
          <Skeleton className="min-w-[175px] max-[500px]:min-w-[150px] max-[500px]:px-4 h-[40px] bg-input" />
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <TooltipProvider>
              <HybridTooltip delayDuration={200}>
                <HybridTooltipTrigger
                  asChild
                  onClick={() => setIsDialogOpen(true)}
                >
                  <Avatar className="w-11 h-11 max-[340px]:hidden max-[500px]:!w-9 max-[500px]:!h-9 cursor-pointer hover:opacity-80 border-input border-2 transition-all duration-300">
                    <AvatarImage src={selectedShark.image} alt="Shark icon" />
                    <AvatarFallback className="!bg-input max-[500px]:text-sm">
                      {selectedShark.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </HybridTooltipTrigger>
                <HybridTooltipContent
                  className="max-w-[150px] p-3 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
                  side="bottom"
                >
                  <Info size={12} className="text-background" />
                  <p className="!tracking-normal !leading-normal !text-[11px] text-background">
                    Informações
                  </p>
                </HybridTooltipContent>
              </HybridTooltip>
            </TooltipProvider>
          </DialogTrigger>
          <DialogContent className="p-8 gap-2 max-w-[450px]">
            <DialogHeader className="flex items-start flex-col justify-center gap-2">
              <div className="flex items-center justify-start gap-4">
                <Avatar className="w-[100px] h-[100px] max-[340px]:hidden max-[500px]:!w-9 max-[500px]:!h-9 border-input border-2 transition-all duration-300">
                  <AvatarImage src={selectedShark.image} alt="Shark Icon" />
                  <AvatarFallback className="!bg-input max-[500px]:text-sm">
                    {selectedShark.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="w-full flex flex-col items-start justify-center">
                  <DialogTitle className="text-xl">
                    {selectedShark.name}
                  </DialogTitle>

                  <DialogDescription className="text-xs">
                    Apelido:{" "}
                    <strong className="font-semibold">
                      {selectedShark.nickName}
                    </strong>
                  </DialogDescription>
                </div>
              </div>

              <Separator className="w-full" />

              <div className="flex flex-col items-start justify-center w-full">
                <DialogDescription className="text-xs">
                  Nome científico:{" "}
                  <strong className="font-semibold">
                    {selectedShark.scientificName}
                  </strong>
                </DialogDescription>

                <DialogDescription className="text-xs">
                  Idade:{" "}
                  <strong className="font-semibold">{selectedShark.age}</strong>
                </DialogDescription>

                <DialogDescription className="text-xs">
                  Tamanho:{" "}
                  <strong className="font-semibold">
                    {selectedShark.size}
                  </strong>
                </DialogDescription>

                <DialogDescription className="text-xs">
                  Peso:{" "}
                  <strong className="font-semibold">
                    {selectedShark.weight}
                  </strong>
                </DialogDescription>
              </div>
            </DialogHeader>

            <Separator className="w-full" />

            <DialogDescription className="text-xs">
              {selectedShark.description}
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Separator
          orientation="vertical"
          className="max-[500px]:hidden h-[35px] mx-4"
        />

        <TooltipProvider>
          <HybridTooltip delayDuration={200}>
            <HybridTooltipTrigger asChild>
              <Link
                target="_blank"
                referrerPolicy="no-referrer"
                href={"https://wa.me/553591533663/"}
              >
                <div className="relative flex items-center cursor-pointer justify-center">
                  <MessageCircleMore
                    size={18}
                    className="text-muted-foreground max-[500px]:!w-4 max-[500px]:!h-4 hover:text-primary transition-all duration-300"
                  />
                </div>
              </Link>
            </HybridTooltipTrigger>
            <HybridTooltipContent
              className="max-w-[175px] p-3 bg-primary flex items-center justify-start gap-2 rounded-lg shadow-lg"
              side="bottom"
            >
              <p className="!tracking-normal !leading-normal !text-[11px] text-background">
                Propor melhorias
              </p>
            </HybridTooltipContent>
          </HybridTooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}
