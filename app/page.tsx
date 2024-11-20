import { MapComponent } from "@/components/ui/map";
import { MapProvider } from "@/provider/map-provider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-[calc(100vh-88px)]">
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </main>
  );
}
