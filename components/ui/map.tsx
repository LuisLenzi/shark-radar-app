"use client";

import { useSharkData } from "@/context/shark-data-context";

import { GoogleMap, MarkerF } from "@react-google-maps/api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

import { TooltipProvider } from "./tooltip";

import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "./hybrid-tooltip";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px 0px 0px 0px",
};

const defaultMapZoom = 15;

const defaultMapOptions = {
  zoomControl: false,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
  fullscreenControl: false,
  streetViewControl: false,
  disableDefaultUI: true,
  maxZoom: 18,
  minZoom: 12,
};

const MapComponent = () => {
  const { selectedShark } = useSharkData();

  const selectedSharkCoordinates = selectedShark?.coordinates;

  const defaultMapCenter = {
    lat: selectedSharkCoordinates[0].latitude || -3.848966,
    lng: selectedSharkCoordinates[0].longitude || -32.40441,
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <GoogleMap
        zoom={defaultMapZoom}
        center={defaultMapCenter}
        options={defaultMapOptions}
        mapContainerStyle={defaultMapContainerStyle}
      >
        {selectedShark &&
          selectedShark.coordinates.map((coordinate, index) => (
            <Dialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              key={index}
            >
              <DialogTrigger asChild>
                <TooltipProvider>
                  <HybridTooltip delayDuration={200}>
                    <HybridTooltipTrigger asChild>
                      <div className="relative flex items-center cursor-pointer justify-center">
                        <MarkerF
                          key={index}
                          onClick={() => setIsDialogOpen(true)}
                          clickable
                          cursor="pointer"
                          icon={{
                            url: "/svg/shark-icon.svg",
                            scaledSize: new window.google.maps.Size(50, 50),
                          }}
                          position={{
                            lat: coordinate.latitude,
                            lng: coordinate.longitude,
                          }}
                        />
                      </div>
                    </HybridTooltipTrigger>
                    <HybridTooltipContent
                      className="max-w-[175px] border border-input/25 p-3 bg-foreground flex items-center justify-start gap-2 rounded-lg shadow-lg"
                      side="bottom"
                    >
                      <p className="!tracking-normal !leading-normal !text-[11px] text-background">
                        Buscar espécie
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
                      <strong className="font-semibold">
                        {selectedShark.age}
                      </strong>
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

                <DialogTitle className="text-xs font-medium mb-0 space-y-0">
                  Últimas coordenadas
                </DialogTitle>

                <div className="w-full flex items-start flex-col justify-start">
                  <DialogDescription className="text-xs">
                    {Intl.DateTimeFormat("pt-BR", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(new Date(coordinate.dateReference))}
                  </DialogDescription>

                  <DialogDescription className="text-xs">
                    Latitude: {coordinate.latitude}
                  </DialogDescription>

                  <DialogDescription className="text-xs">
                    Longitude: {coordinate.longitude}
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          ))}
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
