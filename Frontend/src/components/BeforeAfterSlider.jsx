import { useState } from "react";

function BeforeAfterSlider({ before, after }) {

  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div
      className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg cursor-col-resize"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onClick={handleMove}
    >

      {/* After Image */}

      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image */}

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}

      <div
        className="absolute top-0 bottom-0 w-1 bg-white"
        style={{ left: `${position}%` }}
      />

    </div>
  );
}

export default BeforeAfterSlider;