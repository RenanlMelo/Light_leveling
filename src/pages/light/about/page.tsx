import Home_Button from "../../../components/Comum_components/HomeButton";

export default function AboutUs_light() {
  return (
    <main className="bg-white">
      <Home_Button />
      <About_Hero />
      <About_Team />
      <About_Values />
    </main>
  );
}

function About_Hero() {
  return (
    <section className="px-6 lg:px-32 pt-48 pb-24">
      <h1 className="uppercase font-bold text-4xl lg:text-5xl text-[var(--primaryL)] w-fit mb-8">
        About Leveling
      </h1>
      <p className="text-[#303030] leading-relaxed max-w-5xl">
        Leveling is a cutting-edge RPA and automation solutions company founded
        by three friends passionate about transforming business processes. We
        specialize in end-to-end automation, helping organizations increase
        efficiency, reduce errors, and drive digital transformation with
        tailored robotic process automation services.
      </p>
    </section>
  );
}

function About_Team() {
  const teamMembers = [
    {
      name: "Bruno Reis",
      title: "Marketing Manager",
      image: "/images/profile2.webp",
    },
    {
      name: "Kevin Scavassin",
      title: "Operating Manager",
      image: "/images/profile3.webp",
      class: "",
    },
    {
      name: "Renan Melo",
      title: "Technology Manager",
      image: "/images/profile1.webp",
    },
  ];
  return (
    <section className="px-6 lg:px-32 py-18 bg-[var(--primaryL)]">
      <h2 className="text-white font-semibold text-3xl mb-8">Our Team</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 divide-y lg:divide-transparent divide-gray-300">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="pb-6 pt-0 text-left border-b-2 border-white"
          >
            <div className="w-fit aspect-square mx-auto mb-4 rounded-sm relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                width={512}
                height={512}
                className="object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-gray-200">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About_Values() {
  return (
    <section className="px-6 lg:px-32 py-18">
      <h2 className="text-[var(--primaryL)] font-semibold text-3xl mb-8">
        Our Mission & Values
      </h2>
      <div className="space-y-6 text-[#303030]">
        <div>
          <h3 className="text-lg font-medium text-[#707070] mb-1">
            Our Mission
          </h3>
          <p>
            To empower businesses by automating mundane tasks, enabling teams to
            focus on innovation and strategic growth.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#707070] mb-1">
            Our Vision
          </h3>
          <p>
            To be the leading partner in digital transformation, delivering
            scalable, reliable, and intelligent automation solutions worldwide.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#707070] mb-1">
            Our Values
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Integrity & Transparency</li>
            <li>Innovation & Excellence</li>
            <li>Client-Centric Approach</li>
            <li>Collaboration & Teamwork</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
