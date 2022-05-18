import { io } from "socket.io-client";

const socket = io("ws://localhost:8080");

console.log("a")

socket.on("message", (data:any) => {
  console.log(data);
})