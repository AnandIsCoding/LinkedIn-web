import { io } from "socket.io-client";

const socket = io(
  import.meta.env.VITE_SOCKET_SERVER || "https://devlinked.site" ,
  {
    withCredentials: true,
    transports: ["websocket"],
    path: "/server/socket.io",
  }
);

export default socket;
