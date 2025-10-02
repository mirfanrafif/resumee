import React from "react";
import { ArrowRight, Globe } from "lucide-react";
import Section from "./section";
import { BigTitle } from "./big-title";

export const SocialsSection = ({ socials }) => {
  return (
    <Section
      id="socials"
      className="bg-neutral-100 dark:bg-neutral-900 dark:text-white"
    >
      <div className="space-y-10">
        <BigTitle>
          <div className="flex flex-row items-center gap-2">
            <Globe size={64} />
            <h2 className="text-5xl font-bold lg:text-8xl">Socials</h2>
          </div>
        </BigTitle>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-neutral-300 p-8 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-50"
            >
              <div className="mb-4 transition-colors duration-300 dark:text-white dark:group-hover:text-black">
                {React.cloneElement(social.icon, { size: 48 })}
              </div>
              <span className="text-xl font-medium transition-colors duration-300 dark:text-white dark:group-hover:text-black">
                {social.name}
              </span>
              <div className="mt-3 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowRight
                  size={20}
                  className="text-neutral-600 group-hover:text-black dark:text-white dark:group-hover:text-black"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
