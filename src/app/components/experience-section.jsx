import React from "react";
import { Hotel } from "lucide-react";
import Section from "./section";
import { BigTitle } from "./big-title";

export const ExperienceSection = ({ experiences }) => {
  return (
    <Section id="experience">
      <div className="space-y-10">
        <BigTitle>
          <div className="flex flex-row items-center gap-2">
            <Hotel size={64} />
            <h2 className="text-5xl font-bold lg:text-8xl">Experiences</h2>
          </div>
        </BigTitle>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-2 top-2 w-0.5 translate-x-[-1px] bg-neutral-300 dark:bg-neutral-600"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 pb-8 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="relative z-10 mt-1.5 h-4 w-4 flex-shrink-0 rounded-full bg-neutral-600 dark:bg-neutral-400"></div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-bold">
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {experience.companyName}
                  </a>
                </h4>
                <p>{experience.role}</p>
                <p>
                  {experience.startYear} - {experience.endYear}
                </p>
                <p>{experience.contract}</p>
                <ul className="list-inside list-disc">
                  {experience.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
