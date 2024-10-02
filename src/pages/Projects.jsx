import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import homeBackground from "../assets/images/Home-background.png"; // Ensure this path is correct

const Projects = () => {
  return (
    <section className="w-full min-h-screen relative">
      {/* Grayscale Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter grayscale-[80%] z-0"
        style={{
          backgroundImage: `url(${homeBackground})`, // Full background image
        }}
      ></div>

      {/* Dark Overlay for a More Blackish Effect */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-60 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto p-8">
        <h1 className="head-text text-white">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-200 mt-2 leading-relaxed">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further enhancements.
          Your collaboration is highly valued!
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold text-white">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-200">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </div>
    </section>
  );
};

export default Projects;
