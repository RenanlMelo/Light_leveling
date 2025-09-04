import {
  DollarSign,
  ShieldCheck,
  BarChart2,
  Clock,
  Smile,
  Bell,
  CheckCircle2,
  FileText,
  UserPlus,
  Zap,
} from "lucide-react";

export default function RPAServices() {
  return (
    <>
      <main className="mt-4 mb-10">
        <Services_Hero />
        <Service_Contact />
        <Services_Benefits />
        <Services_Cases />
        <Services_RpaEvolution />
      </main>
    </>
  );
}

function Services_Hero() {
  return (
    <section className="px-6 mb-20">
      <h1 className="uppercase font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent w-fit mb-8">
        RPA Solutions
      </h1>

      <h2 className="text-[var(--primaryL)]  imaryL)] imaryL)] font-semibold text-3xl mb-4">
        Key Services for Your Business
      </h2>
      <img
        width={364}
        height={165}
        src="/images/services.webp"
        alt="Service hero image"
        className="rounded-lg mb-4 lg:hidden"
        loading="eager"
        fetchPriority="high"
      />

      <img
        width={1200}
        height={500}
        src="/images/services_big.webp"
        alt="Service hero image"
        className="rounded-lg mb-4 hidden lg:block h-96 object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="grid gap-8 mb-1">
        <div className="border-l-4 border-[var(--primary)] p-4 pl-5 bg-[#070707]">
          <h3 className="text-xl font-semibold mb-2 text-white">
            System Automation
          </h3>
          <p className="text-gray-300">
            Bots that fill out forms, extract data, and interact with software
            like ERPs and CRMs.
          </p>
        </div>
        <div className="border-l-4 border-[var(--primary)] p-4 pl-5 bg-[#070707]">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Report Generation
          </h3>
          <p className="text-gray-300">
            Automate financial, operational, and performance reports with
            scheduled delivery.
          </p>
        </div>
        <div className="border-l-4 border-[var(--primary)] p-4 pl-5 bg-[#070707]">
          <h3 className="text-xl font-semibold mb-2 text-white">
            System Integrations
          </h3>
          <p className="text-gray-300">
            Connect different tools without the need for APIs, using smart
            automation alone.
          </p>
        </div>
      </div>
    </section>
  );
}

function Service_Contact() {
  return (
    <section className="bg-gradient-to-r from-[var(--primaryL)]  to-[var(--primary)] text-white p-8 text-center shadow-lg mb-20">
      <h2 className="text-2xl font-bold mb-2">Ready to Automate?</h2>
      <p className="mb-4">
        Contact us and discover how RPA can transform your business.
      </p>
      <a
        target="_blank"
        href="https://www.instagram.com/leveling.corp/"
        className="inline-block bg-white text-[var(--primary)] font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
      >
        Contact Us
      </a>
    </section>
  );
}

function Services_Benefits() {
  const benefits = [
    {
      icon: <DollarSign className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Reduces Operational Costs",
      description: "Automates repetitive tasks to save on labor and resources.",
    },
    {
      icon: <ShieldCheck className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Eliminates Human Errors",
      description: "Ensures consistent, error-free execution across processes.",
    },
    {
      icon: <BarChart2 className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Increases Productivity",
      description:
        "Lets your team focus on high-value tasks while bots handle the rest.",
    },
    {
      icon: <Clock className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Operates 24/7",
      description: "No breaks, no downtime — bots work around the clock.",
    },
    {
      icon: <Smile className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Improves Customer Experience",
      description:
        "Faster response times and greater reliability in service delivery.",
    },
  ];
  return (
    <section className="px-6 mb-20">
      <h2 className="text-[var(--primaryL)]  font-semibold text-3xl mb-4">
        Key Benefits of RPA
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#111] rounded-xl p-5 shadow-lg"
          >
            <div className="shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services_Cases() {
  const useCases = [
    {
      icon: <FileText className="w-5 h-5 text-primaryL" />,
      label: "Invoice entry and ERP system automation",
    },
    {
      icon: <Zap className="w-5 h-5 text-primaryL" />,
      label: "Email parsing and automated report generation",
    },
    {
      icon: <UserPlus className="w-5 h-5 text-primaryL" />,
      label: "Client and vendor registration automation",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primaryL" />,
      label: "Data validation across platforms",
    },
    {
      icon: <Bell className="w-5 h-5 text-primaryL" />,
      label: "Stock monitoring and automatic alerts",
    },
  ];
  return (
    <section className="px-6 mb-20 text-gray-200">
      <h2 className="text-[var(--primaryL)]  imaryL)] font-semibold text-3xl mb-6">
        Common Use Cases
      </h2>
      <ul className="space-y-3">
        {useCases.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {item.icon}
            <span className="text-gray-300">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Services_RpaEvolution() {
  return (
    <section className="px-6 mb-20 text-gray-300">
      <h2 className="text-[var(--primaryL)]  font-semibold text-3xl mb-4">
        The Evolution of RPA
      </h2>

      <p className="mb-4 tracking-wide">
        At <strong>Leveling</strong>, we take RPA to the next level by
        integrating it with
        <strong> Artificial Intelligence</strong>,
        <strong> Machine Learning</strong>, and
        <strong> Process Mining</strong>.
      </p>

      <p className="mb-4 tracking-wide">
        This allows us to create intelligent automations that go far beyond
        executing repetitive tasks — they <strong>analyze data</strong>,{" "}
        <strong>make decisions</strong>, and{" "}
        <strong>continuously improve workflows</strong>.
      </p>

      <p className="mb-4 tracking-wide">
        Our approach follows the concept of <strong>Hyperautomation</strong>: a
        powerful blend of technologies that automates entire workflows from
        start to finish.
      </p>

      <p className="mb-4 tracking-wide">
        The result? <strong>More productivity</strong>,
        <strong>fewer errors</strong>, and{" "}
        <strong>more time for your team to focus on what truly matters</strong>.
      </p>

      <p className="tracking-wide">
        With <strong>Leveling</strong>, automation becomes a
        <strong> strategic advantage</strong> — powered by real intelligence and
        built for the future.
      </p>
    </section>
  );
}
