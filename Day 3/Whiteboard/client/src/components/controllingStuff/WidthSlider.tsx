import React, { useEffect, useState } from "react";
import { useCanvasStore } from "../../store/canvasStore";

const WidthSlider: React.FC = () => {
  const [width, setWidth] = useState(5);
  const ctx = useCanvasStore((state) => state.reff);
  const setGlobalWidth = useCanvasStore((state) => state.setWidth);

  const handleColor = (value: string) => {
    const newWidth = parseInt(value);
    setWidth(newWidth);
    setGlobalWidth(newWidth);
    ctx.current.lineWidth = width;
  };
  return (
    <div>
      <input
        value={width}
        onChange={(e) => handleColor(e.target.value)}
        min="1"
        max="50"
        type="range"
        name="width"
        id="width"
      />
      <span>{" " + width}</span>
    </div>
  );
};

export default WidthSlider;
