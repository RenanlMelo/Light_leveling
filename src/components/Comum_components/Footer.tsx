import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 font-2 border-t border-[#505050] relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start">
        {/* Frase principal */}
        <div className="w-fit flex flex-col justify-center items-start gap-4">
          <p className="text-lg text-center lg:text-left max-w-md mx-auto lg:mx-0">
            Empowering businesses through automation and technology.
          </p>

          <img
            src="images/watermark.webp"
            width={200}
            height={200}
            className="absolute top-1/3 -translate-y-2/5 left-1/2 -translate-x-1/2 hidden lg:block"
          />
        </div>
        <hr className="text-[#505050] w-5/6 mx-auto my-6 lg:hidden" />
        {/* Seções de links */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 w-full sm:justify-around lg:justify-end text-sm">
          {/* Políticas */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </div>
          <hr className="text-[#505050] w-5/6 lg:w-2/6 mx-auto lg:mx-0 lg:place-self-end" />
          {/* Redes sociais */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <a
              href="https://www.linkedin.com/company/leveling-corporation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 50 50"
                fill="var(--primaryxL)"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              <span className="text-[var(--primaryxL)]">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/leveling.corp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 flex items-center gap-2"
            >
              <Instagram stroke="var(--primaryxL)" strokeWidth={2} size={28} />
              <span className="text-[var(--primaryxL)]">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white mt-8 py-3 text-center text-sm">
        © 2025 Leveling Corporation
      </div>
    </footer>
  );
}
