import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";


const wss = new WebSocketServer({ port: 8080 });

const game_manager = new GameManager();

wss.on("connection", function connection(ws) {
    game_manager.addUser(ws);
    ws.on("disconnect",()=>game_manager.removeUser(ws));
});
