import ReconnectingWebSocket from 'reconnecting-websocket';
import { Request, Response, Message } from './Protocol';
import { api } from '../proto/api/api';

class WebSocketService {

  public POPUP_ERROR = 0xFFFF;
  public LOGIN_ACTION = 0x01;
  public SIGN_UP_ACTION = 0x02;
  public CREATE_MESSAGE_ACTION = 0x13;
  public CREATE_CHITCHAT = 0x10;

  // private SOCKET_URL = 'wss://chat.inmove.top/ws';
  private SOCKET_URL = 'ws://192.168.3.124:8765';

  private static instance: WebSocketService;
  private socket: ReconnectingWebSocket;
  private handlers = new Map<number, (msg: Message) => void>();

  private constructor() {
    // 创建 WebSocket 连接
    this.socket = new ReconnectingWebSocket(this.SOCKET_URL);

    this.socket.addEventListener('open', () => {
      console.log("Connect to server");
    });

    // 接收到服务端的消息时
    this.socket.addEventListener('message', (event: any) => {
      let protocol = JSON.parse(event.data);
      if (protocol.action !== this.POPUP_ERROR) {
        const message: Message = JSON.parse(protocol.content);
        const handler = this.handlers.get(protocol.action);
        if (handler) {
          handler(message);
        }
      } else if (protocol.action === this.POPUP_ERROR) {
        alert(protocol.errmsg);
      }
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

  public login(req: any) {
    let request = this.add_pn(JSON.stringify(req), this.LOGIN_ACTION);
    this.socket.send(request)
  }

  public signUp(req: any) {
    let request = this.add_pn(JSON.stringify(req), this.SIGN_UP_ACTION);
    this.socket.send(request)
  }

  public createMessage(req: any) {
    let request = this.add_pn(JSON.stringify(req), this.CREATE_MESSAGE_ACTION);
    this.socket.send(request)
  }

  public createChitchat(req: any) {
    let request = this.add_pn(JSON.stringify(req), this.CREATE_CHITCHAT);
    this.socket.send(request)
  }

  public add_pn(msg: string, pn: number) {
    let buffer = Buffer.alloc(2);
    buffer.writeUInt16BE(pn, 0);
    let byteStr = buffer.toString('binary');
    return byteStr + msg;
  }

}

export default WebSocketService;
