import React from "react";
import { panelStyles } from "../styles/panel";
import ClearButton from "./controllingStuff/ClearButton";
import ColorPicker from "./controllingStuff/ColorPicker";
import Eraser from "./controllingStuff/Eraser";
import WidthSlider from "./controllingStuff/WidthSlider";

const Panel: React.FC = () => {
  return (
    <div style={panelStyles}>
      <ClearButton />
      <ColorPicker />
      <WidthSlider />
      <Eraser />
    </div>
  );
};

export default Panel;
