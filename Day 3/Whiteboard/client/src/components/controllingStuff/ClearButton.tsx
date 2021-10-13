import React from "react";
import { useCanvasStore } from "../../store/canvasStore";

const ClearButton: React.FC = () => {
  const ctx = useCanvasStore((state) => state.reff);
  const socket = useCanvasStore((state) => state.socket);
  const handleClear = () => {
    socket.emit("clear", true);
    ctx.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };
  return <button onClick={handleClear}>Clear</button>;
};

export default ClearButton;
