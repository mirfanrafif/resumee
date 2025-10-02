import React from "react";
import { FileStack } from "lucide-react";
import Section from "./section";
import { BigTitle } from "./big-title";

export const TechStackSection = ({ techStack }) => {
  return (
    <Section
      id="stack"
      className="bg-neutral-100 dark:bg-neutral-900 dark:text-white"
    >
      <div className="space-y-8">
        <BigTitle>
          <div className="flex flex-row items-center gap-2">
            <h2 className="text-5xl font-bold lg:text-8xl">
              <FileStack size={64} className="mr-4 inline-block" />
              Tech Stack
            </h2>
          </div>
        </BigTitle>
        <div className="flex flex-wrap gap-3">
          {techStack.map((stack, index) => (
            <span
              key={index}
              className="cursor-default rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-700 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};
