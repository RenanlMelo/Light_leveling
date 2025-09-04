import {
  CirclePlus,
  DatabaseIcon,
  MonitorIcon,
  ShieldCheckIcon,
  WorkflowIcon,
} from "lucide-react";
import { useState } from "react";
import { FormsLight } from "../../../components/Light_mode/Forms_light";

export default function Homepage_light() {
  return (
    <main>
      <Hero />
      <FormsLight />
      <Services />
      <Unlock />
      <Objectives />
    </main>
  );
}

function Hero() {
  return (
    <main className="relative flex flex-col lg:flex-row lg:min-h-screen">
      <div className="px-6 lg:px-32 lg:pl-48 pt-32 pb-18 flex flex-col lg:flex-row items-center gap-x-24 bg-black/50 w-full">
        <div>
          <h1 className="uppercase font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#aaa] bg-clip-text text-transparent w-fit">
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
            <span className="bg-gradient-to-r from-white to-[#aaa] h-[2px] w-full" />
          </div>
          <div className="gap-y-6 flex flex-col lg:flex-row gap-x-10 justify-center items-center w-full py-16 '">
            <a
              href="/about"
              className="text-center font-2 text-xl rounded-full py-3 border-3 font-semibold border-[#fff] text-white w-2/3 cursor-pointer hover:text-[#eee] hover:border-[#ccc] transition-all"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-center font-2 text-xl rounded-full py-3 font-semibold bg-[var(--primaryL)] text-white w-2/3 cursor-pointer hover:bg-[#16502f] hover:text-[#eee] transition-all"
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </main>
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
    <section className="px-6 lg:px-32 py-18 text-[#303030] bg-[#ffffff] backdrop-blur-lg">
      <h2 className="text-3xl mb-6 w-fit">Our Services</h2>
      <div className="grid grid-rows-4 divide-y divide-[#aaa]">
        {servicesDict.map((item) => (
          <div key={item.title} className="flex items-start gap-4 py-4">
            <div className="p-3 bg-[var(--primaryL)] rounded-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-base">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
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
    <section className="p-18 px-6 lg:px-32 text-[#303030] shadow-lg bg-[#ffffff] backdrop-blur-lg ">
      <h2 className="text-3xl mb-6 w-fit">What is your objective?</h2>
      <ul className="flex flex-col gap-y-6 text-lg">
        {objectivesDict.map((obj, index) => {
          const isOpen = openIndex === index;
          return (
            <li
              key={index}
              className="border-[var(--primaryL)] border-x-2 px-2 shadow-md relative rounded-sm"
            >
              <div
                className={`flex items-center justify-between cursor-pointer py-2`}
                onClick={() => toggleIndex(index)}
              >
                {obj.title}
                {obj.content && (
                  <span className="inline">
                    <CirclePlus
                      stroke="var(--primaryL)"
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
                  <div className="p-3 rounded-md">{obj.content}</div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Unlock() {
  return (
    <section className="font-2 w-fit text-lg lg:text-2xl text-[#fff] py-16 px-10 lg:px-24 my-32 mx-auto max-w-5xl bg-[var(--primaryL)] rounded-none lg:rounded-2xl">
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
