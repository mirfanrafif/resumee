import React from "react";
import { School } from "lucide-react";
import Section from "./section";
import { BigTitle } from "./big-title";

export const EducationSection = ({ education, volunteer }) => {
  return (
    <Section id="education" className="bg-neutral-900 text-white">
      <div className="space-y-10">
        <BigTitle>
          <div className="flex flex-row items-center gap-2">
            <School size={64} />
            <h2 className="text-5xl font-bold lg:text-8xl">
              Education & Volunteering
            </h2>
          </div>
        </BigTitle>

        <div className="flex flex-col space-y-6 lg:flex-row lg:gap-12 lg:space-y-0">
          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-2xl font-bold">Education</h3>
            {education.map((edu, index) => (
              <div key={index}>
                <h4 className="font-bold underline">{edu.institution}</h4>
                <p>{edu.major}</p>
                <p>{edu.degree}</p>
                <p>
                  {edu.startYear} - {edu.endYear}
                </p>
                {edu.gpa && <p>GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-2xl font-bold">Volunteering</h3>
            {volunteer.map((vol, index) => (
              <div key={index}>
                <h4 className="font-bold underline">{vol.organization}</h4>
                <p>{vol.role}</p>
                <p>
                  {vol.startYear} - {vol.endYear}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
