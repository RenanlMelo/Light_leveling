"use client";
import { Listbox } from "@headlessui/react";
import { useState } from "react";

const options = ["Google", "LinkedIn", "Instagram", "Referral", "Other"];

declare global {
  interface Window {
    gtag_report_conversion: (url: string) => void;
  }
}

export const Forms = () => {
  const [selected, setSelected] = useState(options[0]);
  const [formValues, setFormValues] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/send-email.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first: formValues.first,
            last: formValues.last,
            email: formValues.email,
            message: formValues.message,
            source: selected,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormValues({ first: "", last: "", email: "", message: "" });

        const redirectUrl = "https://levelingcorp.com.br/";

        if (typeof window.gtag_report_conversion === "function") {
          window.gtag_report_conversion(redirectUrl);
        } else {
          window.location.href = redirectUrl;
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="bg-[#000] py-18 lg:mt-10 lg:mb-32 px-6 flex items-center justify-center max-w-3xl mx-auto">
      <div className="rounded-2xl p-6 w-full shadow-[0px_0px_200px_rgba(50,133,93,.75)] lg:shadow-[0px_0px_7px_rgba(50,133,93,.75)]">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-4xl font-semibold text-[var(--primaryxL)] lg:my-12 text-left">
            Your business results matter
          </h2>
          <p className="text-gray-400 lg:text-xl lg:mb-12 text-left">
            Achieve them with minimized risk through our bespoke innovation
            capabilities. Fill in the form below.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {(
            [
              { id: "first", label: "First name", type: "text" },
              { id: "last", label: "Last name", type: "text" },
              { id: "email", label: "Business email", type: "email" },
            ] as const
          ).map((field) => (
            <div key={field.id} className="relative">
              <input
                id={field.id}
                type={field.type}
                placeholder=" "
                autoComplete="on"
                value={formValues[field.id]}
                onChange={handleInputChange}
                className="peer w-full px-4 pt-6 pb-2 rounded-[2px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123524] text-lg bg-transparent text-white autofill:bg-transparent autofill:text-white"
              />
              <label
                htmlFor={field.id}
                className={`absolute left-3 px-1 transition-all  text-gray-400 ${
                  formValues[field.id]
                    ? "top-1 text-sm text-[var(--primaryxL)]"
                    : "top-4 text-lg peer-focus:top-1 peer-focus:left-3 left-4 peer-focus:text-sm peer-focus:text-[var(--primaryxL)]"
                }`}
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <label className="absolute left-4 -top-3 text-gray-400 text-lg bg-[#000] px-1 z-10">
              How did you hear about us?
            </label>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="w-full px-4 py-5 rounded-[2px] border border-gray-300 bg-black text-white text-left">
                  {selected}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full rounded-[2px] border border-gray-600 shadow-xl z-10 bg-black">
                  {options.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      value={option}
                      className={({ active }) =>
                        `px-4 py-3 cursor-pointer text-gray-400 ${
                          active ? "bg-[var(--primaryL)] text-white" : ""
                        }`
                      }
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows={4}
              placeholder=" "
              value={formValues.message}
              onChange={handleInputChange}
              className="peer w-full px-4 py-5 rounded-[2px] border border-gray-300 focus:outline-none text-lg bg-transparent text-white"
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-3 px-1 transition-all text-gray-400 ${
                formValues.message
                  ? "top-1 text-sm text-[#123524]"
                  : "top-5 text-lg peer-focus:top-1 peer-focus:left-3 left-4 peer-focus:text-sm peer-focus:text-[var(--primaryxL)]"
              }`}
            >
              How can we help you?
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`button-click-animation w-full py-3 rounded-full tracking-wider font-semibold text-white ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[var(--primaryL)] hover:bg-[#16502f] transition-colors"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {status === "success" && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-4">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
