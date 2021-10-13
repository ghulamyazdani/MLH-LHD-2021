import React, { useState } from "react";
import { useCanvasStore } from "../../store/canvasStore";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState("#000000");
  const ctx = useCanvasStore((state) => state.reff);
  const setGlobalColor = useCanvasStore((state) => state.setColor);

  const handleColor = (newColor: string) => {
    setColor(newColor);
    setGlobalColor(newColor);
    ctx.current.strokeStyle = color;
  };

  const handlePencil = () => {
    setGlobalColor(color);
    ctx.current.strokeStyle = color;
  };
  return (
    <>
      <input
        value={color}
        onChange={(e) => handleColor(e.target.value)}
        type="color"
        name="color"
        id="colorpicker"
      />
      <button onClick={handlePencil}>Pencil</button>
    </>
  );
};

export default ColorPicker;
