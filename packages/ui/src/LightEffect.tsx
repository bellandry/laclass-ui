import React, { useState } from "react";

export interface LightEffectProps {
  color?: string;
  size?: number;
  intensity?: number;
}

export const LightEffect: React.FC<LightEffectProps> = ({
  color = "rgba(255, 255, 255, 0.5)",
  size = 150,
  intensity = 0.6,
}) => {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative w-full h-full" onMouseMove={handleMouseMove}>
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(circle ${size}px at ${position.x}px ${
            position.y
          }px, ${color} ${intensity * 100}%, transparent 100%)`,
          transition: "background 0.05s ease-out",
        }}
      />
    </div>
  );
};
