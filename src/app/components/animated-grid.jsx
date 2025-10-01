"use client";

import { useEffect, useRef } from "react";

export const AnimatedGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const gridSize = 40;
    let animationId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawGrid = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid dots
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) +
              Math.pow(y - canvas.height / 2, 2)
          );

          // Create a pulsing effect based on time and distance
          const pulse = Math.sin(time * 0.002 + distance * 0.01) * 0.5 + 0.5;
          const opacity = 0.2 + pulse * 0.25;

          ctx.fillStyle = `rgba(100, 100, 100, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(drawGrid);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationId = requestAnimationFrame(drawGrid);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};
