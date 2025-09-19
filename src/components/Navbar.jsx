import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track which section is in view
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 120; // adjust for navbar height
          const height = section.offsetHeight;
          if (
            window.scrollY >= offset &&
            window.scrollY < offset + height
          ) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { name: "Home", to: "/", id: "home" },
  { name: "About", to: "/about", id: "about" },
  { name: "Projects", to: "/projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <Link
          to="/"
          className={`text-2xl font-bold transition ${
            scrolled
              ? "text-gray-900 dark:text-white"
              : "text-white hover:text-blue-400"
          }`}
        >
          My Portfolio
        </Link>

        {/* Nav Links evenly spaced */}
        <div className="flex gap-12">
          {navLinks.map((link) => (
            link.to ? (
              <Link
                key={link.id}
                to={link.to}
                className={`relative font-medium transition ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-200"
                    : "text-white"
                } ${
                  active === link.id
                    ? "text-pink-500 dark:text-blue-400"
                    : "hover:text-blue-400"
                }`}
              >
                {link.name}
                {/* Active underline */}
                {active === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                )}
              </Link>
            ) : (
              <a
                key={link.id}
                href={link.href}
                className={`relative font-medium transition ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-200"
                    : "text-white"
                } ${
                  active === link.id
                    ? "text-pink-500 dark:text-blue-400"
                    : "hover:text-blue-400"
                }`}
              >
                {link.name}
                {/* Active underline */}
                {active === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                )}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}
