import React, { useEffect } from "react";
import Canvas from "../components/Canvas";
import Panel from "../components/Panel";
import { useCanvasStore } from "../store/canvasStore";
import styles from "../styles/homepage.module.css";

const Homepage: React.FC = () => {
  const color = useCanvasStore((state) => state.color);
  return (
    <div className={color === "grey" ? styles.eraser : styles.normal}>
      <Canvas />
      <Panel />
    </div>
  );
};

export default Homepage;
