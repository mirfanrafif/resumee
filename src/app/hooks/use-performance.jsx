import { useEffect } from "react";

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Log performance metrics in development
    if (process.env.NODE_ENV === "development") {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log(`[Performance] ${entry.name}: ${entry.duration}ms`);
        });
      });

      observer.observe({ type: "measure", buffered: true });
      observer.observe({ type: "navigation", buffered: true });

      // Clean up
      return () => observer.disconnect();
    }
  }, []);

  const measurePerformance = (name, fn) => {
    performance.mark(`${name}-start`);
    const result = fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    return result;
  };

  return { measurePerformance };
};
