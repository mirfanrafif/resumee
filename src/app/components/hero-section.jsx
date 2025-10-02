import React from "react";
import Section from "./section";
import { BigTitle } from "./big-title";
import { AnimatedGrid } from "./animated-grid";

export const HeroSection = ({ profile }) => {
  return (
    <Section id="hero" className="relative overflow-hidden">
      <AnimatedGrid />
      <div className="relative z-10 space-y-8">
        <BigTitle>
          <h1 className="text-5xl font-bold lg:text-8xl">
            Performance Over <br />{" "}
            <span className="font-serif text-4xl lg:text-7xl">Aesthetics</span>
          </h1>
        </BigTitle>
        <h3 className="max-w-lg">
          Hello, my name is {profile.fullName}. I am a {profile.role}, mainly
          focused on Frontend Development. I specialize in React, Next.js,
          TypeScript, and Flutter for building modern web and mobile
          applications. I am currently working at{" "}
          {profile.experiences[0].companyName} as a{" "}
          {profile.experiences[0].role}.
        </h3>
      </div>
    </Section>
  );
};
