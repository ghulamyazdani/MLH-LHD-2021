let context: any = {};

export const getCanvas = (canvas: any) => {
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  setCanvasContext(canvas);
  return context;
};
export const setCanvasContext = (canvas: any) => {
  context = canvas.getContext("2d");
  context.scale(2, 2);
  context.lineCap = "round";
  context.lineJoin = "round";

  context.strokeStyle = "black";
  context.lineWidth = 5;
};
