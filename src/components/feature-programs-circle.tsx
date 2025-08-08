import Image from "next/image";

export const FeatureProgramsCircle = () => {
  // Triangle positions: 3 images at 120-degree intervals with head on the right
  const imagePositions = [
    { angle: -35, resource: "/program_1.svg" }, // Right (head of triangle)
    { angle: 120, resource: "/program_2.svg" }, // Top left
    { angle: 230, resource: "/program_3.svg" }, // Bottom left
  ];

  // Dots positioned between images (60 degrees offset from images)
  const dotPositions = [
    { angle: 50 }, // Between right and top left
    { angle: 175 }, // Between top left and bottom left
    { angle: 280 }, // Between bottom left and right
  ];

  const getPositionFromAngle = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
    };
  };

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Circle 1: 400px */}
      <div className="absolute w-[480px] h-[480px] opacity-40 rounded-full border border-[#222228]"></div>
      {/* Circle 2: 312px */}
      <div className="absolute w-[362px] h-[362px] rounded-full border border-[#222228]"></div>
      {/* Circle 3: 225px with images and dots */}
      <div className="absolute w-[275px] h-[275px] rounded-full border border-[#222228]"></div>
      {/* Circle 4: 137px */}
      <div className="absolute w-[190px] h-[190px] rounded-full border border-[#222228]"></div>
      {/* Circle 5: 50px */}
      <div className="absolute w-[100px] h-[100px] rounded-full border border-[#222228]"></div>

      {/* Images on the third circle in triangle formation */}
      {imagePositions.map((item, index) => {
        const position = getPositionFromAngle(item.angle, 137.5); // radius of third circle / 2 (275px / 2)
        return (
          <div
            key={`image-${index}`}
            className="absolute w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              left: `calc(50% + ${position.x}px - 32px)`,
              top: `calc(50% + ${position.y}px - 32px)`,
            }}
          >
            <Image
              src={item.resource}
              alt="program icon"
              width={50}
              height={50}
            />
          </div>
        );
      })}

      {/* Small dots between images */}
      {dotPositions.map((dot, index) => {
        const position = getPositionFromAngle(dot.angle, 137.5);
        return (
          <div
            key={`dot-${index}`}
            className="absolute bg-gradient-to-r w-3 h-3 from-[#FF9898] to-[#8054FF] rounded-full shadow-[0px_0px_1px_4px_rgba(255,152,152,0.4)]"
            style={{
              left: `calc(50% + ${position.x}px - 8px)`,
              top: `calc(50% + ${position.y}px - 8px)`,
              boxShadow:
                "0px 0px 1px 4px rgba(255,152,152,0.4), 0px 0px 12px 1px rgba(128,84,255,0.3)",
            }}
          />
        );
      })}
    </div>
  );
};
