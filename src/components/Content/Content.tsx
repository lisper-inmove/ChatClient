import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Send as SendIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import Message from './Message';
import WebSocketService from '../../utils/websocket';
import { MessageData } from '../../utils/websocket';
import styles from '../../css/Content.module.css';


const Content: React.FC = () => {
  const textFieldMaxRows = 10;
  const [message, setMessage] = useState('');
  // 消息已发送
  const [sending, setSending] = useState(false);
  // 已经收到服务端回消息了,但是还没有回复完成
  const [receiving, setReceiving] = useState(false);
  // 接收消息已经超时了
  const [receiveTimeout, setReceiveTimeout] = useState(false);
  const [ws, setWs] = useState<WebSocketService | null>(null);
  const [messages, setMessages] = useState<Array<MessageData>>([]);
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const websocket = WebSocketService.getInstance();
    websocket.register("chat", messageHandler);
    setWs(websocket);
  }, []);

  useEffect(() => {
    if (bottomRef.current && !userScrolledUp) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, userScrolledUp]);

  const messageHandler = (message: MessageData) => {
    console.log(message);
    setMessages((prevMessages) => {
      let newMessages = [...prevMessages];
      if (message.is_start) {
        newMessages.push({
          sender: 'inmove',
          content: message.content,
          action: 'chat'
        });
        setReceiving(true);
      } else if (message.is_continue) {
        if (newMessages.length > 0) {
          newMessages[newMessages.length - 1].content += message.content;
        }
      } else if (message.is_finished) {
        setSending(false);
        setReceiving(false);
      }
      return newMessages;
    })
  }

  const onSend = () => {
    if (!ws) {
      const m: MessageData = {
        sender: 'server',
        content: JSON.stringify({'message': 'Server Not Available'}),
        action: 'connect'
      };
      return;
    }
    if (message === '') {
      return;
    }
    const m: MessageData = {
      sender: 'inmove',
      content: JSON.stringify({'message': message}),
      action: 'chat'
    };
    setMessages((prevMessages) => [...prevMessages, {
      sender: 'inmove',
      content: message,
      action: 'chat'
    }]);

    let result = ws.sendMessage(m);
    setSending(true);
    setMessage('');
  };

    // 处理Enter和Shift + Enter的事件
  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      // 调用onSend函数
      onSend();
    } else if (event.key === 'Enter') {
   
    }
  };

     // 定义onChange函数
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop } = e.currentTarget;
    if (scrollTop < lastScrollTop) {
      // Scrolled up
      setUserScrolledUp(true);
    } else {
      // Scrolled down
      setUserScrolledUp(false);
    }
    setLastScrollTop(scrollTop);
  };

  return (
    <Box className={ styles.content }>
      <Box 
        className={ styles.messageHistory }
        onScroll={handleScroll}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            content={message.content}
            index={index}
          />
        ))}
        <Box className={ styles.bottomRef } ref={bottomRef}>
        </Box>
      </Box>
      <Box className={ styles.textArea }>
        <IconButton>
        {messages.length > 0 && (sending 
          ? <> 
              <Box className={styles.textAreaCtrl}>
                <StopOutlinedIcon /> 
                <Typography variant="body1">
                  停止生成
                </Typography>
              </Box>
            </> 
          : <>
              <Box className={styles.textAreaCtrl}>
                <RefreshIcon />
                <Typography variant="body1">
                  重新生成
                </Typography>
              </Box>
            </>
        )}
        </IconButton>
        <TextField
          className={ styles.textField }
          multiline
          variant="outlined"
          placeholder="Type your message here"
          onKeyUp={handleKeyUp}
          value={message}
          onChange={onChange}
          disabled={sending}
          InputProps={{
            endAdornment: (
              <IconButton color="primary" aria-label="send message" onClick={onSend}>
                {sending ? <SendIcon className={styles.sendingIcon} /> 
                  : <SendIcon className={styles.sendIcon} />}
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default Content;
