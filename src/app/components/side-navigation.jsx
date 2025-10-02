"use client";

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const sections = [
  { id: "hero", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "socials", label: "Socials" },
];

export const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Show navigation after scrolling past hero section
      setIsVisible(window.scrollY > 200);

      // Show labels while scrolling
      setShowLabels(true);

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Hide labels after 500ms of no scrolling
      scrollTimeout = setTimeout(() => {
        setShowLabels(false);
      }, 500);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
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

  const labelsAnimation = useSpring({
    opacity: showLabels ? 1 : 0,
    transform: showLabels ? "translateX(0px)" : "translateX(10px)",
    config: { tension: 280, friction: 25 },
  });

  return (
    <animated.nav
      style={navAnimation}
      className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 transform flex-col items-end space-y-4"
      onMouseEnter={() => setShowLabels(true)}
      onMouseLeave={() => setShowLabels(false)}
    >
      {sections.map((section, index) => (
        <div key={section.id} className="group flex items-center gap-3">
          <animated.div style={labelsAnimation} className="text-right">
            <span
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === index
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-600 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-300"
              }`}
            >
              {section.label}
            </span>
          </animated.div>
          <button
            onClick={() => scrollToSection(section.id)}
            className={`h-3 w-3 flex-shrink-0 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
              activeSection === index
                ? "border-neutral-900 bg-neutral-900 dark:border-white dark:bg-white"
                : "border-neutral-400 bg-transparent hover:border-neutral-600 dark:border-neutral-500 dark:hover:border-neutral-400"
            }`}
            aria-label={`Go to ${section.label}`}
          />
        </div>
      ))}
    </animated.nav>
  );
};
