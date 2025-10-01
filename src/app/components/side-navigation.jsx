"use client";

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const sections = [
  { id: "hero", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "socials", label: "Socials" },
];

export const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Show navigation after scrolling past hero section
      setIsVisible(window.scrollY > 200);

      // Find active section
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      let currentSection = 0;
      sectionElements.forEach((element, index) => {
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    console.log(`Trying to scroll to: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log(`Element found:`, element);

    if (element) {
      // Add a small offset to account for any fixed headers or padding
      const offsetTop = element.offsetTop - 50;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
  };

  const navAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(20px)",
    config: { tension: 300, friction: 30 },
  });

  return (
    <animated.nav
      style={navAnimation}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3"
    >
      {sections.map((section, index) => (
        <div key={section.id} className="relative group">
          <button
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
              activeSection === index
                ? "bg-neutral-900 border-neutral-900"
                : "bg-transparent border-neutral-400 hover:border-neutral-600"
            }`}
            aria-label={`Go to ${section.label}`}
          />

          {/* Tooltip */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-neutral-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              {section.label}
            </div>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-neutral-900 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>
      ))}
    </animated.nav>
  );
};
