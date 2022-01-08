const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 8080;

const app = express();
const httpServer = http.createServer(app);

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

httpServer.listen(PORT, () => {
  console.log("Server listening on Port: ", PORT);
});

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// SocketIO
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("MESSAGE_SEND", (message) => {
    console.log("A message was sent: ", message);
  });
  socket.emit("connection", null);
});
