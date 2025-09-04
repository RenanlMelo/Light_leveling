import {
  CirclePlus,
  DatabaseIcon,
  MonitorIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from "lucide-react";
import { useState } from "react";
import { Forms } from "../../../components/Dark_mode/Forms";

export default function HomePage() {
  return (
    <main className="mb-10">
      <Hero />
      <Forms />
      <Objectives />
      <Services />
      <Unlock />
    </main>
  );
}

function Hero() {
  return (
    <main className="mt-16 px-6 lg:pl-48 relative flex flex-col lg:flex-row min-h-[calc(100svh-10svh)] bg-black">
      <div className="pt-10 lg:pt-0 flex flex-col lg:flex-row items-center gap-x-24">
        <div>
          <h1 className="uppercase font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent w-fit">
            Improving and optimizing
            <br />
            your company processes
          </h1>
          <div className="flex justify-between items-center gap-x-2 py-8">
            <div className="flex gap-x-2">
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>
            <hr className="bg-gradient-to-r from-white to-[#737373] h-[2px] w-full" />
          </div>

          <div className="gap-y-6 flex flex-col lg:flex-row gap-x-10 justify-center items-center w-full">
            <a
              href="/about"
              className="text-center font-2 text-xl rounded-full py-3 border-2 border-[#fff] text-white w-2/3 cursor-pointer hover:text-[#ccc] hover:border-[#ccc]"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-center font-2 text-xl rounded-full py-3 bg-[var(--primaryL)] text-white w-2/3 cursor-pointer hover:bg-[#16502f]"
            >
              Services
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <img
            width={364}
            height={364}
            loading="eager"
            fetchPriority="high"
            alt="Introduction logo"
            src="/images/introducao_desktop.webp"
            className="aspect-square object-contain h-[364px] w-[364px] block lg:hidden translate-x-[2px]"
          />
          <img
            width={646}
            height={728}
            loading="eager"
            fetchPriority="high"
            alt="Introduction logo"
            src="/images/introducao.webp"
            className="aspect-square object-contain h-[728px] w-[646px] hidden lg:block translate-x-[2px]"
          />
        </div>
      </div>
    </main>
  );
}

function Objectives() {
  const objectivesDict = [
    {
      title: "Cost Efficiency & Productivity",
      content:
        "Boost operational efficiency while reducing manual tasks and costs by leveraging RPA automation.",
    },
    {
      title: "Time Savings",
      content:
        "Automate repetitive processes to free up employees for more strategic tasks, reducing delays.",
    },
    {
      title: "Accuracy & Compliance",
      content:
        "Minimize human errors and ensure adherence to regulations through consistent automated actions.",
    },
    {
      title: "Scalability & Growth",
      content:
        "Enable your operations to grow without needing to proportionally increase resources.",
    },
    {
      title: "Customer & Employee Experience",
      content:
        "Enhance satisfaction by speeding up service delivery and reducing repetitive workload.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black p-18 px-6">
      <h2 className="text-3xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent mt-14 mb-6 w-fit">
        What is your objective?
      </h2>
      <ul className="flex flex-col gap-y-6 text-lg text-white">
        {objectivesDict.map((obj, index) => {
          const isOpen = openIndex === index;
          return (
            <li
              key={index}
              className="border-[var(--primaryL)] border-l-2 pl-2 relative rounded-sm"
            >
              <div
                className={`flex items-center justify-between cursor-pointer py-1`}
                onClick={() => toggleIndex(index)}
              >
                {obj.title}
                {obj.content && (
                  <span className="absolute right-0">
                    <CirclePlus
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                )}
              </div>
              {obj.content && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-white p-3 rounded-md">{obj.content}</div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Services() {
  const servicesDict = [
    {
      title: "Process Automation",
      content:
        "Automate repetitive workflows across departments using RPA bots and integrations.",
      icon: <WorkflowIcon className="w-6 h-6" stroke="#fff" />,
    },
    {
      title: "Data Handling",
      content:
        "Extract, transform, and migrate data securely between systems — fast and error-free.",
      icon: <DatabaseIcon className="w-6 h-6" stroke="#fff" />,
    },
    {
      title: "Compliance & Auditing",
      content:
        "Ensure process compliance with logging, tracking, and audit-ready automation.",
      icon: <ShieldCheckIcon className="w-6 h-6" stroke="#fff" />,
    },
    {
      title: "Bot Monitoring",
      content:
        "Monitor your bots in real-time and receive alerts to guarantee operational stability.",
      icon: <MonitorIcon className="w-6 h-6" stroke="#fff" />,
    },
  ];
  return (
    <section className="px-6 py-18 bg-black text-white">
      <h2 className="text-3xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent mb-6 w-fit">
        Our Services
      </h2>
      <div className="grid grid-rows-4 divide-y divide-[#505050]">
        {servicesDict.map((item) => (
          <div key={item.title} className="flex items-start gap-4 py-4">
            <div className="p-3 bg-[var(--primaryL)]  maryL)] maryL)] maryL)] text-black rounded-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-base text-gray-300">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Unlock() {
  return (
    <section className="font-2 bg-white w-full text-lg lg:text-2xl text-[#242424] px-6 py-18 my-18">
      <h2 className="text-3xl mb-4 font-medium text-primaryL">
        Improve to the next Level
      </h2>
      <p>
        Unlock efficiency with Leveling RPA Services, liberating your team from
        repetitive tasks. Embrace a digital workforce for creative and strategic
        pursuits, revolutionizing your business processes.
      </p>
    </section>
  );
}
