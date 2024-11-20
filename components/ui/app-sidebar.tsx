"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

import {
  Download,
  Home,
  ArrowUpRight,
  CircleHelp,
  Map,
  MapPin,
  Signature,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

import { Header } from "./header";
import { Alert } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

const SIDEBAR_OPTIONS = {
  main: [
    {
      title: "Início",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Autores",
      url: "/authors",
      icon: Signature,
      isActive: true,
    },
  ],
  help: [
    {
      title: "FAQ",
      url: "/faq",
      icon: CircleHelp,
      isActive: true,
    },
  ],
};

export default function AppSidebar({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [icon, setIcon] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [supportsPWA, setSupportsPWA] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [promptInstall, setPromptInstall] = useState<any>(null);

  const [selectedOption, setSelectedOption] = useState(
    pathname.split("/").filter((path) => path)[0]
  );

  useMemo(() => {
    const currentPath = pathname.split("/").filter((path) => path)[0];

    const ALL_SIDEBAR_OPTIONS = [
      ...SIDEBAR_OPTIONS.main,
      ...SIDEBAR_OPTIONS.help,
    ];

    const currentOption = ALL_SIDEBAR_OPTIONS.find(
      (option) =>
        option.url.split("/").filter((path) => path)[0] === currentPath
    );

    if (currentOption) {
      setSelectedOption(currentOption.title);
    }
  }, [pathname]);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();

      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClickDownload = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (!promptInstall) {
      return;
    }

    promptInstall.prompt();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIcon((icon) => (icon === 2 ? 0 : icon + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "16rem",
          "--sidebar-width-mobile": "16rem",
        } as React.CSSProperties
      }
    >
      <Sidebar collapsible="icon">
        <SidebarHeader className="!bg-primary">
          <div className="flex items-center justify-center relative min-h-[88px]">
            <Image
              priority
              quality={100}
              width={125}
              height={125}
              onLoad={() => setImageLoaded(true)}
              onClick={() => {
                router.push("/");
              }}
              alt="Shark Radar App Logo"
              className={cn(
                "hover:cursor-pointer hover:opacity-80 transition-all duration-300"
              )}
              src={
                useSidebar().state === "expanded"
                  ? "/svg/shark-logo.svg"
                  : "/favicon.png"
              }
              style={{
                display: imageLoaded ? "block" : "none",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
            {!imageLoaded && (
              <Skeleton className="w-[110px] h-[40px] bg-input" />
            )}
          </div>
        </SidebarHeader>
        <SidebarContent className="!bg-primary">
          <SidebarGroup>
            <SidebarGroupLabel className="text-[11px] text-background/50">
              Dashboard
            </SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {SIDEBAR_OPTIONS.main.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex items-center justify-center"
                >
                  <SidebarMenuButton
                    onClick={() => router.push(item.url)}
                    tooltip={item.title}
                    className={cn(
                      "h-auto !py-3 hover:bg-foreground/50 transition-all duration-300",
                      {
                        "bg-foreground/50 active:bg-foreground/50 focus:bg-foreground/25":
                          selectedOption === item.title,
                      }
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        size={24}
                        className="!text-xl text-background"
                      />
                    )}

                    <p className="text-background text-xs !font-normal !tracking-normal">
                      {item.title}
                    </p>

                    <ArrowUpRight
                      size={20}
                      className="ml-auto transition-transform text-white duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[11px] text-background/50">
              Central de ajuda
            </SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {SIDEBAR_OPTIONS.help.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex items-center !cursor-not-allowed justify-center"
                >
                  <SidebarMenuButton
                    onClick={() => router.push(item.url)}
                    tooltip={item.title}
                    className={cn(
                      "h-auto !py-3 hover:bg-foreground/50 transition-all duration-300",
                      {
                        "bg-foreground/50 active:bg-foreground/50 focus:bg-foreground/25":
                          selectedOption === item.title,
                      }
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        size={24}
                        className="!text-xl text-background"
                      />
                    )}

                    <p className="text-background text-xs !font-normal !tracking-normal">
                      {item.title}
                    </p>

                    <ArrowUpRight
                      size={20}
                      className="ml-auto transition-transform text-white duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="!bg-primary flex px-0 flex-col items-start justify-end">
          <SidebarGroup className="py-0">
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center justify-center">
                <span
                  onClick={onClickDownload}
                  className={cn(
                    "w-full flex items-center justify-center outline-none",
                    {
                      hidden: !supportsPWA,
                    }
                  )}
                >
                  <Alert className="border-none !bg-[#092c61] px-0 py-[4px] w-full hover:opacity-80 flex items-center justify-start transition-all duration-300">
                    <div className="flex items-center justify-center gap-2 w-full">
                      <SidebarMenuButton
                        className="hover:!bg-transparent flex items-center"
                        tooltip={"Instale o Shark Radar App"}
                      >
                        {icon === 0 && (
                          <Map className="animate-pulse text-background transition-all min-w-4 w-4 h-4" />
                        )}
                        {icon === 1 && (
                          <Image
                            priority
                            alt="Shark Radar App Logo"
                            src="/svg/shark-icon.svg"
                            width={20}
                            height={20}
                            className="animate-pulse text-background transition-all min-w-4 w-4 h-4"
                          />
                        )}
                        {icon === 2 && (
                          <MapPin className="animate-pulse text-background transition-all min-w-4 w-4 h-4" />
                        )}

                        <p className="text-[10px] !tracking-wide text-background">
                          Instale o{" "}
                          <strong className="text-background font-semibold">
                            Shark Radar App
                          </strong>
                        </p>

                        <Download
                          size={20}
                          className="ml-auto transition-transform text-white duration-200 group-data-[state=open]/collapsible:rotate-90"
                        />
                      </SidebarMenuButton>
                    </div>
                  </Alert>
                </span>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarMenu>
              <a href="https://luislenzi.dev" target="_blank" rel="noreferrer">
                <SidebarMenuItem className="flex items-center justify-center">
                  <SidebarMenuButton
                    tooltip={"Luís Lenzi"}
                    className="focus:!bg-transparent hover:opacity-80 transition-all duration-300 !py-3 focus-active:!bg-transparent hover:!bg-transparent active:!bg-transparent"
                  >
                    <p
                      className={cn(
                        "font-medium w-full text-[8px] transition-all duration-300 text-background"
                      )}
                    >
                      Desenvolvido por Luís Lenzi Dev
                    </p>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </a>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <Header />

        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
