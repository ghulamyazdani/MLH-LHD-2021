import express from "express";
import { Server, Socket } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("new user connected");
  socket.emit("new  connect", Date.now());

  socket.on("draw", (data) => {
    console.log(data);
    socket.broadcast.emit("newDraw", data);
  });
  socket.on("clear", (data) => {
    console.log(data);
    socket.broadcast.emit("clear", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
