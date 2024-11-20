import { Metadata } from "next";

export const METADATA = ({ ...metadata }: Metadata) => ({
  robots: "index, follow",
  manifest: "/manifest.json",
  authors: [{ name: "Luís Lenzi" }],
  title: "Dashboard | Shark Radar App",
  icons: [
    {
      rel: "icon",
      sizes: "128x128",
      type: "image/x-icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
  keywords: [
    "Shark Radar App",
    "localização de tubarões",
    "monitoramento de tubarões",
    "App de tubarões Brasil",
    "costa brasileira tubarões",
    "segurança marinha Brasil",
    "rastreamento de tubarões",
    "shark tracking Brasil",
    "App marinho",
    "conservação marinha",
    "avistamento de tubarões",
  ],
  description:
    "O Shark Radar App é o aplicativo definitivo para monitorar e localizar tubarões ao longo da costa brasileira. Ideal para biólogos marinhos, pescadores, surfistas e entusiastas do oceano, nosso app fornece informações em tempo real sobre a presença de tubarões, promovendo a segurança e a conservação marinha. Com uma interface intuitiva e atualizações constantes, o Shark Radar App é a ferramenta perfeita para manter-se informado e seguro nas águas do Brasil.",
  ...metadata,
});
