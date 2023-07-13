import ReconnectingWebSocket from 'reconnecting-websocket';
import { Request, Response, Message } from './Protocol';
import { api } from '../proto/api/api';

class WebSocketService {

  private SOCKET_URL = 'wss://ai.inmove.top/ChatServer';
  // private SOCKET_URL = 'ws://192.168.3.124:8765';

  private static instance: WebSocketService;
  private socket: ReconnectingWebSocket;
  private handlers = new Map<number, (msg: Message) => void>();

  private constructor() {
    // 创建 WebSocket 连接
    this.socket = new ReconnectingWebSocket(this.SOCKET_URL);

    this.socket.addEventListener('open', () => {
      console.log("Connect to server", this.SOCKET_URL);
      console.log(api.common.ProtocolNumber.PING);
    });

    // 接收到服务端的消息时
    this.socket.addEventListener('message', (event: any) => {
      // let protocol = JSON.parse(event.data);
      const reader = new FileReader();
      reader.onload = () => {
        const message = new Uint8Array(reader.result as ArrayBuffer);
        const protocol = api.common.Protocol.decode(message);
        console.log(protocol, this);
        if (protocol.action !== api.common.ProtocolNumber.POPUP_ERROR) {
          const message: Message = JSON.parse(protocol.content);
          const handler = this.handlers.get(protocol.action);
          if (handler) {
            handler(message);
          }
        } else if (protocol.action === api.common.ProtocolNumber.POPUP_ERROR) {
          alert(protocol.errmsg);
        }
      };
      reader.readAsArrayBuffer(event.data);
    });

    this.socket.addEventListener('close', (event: any) => {
      console.log("close", event);
    });

  }

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  public getSocket(): ReconnectingWebSocket {
    return this.socket;
  }

  public sendMessage(req: any) {
    this.socket.send(JSON.stringify(req));
  }

  public register(action: number, handler: (resp: any) => void) {
    this.handlers.set(action, handler);
  }

  public send(req: any, action: number) {
    let message = api.common.Protocol.create({
      action: action,
      content: JSON.stringify(req),
      errmsg: "",
    });
    let buffer = api.common.Protocol.encode(message).finish();
    this.socket.send(buffer);
  }

  public login(req: any) {
    this.send(req, api.common.ProtocolNumber.LOGIN);
  }

  public signUp(req: any) {
    this.send(req, api.common.ProtocolNumber.SIGN_UP);
  }

  public createMessage(req: any) {
    this.send(req, api.common.ProtocolNumber.CREATE_MESSAGE);
  }

  public createChitchat(req: any) {
    this.send(req, api.common.ProtocolNumber.CREATE_CHITCHAT);
  }

  public tokenAuthorize(req: any) {
    this.send(req, api.common.ProtocolNumber.TOKEN_AUTHORIZE);
  }

}

export default WebSocketService;
