import HeroImg from "@/assets/images/anurag.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Aspiring Software Engineer & Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                I’m Anurag Garsondiya, a passionate and detail-oriented Computer Science Engineering student with real-world experience in web development and backend engineering. Currently working at Trusol, I specialize in building scalable backend systems, API integrations, and cloud-based solutions. My development style emphasizes performance, security, and automation.
              </p>
              <p>
                With hands-on skills in PHP, Node.js, Python, and Java, I’ve created everything from real-time chatbots using MeteorJS to background task processing with queue systems. I love solving complex problems through clean and efficient code and have a strong interest in machine learning and data analysis.
              </p>
              <p>
                When I’m not coding, I’m exploring new tech, streamlining backend processes, or diving into interesting data projects.
              </p>
              <p>
                Thank you for visiting my portfolio and taking the time to explore my work!{" "}
                {/* <span className="font-bold text-white">
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows. */}
              </p>
              {/* <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p> */}

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  {/* <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p> */}

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">

                    </cite>
                    <div className="flex items-center gap-2">
                      {/* <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      /> */}
                      <span className="text-white"></span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
