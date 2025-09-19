  import React from "react";

  export default function Home() {
    const projects = [
      {
        title: "Victory17 App",
        desc: "A christian based re-entry App built with React & Tailwind.",
        img: "/Victory_17Img.png",
        link: "https://github.com/CJMerriman/Victory17_App.git",
      },
      {
        title: "Dynamic Tattoo Profile Card Creator",
        desc: "A web app for creating dynamic tattoo profile cards.",
        img: "/1-tattoo-img.jpg",
        link: "https://github.com/CJMerriman/Dynamic-Tattoo-Profile-Card-Creater.git",
      },
      {
        title: "WEB Calculator",
        desc: "WEB Calculator Design.",
        img: "/pink-calculator.jpg",
        link: "https://github.com/CJMerriman/WEB-CALCULATOR-DESIGN.git",
      },
    ];

  return (
    <main className="flex-1 bg-[#c5d1ff] dark:bg-[#110627] text-black dark:text-white">
          {/* Home / Hero Section */}
          <section
            id="home"
            className="relative flex items-center justify-center text-center min-h-[80vh] overflow-hidden"
          >
            {/* Background Image */}
            <img
              src="/1000_F_573644872_OzN4BzLY3BKNZoAPjP8NQIUM38HI4fyC.jpg"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            {/* Overlay Content */}
            <div className="relative z-10 text-white px-6">
              <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Charlene</h1>
              <p className="text-lg max-w-xl mx-auto mb-6">
                Front End developer passionate about creating modern, responsive, and
                user-friendly apps.
              </p>
              <a
                href="#projects"
                className="btn inline-block"
              >
                View My Work
              </a>
            </div>
          </section>

          {/* About Section removed; use About.jsx for routed About page */}

          {/* Projects Section */}
          <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform flex flex-col items-center"
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-40 h-40 object-cover rounded-xl mb-4 shadow"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg">{proj.title}</h3>
                    <p className="text-sm mt-2">{proj.desc}</p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn mt-4 inline-block"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="max-w-4xl mx-auto px-6 py-16 text-center"
          >
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>
            <p className="mb-6">
              Let’s connect! You can reach me at: <span className="font-semibold">423-551-0192</span> <br />
              <span className="font-semibold">cmerriman@banyanlabs.io</span>
            </p>
            <a href="mailto:cmerriman@banyanlabs.io" className="btn">
              Send Me an Email
            </a>
          </section>
    </main>
  );
}