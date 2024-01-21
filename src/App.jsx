import React from "react";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const App = () => {
  return (
    <div className="h-full bg-black font-sans">
      <Reveal>
        <nav className="flex items-center justify-center sm:justify-end pt-[35px] lg:pe-[150px]">
          <button className="border border-gray-400 rounded-[8px] mx-[10px] py-[8px] px-[15px] text-white bg-transparent">
            <Link to="about" smooth={true} duration={500} offset={-150}>
              About me
            </Link>
          </button>
          <Link to="contact" smooth={true} duration={1500}>
            <button className="border border-white rounded-[8px] mx-[10px] py-[8px] px-[17px] text-black bg-white">
              Contact
            </button>
          </Link>
        </nav>
      </Reveal>
      <Reveal>
        <section className="h-screen snap-center">
          <div class="flex justify-center mt-[150px]">
            <div class="w-[230px] bg-zinc-950 px-[10px]  h-[230px] rounded-full overflow-hidden">
              <img
                src="src/assets/isame.png"
                alt="isa_mammadli"
                class=" object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <h1 className="text-white font-bold text-6xl">Isa Mammadli</h1>
          </div>
          <div className="flex justify-center mt-[10px]">
            <h3 className="text-zinc-400 font-bold text-2xl">
              This is my design🔪
            </h3>
          </div>
          <div className="flex max-w-[550px] mx-auto mt-[30px] text-center">
            <p className="whitespace-normal overflow-hidden text-zinc-400 font-bold text-md">
              I am Software Developer. I am developing web, mobile, and desktop
              applications on .NET platform.
            </p>
          </div>
          <div className="flex justify-center mt-[40px]">
            <button className="border border-zinc-500 rounded-full px-[50px] py-[15px] text-white">
              Contact Me
            </button>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section id="about" className="h-96 snap-center">
          <div className="flex justify-center mt-[30px]">
            <h1 className="text-white font-bold text-6xl">ABOUT ME</h1>
          </div>
          <div className="flex max-w-[900px] mx-auto mt-[30px] text-center">
            <p className="whitespace-normal overflow-hidden text-zinc-400 font-bold text-md">
              I am Software Developer. I am developing web, mobile, and desktop
              applications on .NET platform. Also, I am a mechanical engineering
              student at Azerbaijan State Oil and Industry University but I have
              chosen software development since childhood.
            </p>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="h-screen snap-center">
          <div className="flex justify-center mt-[30px]">
            <h1 className="text-white font-bold text-6xl">EXPERIENCE</h1>
          </div>
          <article className="max-w-[900px] mx-[30px] lg:mx-auto my-[50px] text-center">
            <div className="flex flex-wrap  justify-between text-white text-xl">
              <p>
                <span className="font-bold">ASOIU /</span> FullStack .NET
                Developer
              </p>
              <p className="font-extralight">2022-2023</p>
            </div>
            <p className="text-left text-pretty text-zinc-400 mt-[30px]">
              Library Application is developing on Blazor Client and ASP.NET
              Core Web API and both of them are developed by me. 2 Client Apps,
              one of them is for users who send requests for searching books or
              journals. another one is Admin Panel for looking at user requests.
              Article App for Teachers is developing ReactJS Client and ASP.NET
              Core Web API and only backend developing by me. Sleedy App is
              developing on ASP.NET MVC Client and ASP.NET Web API and both of
              them are developed by me. This app help teacher for publishing
              posters, personal advertisement, etc. with photos, videos, and
              presentation.
            </p>
          </article>
          <article className="max-w-[900px] mx-[30px] lg:mx-auto my-[50px] text-center">
            <div className="flex flex-wrap justify-between text-white text-xl">
              <p>
                <span className="font-bold">AzIIEduLab /</span> C# Development
                Instructor
              </p>
              <p className="font-extralight">2022-2023</p>
            </div>
            <p className="text-left text-pretty text-zinc-400 mt-[30px]">
              I was teaching Students of Azerbaijan State Oil and Industry
              University about C# (.NET 6 and 7) and ASP.NET Web API twice a
              week.
            </p>
          </article>
          <article className="max-w-[900px] mx-[30px] lg:mx-auto my-[50px] text-center">
            <div className="flex flex-wrap justify-between text-white text-xl">
              <p>
                <span className="font-bold">StepIT Academy /</span> Software
                Development Instructor
              </p>
              <p className="font-extralight">2023-Now</p>
            </div>
            <p className="text-left text-pretty text-zinc-400 mt-[30px]">
              I am teaching Students of STEP IT Academy about Python, Lego
              Spike, HTML, CSS, Figma and C++ courses
            </p>
          </article>
          <article className="max-w-[900px] mx-[30px] lg:mx-auto my-[50px] text-center">
            <div className="flex flex-wrap justify-between text-white text-xl">
              <p>
                <span className="font-bold">IT Innovation /</span> ReactJS
                Instructor
              </p>
              <p className="font-extralight">2023 (3 months)</p>
            </div>
            <p className="text-left text-pretty text-zinc-400 mt-[30px]">
              I was teaching Students of IT Innovation about Html,CSS,JS and
              ReactJS courses
            </p>
          </article>
          <article className="max-w-[900px] mx-[30px] lg:mx-auto my-[50px] text-center">
            <div className="flex flex-wrap justify-between text-white text-xl">
              <p>
                <span className="font-bold">Freelancer /</span> FullStack
                Software Developer
              </p>
              <p className="font-extralight">2022 - Now</p>
            </div>
            <p className="text-left text-pretty text-zinc-400 mt-[30px]">
              I'm actually working as Freelance FullStack Software Developer. I
              developed web, mobile and backend applications.
            </p>
          </article>
        </section>
      </Reveal>
      <Reveal>
        <section id="contact" className="h-28 snap-center">
          <div className="flex justify-center">
            <a href="https://github.com/isaaholic">
              <FaGithub className="text-white text-2xl mx-3" />
            </a>
            <a href="https://www.instagram.com/isaaholic/">
              <FaInstagram className="text-white text-2xl mx-3" />
            </a>
            <a href="https://www.linkedin.com/in/isamemmedli/">
              <FaLinkedin className="text-white text-2xl mx-3" />
            </a>
          </div>
          <div className="flex mt-[10px] text-pretty text-center justify-center">
            <p className="text-white text-sm max-w-[550px]">
              Thanks to Ibrahim Memon for Figma Design. Coded in Visual Studio
              Code by me truly. Built with React.JS and Vite.JS and TailwindCSS,
              deployed with Github Pages
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default App;
