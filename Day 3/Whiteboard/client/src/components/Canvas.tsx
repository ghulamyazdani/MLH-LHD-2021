import React, { useEffect, useRef, useState } from "react";
import { getCanvas } from "../utils/canvasContext";
import { useCanvasStore } from "../store/canvasStore";

// Experimental
import socketIOClient from "socket.io-client";
const SERVER = "http://localhost:5000";

const Canvas: React.FC = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const setReff = useCanvasStore((state) => state.setReff);
  const globalColor = useCanvasStore((state) => state.color);
  const globalWidth = useCanvasStore((state) => state.width);
  const setGlobalSocket = useCanvasStore((state) => state.setSocket);

  const [isDrawing, setDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;

    contextRef.current.strokeStyle = globalColor;
    contextRef.current.lineWidth = globalWidth;

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    fakeSocket.emit("draw", { offsetX, offsetY, begin: true });

    setDrawing(true);
  };
  const stopDrawing = () => {
    contextRef.current.closePath();

    fakeSocket.emit("draw", { end: true });

    setDrawing(false);
  };
  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = e.nativeEvent;

    fakeSocket.emit("draw", {
      offsetX,
      offsetY,
      color: contextRef.current.strokeStyle,
      thickness: contextRef.current.lineWidth,
    });

    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  const handleClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;

    fakeSocket.emit("draw", {
      offsetX,
      offsetY,
      point: true,
      color: contextRef.current.strokeStyle,
      thickness: contextRef.current.lineWidth,
    });

    contextRef.current.strokeStyle = globalColor;
    contextRef.current.lineWidth = globalWidth;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setDrawing(true);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();

    contextRef.current.closePath();
    setDrawing(false);
  };

  const [fakeSocket, setFakeSocket] = useState(null);

  useEffect(() => {
    contextRef.current = getCanvas(canvasRef.current);
    setReff(contextRef);
    const socket = socketIOClient(SERVER);
    setFakeSocket(socket);
    setGlobalSocket(socket);

    socket.on("clear", () => {
      contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
    });

    socket.on("newDraw", (data) => {
      const { begin, end, point, color, thickness } = data;
      if (end) {
        contextRef.current.closePath();
      } else {
        const { offsetX, offsetY } = data;
        if (point) {
          contextRef.current.strokeStyle = color;
          contextRef.current.lineWidth = thickness;
          contextRef.current.beginPath();
          contextRef.current.moveTo(offsetX, offsetY);
          contextRef.current.lineTo(offsetX, offsetY);
          contextRef.current.stroke();
          contextRef.current.closePath();
        } else if (begin) {
          contextRef.current.beginPath();
          contextRef.current.moveTo(offsetX, offsetY);
        } else {
          contextRef.current.strokeStyle = color;
          contextRef.current.lineWidth = thickness;
          contextRef.current.lineTo(offsetX, offsetY);
          contextRef.current.stroke();
        }
      }
    });

    () => socket.disconnect();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      onClick={(e) => handleClick(e)}
      style={{
        background: "grey",
      }}
      onMouseDown={(e) => startDrawing(e)}
      onMouseUp={stopDrawing}
      onMouseMove={(e) => draw(e)}
    />
  );
};

export default Canvas;
