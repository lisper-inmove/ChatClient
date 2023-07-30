import ReconnectingWebSocket from 'reconnecting-websocket';
import { api } from '../proto/api/api';

class WebSocketService {

  private SOCKET_URL = 'wss://ai.inmove.top/ChatServer';
  // private SOCKET_URL = 'ws://192.168.3.124:8765';

  private static instance: WebSocketService;
  private socket: ReconnectingWebSocket;
  private handlers = new Map<number, (msg: any) => void>();

  private constructor() {
    // 创建 WebSocket 连接
    this.socket = new ReconnectingWebSocket(this.SOCKET_URL);

    this.socket.addEventListener('open', () => {

    });

    // 接收到服务端的消息时
    this.socket.addEventListener('message', (event: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        const message = new Uint8Array(reader.result as ArrayBuffer);
        const response = api.common.Response.decode(message);

        // 是否是需要有弹出提示框的返回
        if ([
          api.common.ErrorCode.POPUP_ERROR,
          api.common.ErrorCode.TOKEN_AUTHORIZE_EXPIRED
        ].includes(response.errcode)) {
          alert(response.errmsg);
        }

        // 是否需要处理回调
        const handler = this.handlers.get(response.action);
        if (handler) {
          const message: any = response.content ? JSON.parse(response.content) : {};
          handler(message);
        }

      };
      reader.readAsArrayBuffer(event.data);
    });

    this.socket.addEventListener('close', (event: any) => {

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
    let message = api.common.Request.create({
      action: action,
      content: JSON.stringify(req),
    });
    let buffer = api.common.Request.encode(message).finish();
    this.socket.send(buffer);
  }

  public login(req: any) {
    this.send(req, api.common.Action.LOGIN);
  }

  public signUp(req: any) {
    this.send(req, api.common.Action.SIGN_UP);
  }

  public createMessage(req: any) {
    this.send(req, api.common.Action.CREATE_MESSAGE);
  }

  public createChitchat(req: any) {
    this.send(req, api.common.Action.CREATE_CHITCHAT);
  }

  public deleteChitchat(req: any) {
    this.send(req, api.common.Action.DELETE_CHITCHAT);
  }

  public tokenAuthorize(req: any) {
    this.send(req, api.common.Action.TOKEN_AUTHORIZE);
  }

  public stopGenerate(req: any) {
    this.send(req, api.common.Action.STOP_GENERATE);
  }

  public regenerate(req: any) {
    this.send(req, api.common.Action.REGENERATE);
  }

}

export default WebSocketService;
