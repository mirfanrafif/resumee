import React from "react";
import { Construction } from "lucide-react";
import Section from "./section";
import { BigTitle } from "./big-title";

export const ProjectsSection = ({ projects }) => {
  return (
    <Section
      id="projects"
      className="bg-neutral-100 dark:bg-neutral-900 dark:text-white"
    >
      <div className="space-y-10">
        <BigTitle>
          <div className="flex flex-row items-center gap-2">
            <Construction size={64} />
            <h2 className="text-5xl font-bold lg:text-8xl">Projects</h2>
          </div>
        </BigTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-neutral-300 bg-white/50 p-6 transition-all duration-300 hover:border-neutral-600 hover:shadow-lg dark:border-neutral-600 dark:bg-neutral-800/50 dark:hover:border-neutral-400"
            >
              <h4 className="mb-3 text-lg font-bold text-neutral-900 dark:text-white">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {project.projectName}
                  </a>
                ) : (
                  project.projectName
                )}
              </h4>
              <p className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((stack, stackIndex) => (
                  <span
                    key={stackIndex}
                    className="cursor-default rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-700 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
