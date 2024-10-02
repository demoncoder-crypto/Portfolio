import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

// Import the background image
import homeBackground from "../assets/images/Home-background.png"; // Ensure the path is correct

const About = () => {
  return (
    <section
      className="max-container relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${homeBackground})`,
        minHeight: "100vh", // Ensures the section covers the full viewport height
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 p-8">
        <h1 className="head-text text-white">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Prabhjit
          </span>{" "}
          👋
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-200">
          <p>
            Software Engineer based in India, specializing in technical
            expertise through hands-on learning and building applications.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text text-white">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text text-white">Project Experience.</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-200">
            <p>
              I've created a lot of AI and full stack applications, leveling up my
              skills and building exciting projects. Here's the rundown:
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: `8px solid ${experience.iconBg}`,
                    boxShadow: "none",
                    background: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #fff" }} // Arrow color matches content background
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, idx) => (
                      <li
                        key={`experience-point-${idx}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </div>
    </section>
  );
};

export default About;
