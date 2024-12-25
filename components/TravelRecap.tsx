"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Globe from "react-globe.gl";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as THREE from "three";
import RecordRTC from "recordrtc";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cities, citiesComboBox } from "@/cities.const";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import VerticalCutReveal from "./ui/VerticalCutReveal";
import { Instrument_Serif } from "next/font/google";
import { Badge } from "./ui/badge";

const serif = Instrument_Serif({ weight: ["400"], subsets: ["latin"] });

export type City = {
  name: string;
  lat: number;
  lng: number;
  code: string;
};

const TravelRecap: React.FC = () => {
  const globeEl = useRef<any>();
  const [visitedCities, setVisitedCities] = useState<City[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [flagsLoaded, setFlagsLoaded] = useState(false);
  const [lastAddedCity, setLastAddedCity] = useState<City | null>(null);
  const [open, setOpen] = React.useState(false);

  const flagMaterials = useMemo(() => {
    const materials: { [key: string]: THREE.SpriteMaterial } = {};
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "anonymous";

    const loadTextures = cities.map((city) => {
      if (materials[city.code]) return;
      return new Promise<void>((resolve, reject) => {
        textureLoader.load(
          `https://flagcdn.com/32x24/${city.code}.png`,
          (texture: { minFilter: any }) => {
            texture.minFilter = THREE.LinearFilter;

            materials[city.code] = new THREE.SpriteMaterial({
              map: texture,
              transparent: true,
              sizeAttenuation: false,
            });

            resolve();
          },
          undefined,
          (error: any) => {
            console.error(`Error loading texture for ${city.name}:`, error);
            reject(error);
          }
        );
      });
    });

    Promise.all(loadTextures).then(() => setFlagsLoaded(true));

    return materials;
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;
    }
  }, []);

  const handleAddVisitedCity = (city: City) => {
    if (!visitedCities.some((c) => c.name === city.name)) {
      setVisitedCities((prev) => [...prev, city]);
      setLastAddedCity(city);
    }
  };

  useEffect(() => {
    if (lastAddedCity && globeEl.current) {
      globeEl.current.pointOfView(
        {
          lat: lastAddedCity.lat,
          lng: lastAddedCity.lng,
          altitude: 0.5,
        },
        1000
      );
    }
  }, [lastAddedCity]);

  const createVideoRecap = async () => {
    if (!globeEl.current || visitedCities.length === 0) return;

    setIsRecording(true);

    const globe = globeEl.current;
    const controls = globe.controls();
    controls.autoRotate = false;

    const renderer = globe.renderer();

    const stream = renderer.domElement.captureStream(60);
    const recorder = new RecordRTC(stream, {
      type: "video",
      mimeType: "video/webm;codecs=h264",
      bitsPerSecond: 8000000, // 8 Mbps
      frameInterval: 1,
      quality: 100,
    });

    recorder.startRecording();

    for (const city of visitedCities) {
      await new Promise((resolve) => {
        globe.pointOfView(
          { lat: city.lat, lng: city.lng, altitude: 0.5 },
          2000
        );
        setTimeout(resolve, 2000);
      });
    }

    recorder.stopRecording(() => {
      const blob = recorder.getBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "travel-recap.webm";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        if (typeof window !== undefined) {
          window.URL.revokeObjectURL(url);
        }
      }, 100);

      setIsRecording(false);
      controls.autoRotate = true;
    });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:flex-grow flex flex-col justify-start items-center p-8 lg:py-16 lg:px-16 bg-slate-50  lg:overflow-y-auto">
        <div>
          <div className={`text-5xl ${serif.className} text-blue-700`}>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
            >
              {`HI 👋, FRIEND!`}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="last"
              reverse={true}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 0.5,
              }}
            >
              {`🧳 LET'S CREATE ⇗ YOUR`}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 1.1,
              }}
            >
              {`TRAVEL ✈️ RECAP.`}
            </VerticalCutReveal>
          </div>

          <div className="space-y-16">
            <Label htmlFor="visited-city" className="mr-4">
              Add Visited City
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {lastAddedCity?.name
                    ? citiesComboBox.find(
                        (city) => city.value === lastAddedCity?.name
                      )?.label
                    : "Select city..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search city..." />
                  <CommandList>
                    <CommandEmpty>No city found.</CommandEmpty>
                    <CommandGroup>
                      {citiesComboBox.map((city) => (
                        <CommandItem
                          key={city.value}
                          value={city.value}
                          onSelect={(currentValue) => {
                            const cityResult = cities.find(
                              (cityLocal) => cityLocal.name === currentValue
                            );
                            handleAddVisitedCity(cityResult!);
                            setOpen(false);
                          }}
                        >
                          <div className="flex gap-2 items-center">
                            <span>{city.label}</span>
                            <img
                              src={`https://flagcdn.com/16x12/${
                                cities.find(
                                  (cityLocal) => cityLocal.name === city.value
                                )?.code
                              }.png`}
                              className="self-start relative top-1"
                            />
                          </div>
                          <Check
                            className={cn(
                              "ml-auto",
                              "text-blue-700",
                              visitedCities.find(
                                (visited) => visited.name === city.value
                              )
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {visitedCities.length > 0 && (
              <div className="w-[500px]">
                <ul className="flex flex-wrap gap-1 list-none">
                  {visitedCities.map((city) => (
                    <li key={city.name}>
                      <Badge variant={"outline"}>{city.name}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <Button
                onClick={createVideoRecap}
                disabled={
                  visitedCities.length === 0 || isRecording || !flagsLoaded
                }
              >
                {isRecording ? "Recording..." : "Download Video Recap"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-grow bg-slate-50 flex items-center justify-start p-4">
        <div className="w-full h-full max-w-[300px] max-h-[600px] relative">
          {flagsLoaded ? (
            <Globe
              ref={globeEl}
              width={300}
              height={600}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              atmosphereColor="lightskyblue"
              atmosphereAltitude={0.25}
              customLayerData={visitedCities}
              customThreeObject={(d: City) => {
                const sprite = new THREE.Sprite(flagMaterials[d.code]);
                sprite.scale.set(0.04, 0.04, 1);
                return sprite;
              }}
              customThreeObjectUpdate={(obj, d: City) => {
                if (obj && globeEl.current) {
                  const { lat, lng } = d;
                  const altitude = 0.01;
                  const { x, y, z } = globeEl.current.getCoords(
                    lat,
                    lng,
                    altitude
                  );
                  obj.position.set(x, y, z);
                  obj.lookAt(0, 0, 0);
                  obj.quaternion.copy(globeEl.current.camera().quaternion);
                }
              }}
              labelsData={visitedCities}
              labelLat={(d: City) => d.lat - 0.5}
              labelLng={(d: City) => d.lng}
              labelText={(d: City) => d.name}
              labelSize={0.5}
              labelDotRadius={0}
              labelColor={() => "white"}
              labelResolution={2}
              labelAltitude={0.05}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-white">Loading flags...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelRecap;
