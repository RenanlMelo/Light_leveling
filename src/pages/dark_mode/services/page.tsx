import { useState } from "react";
import Home_Button from "../../../components/Comum_components/HomeButton";
import RPAServices from "../../../components/Light_mode/RPA_light";
import MediaGrowth from "../../../components/Light_mode/MediaGrowth_light";

export default function Services() {
  const [service, setService] = useState("");

  const isRPA = service === "RPA";
  const isMedia = service === "media";
  const isDefault = service === "";

  const containerBaseStyle =
    "relative z-40 m-4 px-2 py-4 lg:p-8 max-h-[40vh] lg:max-h-[100vh] overflow-hidden rounded-3xl transition-all duration-300";
  const overlayStyle =
    "lg:bg-black/40 absolute top-0 bottom-0 left-0 right-0 rounded-3xl hover:bg-transparent border-2 border-neutral-600 cursor-pointer shadow-[inset_0px_-50px_20px_rgba(0,0,0,.5),inset_0px_-100px_20px_rgba(0,0,0,.75),inset_0px_-150px_20px_rgba(0,0,0,.75)]";

  const renderServiceBox = (
    type: "RPA" | "media",
    Component: React.ElementType,
    animationClass: string
  ) => {
    const isActive = service === type || isDefault;
    return (
      isActive && (
        <div
          onClick={() => isDefault && setService(type)}
          className={`
            ${isDefault ? containerBaseStyle : ""}
            ${isDefault ? animationClass : ""}
            ${isDefault ? "hover:z-50" : ""}
          `}
        >
          <span className={`${isDefault ? overlayStyle : "hidden"}`} />
          <p
            className={`${
              isDefault
                ? "absolute bottom-4 right-8 text-center font-2 text-sm rounded-full py-1 bg-[var(--primaryL)] text-white w-1/4 cursor-pointer hover:bg-[#16502f]"
                : "hidden"
            }`}
          >
            See More
          </p>
          <Component />
        </div>
      )
    );
  };

  return (
    <section className="pt-16 pb-18 bg-black">
      <Home_Button />

      {(isRPA || isMedia) && (
        <div className="w-full flex justify-end">
          <button
            onClick={() => setService(isRPA ? "media" : "RPA")}
            className="text-center font-2 text-lg lg:text-xl rounded-l-full py-2 lg:py-3 border-2 border-r-0 border-neutral-600 lg:border-neutral-400 text-neutral-400 lg:text-neutral-300 w-48 cursor-pointer hover:text-[#eee] hover:border-[#eee] transition-all ml-6"
          >
            {isRPA ? "Media Growth" : "RPA Solutions"}
          </button>
        </div>
      )}

      <main
        className={`${
          isDefault
            ? "grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1"
            : ""
        }`}
      >
        {renderServiceBox(
          "RPA",
          RPAServices,
          "hover:scale-[110%] hover:translate-x-20 hover:bg-black"
        )}
        {renderServiceBox(
          "media",
          MediaGrowth,
          "hover:scale-[110%] hover:-translate-x-20 hover:bg-black"
        )}
      </main>
    </section>
  );
}
