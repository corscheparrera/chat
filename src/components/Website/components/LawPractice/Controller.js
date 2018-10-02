import React from "react";
import { NavigationControl } from "react-map-gl";
const controllerStyle = {
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  right: "10px",
  bottom: "10px",
  zIndex: "1000"
};

export function Controller(props) {
  const { onViewportChange } = props;

  return (
    <div style={controllerStyle}>
      <NavigationControl onViewportChange={vp => onViewportChange(vp)} />
    </div>
  );
}
