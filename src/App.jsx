// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function App() {
//   const projects = [
//     {
//       title: "Victory17 App",
//       desc: "A christian based re-entry App built with React & Tailwind.",
//       img: "/Victory_17Img.png",
//       link: "https://github.com/CJMerriman/Victory17_App.git",
//     },
//     {
//       title: "Dynamic Tattoo Profile Card Creator",
//       desc: "A web app for creating dynamic tattoo profile cards.",
//       img: "/1-tattoo-img.jpg",
//       link: "https://github.com/CJMerriman/Dynamic-Tattoo-Profile-Card-Creater.git",
//     },
//     {
//       title: "WEB Calculator",
//       desc: "WEB Calculator Design.",
//       img: "/pink-calculator.jpg",
//       link: "https://github.com/CJMerriman/WEB-CALCULATOR-DESIGN.git",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#c5d1ff] dark:bg-[#110627] text-black dark:text-white">
//       <Navbar />

//       <main className="flex-1">
//         {/* Home / Hero Section */}
//         <section
//           id="home"
//           className="relative flex items-center justify-center text-center min-h-[80vh] overflow-hidden"
//         >
//           {/* Background Image */}
//           <img
//             src="/1000_F_573644872_OzN4BzLY3BKNZoAPjP8NQIUM38HI4fyC.jpg"
//             alt="background"
//             className="absolute inset-9 w-container h-fit object-container brightness-75"
//           />
//           {/* Overlay Content */}
//           <div className="relative z-10 text-white px-6">
//             <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Charlene</h1>
//             <p className="text-lg max-w-xl mx-auto mb-6">
//               Front End developer passionate about creating modern, responsive, and
//               user-friendly apps.
//             </p>
//             <a
//               href="#projects"
//               className="btn inline-block"
//             >
//               View My Work
//             </a>
//           </div>
//         </section>

//         {/* About Section removed; use About.jsx for routed About page */}

//         {/* Projects Section */}
//         <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
//           <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {projects.map((proj, i) => (
//               <div
//                 key={i}

import Navbar from "./components/Navbar"; // Assuming your Navbar is in components/Navbar.jsx
import Footer from "./components/Footer"; // Assuming your Footer is in components/Footer.jsx

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
//                 className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform"
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460] text-black dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              {/* Projects Section visually separated */}
              <section id="projects" className="max-w-4xl mx-auto my-20 px-8 py-12 rounded-3xl shadow-2xl bg-white/95 dark:bg-gray-900/80 border-4 border-pink-200 dark:border-blue-700 backdrop-blur-lg">
                <Projects />
              </section>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={
            <section className="max-w-4xl mx-auto my-20 px-8 py-12 rounded-3xl shadow-2xl bg-white/95 dark:bg-gray-900/80 border-4 border-pink-200 dark:border-blue-700 backdrop-blur-lg">
              <Projects />
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
//             ))}

//           </div>

//         </section>



//         {/* Contact Section */}
