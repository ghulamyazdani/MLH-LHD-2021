import create from "zustand";
import React from "react";

interface canvasState {
  reff: React.MutableRefObject<any>;
  color: string;
  width: number;
  socket: any;
  setColor: (newColor: string) => void;
  setWidth: (newWidth: number) => void;
  setReff: (newReff: React.MutableRefObject<any>) => void;
  setSocket: (newSocket: any) => void;
}

export const useCanvasStore = create<canvasState>((set) => ({
  reff: null,
  color: "black",
  width: 5,
  socket: null,
  setReff: (newReff) => set(() => ({ reff: newReff })),
  setColor: (newColor) => set(() => ({ color: newColor })),
  setWidth: (newWidth) => set(() => ({ width: newWidth })),
  setSocket: (newSocket) => set(() => ({ socket: newSocket })),
}));
