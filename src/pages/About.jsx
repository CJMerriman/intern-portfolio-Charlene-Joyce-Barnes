import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Profile Image */}
      <div className="flex justify-center md:justify-start">
        <img
          src="/profile.jpg" // <-- place your photo in /public as profile.jpg
          alt="Charlene Joyce Barnes"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-blue-500"
        />
      </div>

      {/* Bio + Skills */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
          Hi, I’m <span className="font-semibold">Charlene Joyce Barnes</span>, a
          front-end developer passionate about building modern, responsive, and
          user-friendly web apps. I love working with React and Tailwind to bring
          ideas to life, and I’m always learning new tools to level up my skills.
        </p>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Skills
        </h3>
        <ul className="flex flex-wrap gap-3 mb-8">
          {["React", "Tailwind", "JavaScript", "HTML", "CSS", "Git"].map(
            (skill, i) => (
              <li
                key={i}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-medium rounded-lg shadow-sm"
              >
                {skill}
              </li>
            )
          )}
        </ul>

        {/* Resume Button */}
        <a
          href="/Charlene_Barnes_Resume.pdf" // <-- put your resume PDF in /public
          download
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
