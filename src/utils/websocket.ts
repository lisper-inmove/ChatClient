import ReconnectingWebSocket from 'reconnecting-websocket';

export interface Request {
  id: string;
  token: string;
  action: string;
  messages: Message[];
}

export interface Response {
  id: string;
  action: string;
  isStart: boolean;
  isContinue: boolean;
  isFinished: boolean;
  iscomplete: boolean;
}

export interface Message {
  role: string;
  content: string;
}

export interface MessageData {
  sender: string;
  content: string;
  action: string;
  is_start: boolean;
  is_finished: boolean;
  is_continue: boolean;
  is_complete: boolean;
}

class WebSocketService {

  // private SOCKET_URL = 'wss://chat.inmove.top/ws';
  private SOCKET_URL = 'ws://192.168.3.124:8765';

  private static instance: WebSocketService;
  private socket: ReconnectingWebSocket;
  private handlers = new Map<string, (msg: MessageData) => void>();

  private constructor() {
    // 创建 WebSocket 连接
    this.socket = new ReconnectingWebSocket(this.SOCKET_URL);

    this.socket.addEventListener('open', () => {

    });

    // 接收到服务端的消息时
    this.socket.addEventListener('message', (event: any) => {
      const messageData: MessageData = JSON.parse(event.data);
      const handler = this.handlers.get(messageData.action);
      if (handler) {
        handler(messageData);
      }
      if (messageData.action === "error") {
        alert(messageData.content);
      }
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

  public sendMessage(message: MessageData) {
    this.socket.send(JSON.stringify(message));
  }

  public register(action: string, handler: (msg: MessageData) => void) {
    this.handlers.set(action, handler);
  }

}

export default WebSocketService;
