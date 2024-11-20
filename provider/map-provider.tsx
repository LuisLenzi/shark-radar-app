//Since the map will be laoded and displayed on client side
"use client";

import { LoadingFixed } from "@/components/ui/loading-fixed";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

import { ReactNode } from "react";

const libraries = ["places", "drawing", "geometry"];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDLoA0wmSWa-h43iaP-PItI1e_WzaoJW98",
    libraries: libraries as Libraries,
  });

  if (loadError) return <LoadingFixed />;

  if (!scriptLoaded) return <LoadingFixed />;

  return children;
}
