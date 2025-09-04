import {
  BarChart2,
  HandCoins,
  LaptopMinimalCheck,
  TabletSmartphone,
} from "lucide-react";

export default function MediaGrowth() {
  return (
    <main className="mt-4">
      <Services_Hero />
      <Service_Contact />
      <Services_Benefits />
      <Services_RpaEvolution />
    </main>
  );
}

function Services_Hero() {
  return (
    <section className="px-6 mb-18 bg-[var(--primaryL)]">
      <h1 className="uppercase font-bold text-4xl lg:text-5xl text-white w-fit mb-8">
        Media Growth
      </h1>

      <h2 className="text-gray-100 text-2xl mb-4">
        Leads every day, without spending on ads
      </h2>
      <img
        width={364}
        height={165}
        src="/images/media_growth.webp"
        alt="Service hero image"
        className="rounded-lg mb-4 lg:hidden"
        loading="eager"
        fetchPriority="high"
      />

      <img
        width={1200}
        height={500}
        src="/images/media_growth.webp"
        alt="Service hero image"
        className="rounded-lg mb-4 hidden lg:block h-96 object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="grid gap-8 mb-1">
        <div className="p-4 pl-5 bg-[#369266] rounded-md">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Your own Website
          </h3>
          <p className="text-gray-200">
            We build a professional website for your business, designed to make
            your customers find you. Optimized for search engines, your site
            becomes a true lead-generation machine.
          </p>
        </div>
        <div className="p-4 pl-5 bg-[#369266] rounded-md">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Google My Business Optimization
          </h3>
          <p className="text-gray-200">
            With our exclusive method, we set up and optimize your Google My
            Business profile the right way. When customers search for your
            business on Google, they’ll not only find you, they’ll contact you.
          </p>
        </div>
        <div className="p-4 pl-5 bg-[#369266] rounded-md">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Social Media Layer 1
          </h3>
          <p className="text-gray-200">
            We apply the best practices to turn your social media into powerful
            sales channels and the showcase of your brand. Build credibility,
            earn trust, and attract the clients you deserve.
          </p>
        </div>
      </div>
    </section>
  );
}

function Service_Contact() {
  return (
    <section className="bg-gradient-to-r from-[var(--primaryL)] to-[var(--primary)] text-white p-8 text-center shadow-lg mb-18">
      <h2 className="text-2xl font-bold mb-2">Ready to boost your sales?</h2>
      <p className="mb-4">
        Contact us and discover how Business Growth can transform your business.
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
      icon: <TabletSmartphone className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Generates Leads Consistently",
      description:
        "Your business will be found online every day — without paid ads.",
    },
    {
      // icon: <Eye className="text-[var(--primaryL)]  w-6 h-6" />,
      icon: <LaptopMinimalCheck className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Boosts Online Visibility",
      description:
        "SEO + Google My Business make your company stand out when clients search.",
    },
    {
      icon: <BarChart2 className="text-[var(--primaryL)]  w-6 h-6" />,
      title: "Drives Sales Growth",
      description:
        "Your online presence becomes a powerful sales engine, month after month.",
    },
    {
      icon: (
        <HandCoins
          className="text-[var(--primaryL)]  w-7 h-7"
          strokeWidth={1.5}
        />
      ),
      title: "No Ads. No Extra Costs.",
      description:
        "Receive qualified leads every day — 100% organic, $0 spent on ads.",
    },
  ];
  return (
    <section className="px-6 pt-18 pb-4 bg-white">
      <h2 className="text-[var(--primaryL)] font-semibold text-3xl mb-4">
        Key Benefits of Media Growth
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#f5f5f5] rounded-xl p-5 shadow-lg"
          >
            <div className="shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-lg font-medium text-[#505050] mb-1">
                {benefit.title}
              </h3>
              <p className="text-[#707070] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-14">
        <span className="bg-gradient-to-r from-gray-300 to-gray-300 h-[2px] w-full" />
        <div className="flex gap-x-2">
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function Services_RpaEvolution() {
  return (
    <section className="px-6 pt-6 pb-18 bg-white">
      <h2 className="text-[var(--primaryL)]  font-semibold text-3xl mb-4">
        The Evolution with Business Growth
      </h2>

      <p className="mb-4 tracking-wide">
        At <strong>Leveling</strong>, we take business growth to the next level
        by combining <strong>Professional Websites</strong>,<strong>SEO</strong>
        ,<strong>Google My Business</strong> and
        <strong>Strategic Social Media.</strong>
      </p>

      <p className="mb-4 tracking-wide">
        This allows us to build a <strong>digital presence</strong> that goes
        far beyond visibility — it attracts qualified <strong>leads</strong>,
        builds <strong>trust</strong>, and converts attention into{" "}
        <strong>real customers.</strong>
      </p>

      <p className="mb-4 tracking-wide">
        Our approach follows the concept of <strong>Smart Growth Setup:</strong>
        a powerful blend of tools and strategies designed to make your business
        stand out and generate leads organically.
      </p>

      <p className="tracking-wide">
        The result? More <strong>leads</strong>, higher{" "}
        <strong>credibility</strong>, and measurable <strong>growth</strong> —
        without wasting money on ads. With Leveling, your online presence
        becomes a strategic advantage — built for authority, scalability, and
        long-term <strong>success.</strong>
      </p>
    </section>
  );
}
