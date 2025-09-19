
import React from "react";

const sampleProjects = [
  { title: "Project A", desc: "A Christian-based re-entry app", link: "#https://victory17-app.vercel.app/" },
  { title: "Project B", desc: "Dynamic-Tattoo-Profile-Card-Creater", link: "#https://github.com/CJMerriman/Dynamic-Tattoo-Profile-Card-Creater.git" },
  { title: "Project C", desc: "WEB-CALCULATOR-DESIGN", link: "#https://github.com/CJMerriman/WEB-CALCULATOR-DESIGN.git" },
];

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {sampleProjects.map((p) => (
          <div key={p.title} className="bg-white/5 p-4 rounded-lg flex flex-col items-center">
            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                className="w-40 h-40 object-cover rounded-xl mb-4 shadow"
              />
            )}
            <h3 className="font-bold mb-2 text-center">{p.title}</h3>
            <p className="mb-4 text-center">{p.desc}</p>
            <a
              className="text-blue-300 underline hover:text-blue-500 transition-colors"
              href={p.link}
              target={p.link !== '#' ? "_blank" : undefined}
              rel={p.link !== '#' ? "noopener noreferrer" : undefined}
              aria-label={`View ${p.title}`}
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
