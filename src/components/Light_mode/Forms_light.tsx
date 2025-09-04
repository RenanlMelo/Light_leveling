"use client";
import { Listbox } from "@headlessui/react";
import { useState } from "react";

const options = ["Google", "LinkedIn", "Instagram", "Referral", "Other"];

declare global {
  interface Window {
    gtag_report_conversion: (url: string) => void;
  }
}

export const FormsLight = () => {
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
    <div className="w-full bg-[#32855dcc] backdrop-blur-md py-18 lg:px-6 flex items-center justify-center place-self-center relative">
      <div className="bg-white lg:rounded-2xl py-12 px-6 lg:px-18 w-full shadow-[0px_0px_7px_rgba(0,0,0,.25)] lg:shadow-[0px_0px_12px_rgba(0,0,0,.25)] max-w-3xl">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-4xl font-semibold text-[var(--primaryL)] lg:my-12 text-left">
            Your business results matter
          </h2>
          <p className="text-gray-600 lg:text-xl lg:mb-12 text-left">
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
                className="peer w-full px-4 pt-6 pb-2 rounded-[2px] border border-gray-300 focus:outline-none text-lg bg-transparent text-[#505050] autofill:bg-transparent autofill:text-[#505050]"
              />
              <label
                htmlFor={field.id}
                className={`absolute left-3 px-1 transition-all text-[var(--primaryL)]  ${
                  formValues[field.id]
                    ? "top-1 text-sm "
                    : "top-4 text-lg peer-focus:top-1 peer-focus:left-3 left-4 peer-focus:text-sm"
                }`}
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <label className="absolute left-4 -top-3 bg-white text-[var(--primaryL)] text-lg px-1 z-10">
              How did you hear about us?
            </label>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="w-full px-4 py-5 rounded-[2px] border border-gray-300 text-gray-600 text-left">
                  {selected}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full rounded-[2px] border border-gray-600 shadow-xl z-10">
                  {options.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      value={option}
                      className={({ active }) =>
                        `px-4 py-3 cursor-pointer text-gray-600 ${
                          active
                            ? "bg-[var(--primaryL)] text-white"
                            : "bg-white text-[var(--primaryL)]"
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
              className="peer w-full px-4 py-5 rounded-[2px] border border-gray-300 focus:outline-none text-lg bg-transparent"
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-3 px-1 transition-all text-[var(--primaryL)] ${
                formValues.message
                  ? "top-1 text-sm "
                  : "top-5 text-lg peer-focus:top-1 peer-focus:left-3 left-4 peer-focus:text-sm"
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
