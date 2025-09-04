import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { navigate } from "../../routing/navigate";

export default function Home_Button() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [level2, setLevel2] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      const level2Path = sessionStorage.getItem("level2");
      setLevel2(level2Path);
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState();
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const getBreadcrumbLabel = (path: string | null) => {
    if (!path || path === "/") return "Home";
    if (path.includes("/services")) return "Services";
    if (path.includes("/about")) return "About";
    if (path.includes("/privacy-policy")) return "Privacy Policy";
    if (path.includes("/terms-of-service")) return "Terms of Service";
    return path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
  };

  if (currentPath === "/") return null;

  return (
    <div
      className={`fixed top-16 h-16 flex justify-start items-center w-full px-6 ${
        currentPath === "/services"
          ? "text-[#303030] bg-[#e8e8e8ee]"
          : "text-[#303030] bg-[#e8e8e8ee]"
      } text-lg absolute z-50`}
    >
      <button
        onClick={() => navigate("/")}
        className={`underline underline-offset-4 decoration-transparent ${
          currentPath === "/services"
            ? "hover:decoration-white"
            : "hover:decoration-[#303030]"
        } transition cursor-pointer`}
      >
        <ChevronLeft className="inline -translate-y-px" />
        Home
      </button>

      {level2 && level2 !== "/" && (
        <>
          <span className="mx-2">/</span>
          {level2 !== currentPath ? (
            <button
              onClick={() => navigate(level2)}
              className="underline underline-offset-4 decoration-transparent hover:decoration-[#303030] transition cursor-pointer"
            >
              {getBreadcrumbLabel(level2)}
            </button>
          ) : (
            <span
              className={`${
                currentPath === "/services"
                  ? "text-[#707070]"
                  : "text-[#707070]"
              }`}
            >
              {getBreadcrumbLabel(level2)}
            </span>
          )}
        </>
      )}
    </div>
  );
}
