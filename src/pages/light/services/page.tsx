import { useState } from "react";
import RPAServices from "../../../components/Light_mode/RPA_light";
import MediaGrowth from "../../../components/Light_mode/MediaGrowth_light";
import { ArrowUpRight, MousePointerClick } from "lucide-react";
import Home_Button from "../../../components/Comum_components/HomeButton";

export default function Services_light() {
  const [service, setService] = useState("");

  const isRPA = service === "RPA";
  const isMedia = service === "media";
  const isDefault = service === "";

  const containerBaseStyle =
    "relative z-40 px-2 py-4 lg:p-8 max-h-[30vh] lg:max-h-[100vh] overflow-hidden transition-all duration-300 group";

  const overlayStyle =
    "absolute top-0 bottom-0 left-0 right-0 bg-[#021c14dd] transition-all duration-500 group-hover:opacity-0 cursor-pointer";

  const renderServiceBox = (
    type: "RPA" | "media",
    Component: React.ElementType,
    line1: string,
    line2: string
  ) => {
    const isActive = service === type || isDefault;
    return (
      isActive && (
        <div
          onClick={() => isDefault && setService(type)}
          className={`${isDefault ? containerBaseStyle : ""}`}
        >
          {/* Overlay verde que some no hover */}
          {isDefault && <div className={overlayStyle} />}

          {/* Texto central quando ainda não escolheu */}
          {isDefault && (
            <p className="text-white group-hover:text-white/0 cursor-pointer transition-all duration-500 font-bold uppercase z-[100] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grid justify-center items-center place-items-center text-3xl lg:text-7xl text-center w-fit rounded-2xl p-4 lg:p-8">
              <div className="w-fit">{line1}</div>
              <div className="w-fit tracking-[0.28rem]">{line2}</div>
            </p>
          )}

          <Component />
        </div>
      )
    );
  };

  return (
    <section className="pt-16 bg-[var(--primaryL)]">
      <div className="h-16 relative flex justify-start items-center">
        <Home_Button />
      </div>
      {isDefault && (
        <h2 className="text-lg md:text-3xl font-bold text-center text-white py-4 lg:pb-4 bg-[#021c14dd]">
          Select the right service for your company{" "}
          <MousePointerClick
            className="inline w-7 h-7 md:w-9 lg:h-9"
            strokeWidth={1}
          />
        </h2>
      )}
      {/* <div className="w-full relative"></div> */}
      {(isRPA || isMedia) && (
        <div className="w-full flex justify-end">
          <button
            onClick={() => setService(isRPA ? "media" : "RPA")}
            className="bg-[var(--primaryL)] text-white text-center font-2 text-lg lg:text-xl rounded-bl-2xl py-2 lg:py-3 w-48 cursor-pointer ml-6 border-b-2 border-l-2 border-white"
          >
            {isRPA ? "Media Growth" : "RPA Solutions"}
            <ArrowUpRight className="inline -translate-y-px" />
          </button>
        </div>
      )}

      <main
        className={`${
          isDefault
            ? "grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 border-y border-white lg:border-none divide-white divide-y lg:divide-none"
            : ""
        }`}
      >
        {renderServiceBox("RPA", RPAServices, "Automation", "Solutions")}
        {renderServiceBox("media", MediaGrowth, "Media", "Growth")}
      </main>
    </section>
  );
}
