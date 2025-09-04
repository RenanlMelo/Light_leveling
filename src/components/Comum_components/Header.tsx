import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-black py-3 px-6 flex justify-between items-center fixed top-0 z-[100] w-[100vw]">
      <img
        width={40}
        height={40}
        alt="Leveling logo"
        src="/images/logo_header.webp"
        className="w-10 aspect-square"
      />

      <div>
        <Menu
          onClick={() => setMenu(true)}
          stroke="white"
          size={32}
          className="cursor-pointer"
        />
      </div>

      {menu && (
        <div
          className="
            fixed inset-0 bg-black/80 backdrop-blur-[4px] z-[100]
            flex flex-col items-center justify-center
            opacity-0 animate-fadeIn
          "
        >
          <X
            onClick={() => setMenu(false)}
            stroke="white"
            size={40}
            className="absolute top-6 right-6 cursor-pointer"
          />
          <nav className="flex flex-col gap-6 text-white text-3xl uppercase text-center">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
