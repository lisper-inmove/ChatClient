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
  messages: Message[];
}

export interface Message {
  role: string;
  content: string;
}
