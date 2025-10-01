"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "@react-spring/web";

export const BigTitle = ({ children }) => {
  const [ref, inView] = useInView({
    once: true, // Only animate once when first entering viewport
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0,0px,0)" : "translate3d(0,20px,0)",
    config: { tension: 220, friction: 120 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};
