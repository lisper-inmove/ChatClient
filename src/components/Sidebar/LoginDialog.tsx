import React, { useState, useEffect, useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WebSocketService from '../../websocket/Websocket';
import styles from '../../css/LoginDialog.module.css';
import { api } from '../../proto/api/api';
import { Md5 } from 'ts-md5';


interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  setUserinfo: (username: string, avatar: string) => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose, setUserinfo }) => {
  const [value, setValue] = useState(0);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginUsernameError, setLoginUsernameError] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpUsernameError, setSignUpUsernameError] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordError, setSignUpPasswordError] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [signUpConfirmPasswordError, setSignUpConfirmPasswordError] = useState("");
  const [ws, setWs] = useState<WebSocketService | null>(null);

  const requestCallback = useCallback((message: any) => {
    localStorage.setItem('userinfo', JSON.stringify(message));
    setUserinfo(message.username, '');
    onClose();
  }, [onClose, setUserinfo]);

  useEffect(() => {
    const websocket = WebSocketService.getInstance();
    websocket.register(api.common.Action.LOGIN, requestCallback);
    websocket.register(api.common.Action.SIGN_UP, requestCallback);
    setWs(websocket);
  }, [requestCallback]);

  const checkSignUpParams = () => {
    if (signUpUsername.length < 3) {
      setSignUpUsernameError("用户名至少3个字符");
      return false;
    }
    setSignUpUsernameError("");
    if (signUpPassword.length < 8) {
      setSignUpPasswordError("密码至少为8位数");
      return false;
    }
    if (signUpConfirmPassword != signUpPassword) {
      setSignUpConfirmPasswordError("密码不一致");
      setSignUpPasswordError("密码不一致");
      return false;
    }

    setSignUpConfirmPasswordError("");
    setSignUpPasswordError("");
    setSignUpUsernameError("");
    return true;
  }

  const checkLoginParams = () => {
    if (loginUsername.length < 3) {
      setLoginUsernameError("用户名至少3个字符");
      return false;
    }
    setLoginUsernameError("");
    if (loginPassword.length < 8) {
      setLoginPasswordError("密码至少为8位数");
      return false;
    }
    setLoginPasswordError("");
    setLoginUsernameError("");
    return true;
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleLoginUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUsername(event.target.value);
  };

  const handleLoginPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(event.target.value);
  };

  const handleSignUpUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpUsername(event.target.value);
  };

  const handleSignUpPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpPassword(event.target.value);
  };

  const handleSignUpConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpConfirmPassword(event.target.value);
  };

  const handleLogin = () => {
    if (!checkLoginParams()) {
      return false;
    }
    if (!ws) {
      return false;
    }
    ws.login(
      {
        'username': loginUsername,
        'password': Md5.hashStr(loginPassword)
      }
    )
    setLoginUsername('');
    setLoginPassword('');
  };

  const handleSignUp = () => {
    if (!checkSignUpParams()) {
      return false;
    }
    if (!ws) {
      return false;
    }
    ws.signUp({
      'username': signUpUsername,
      'password': Md5.hashStr(signUpPassword)
    });
    setSignUpUsername('');
    setSignUpPassword('');
    setSignUpConfirmPassword('');
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === "Enter") {
      if (value === 0) {
        handleLogin();
      } else {
        handleSignUp();
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className={styles.dialogContent}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="登陆" />
          <Tab label="注册" />
        </Tabs>
        <Box hidden={value !== 0}>
          <TextField
            autoFocus
            autoComplete="off"
            margin="dense"
            id="username"
            label="用户名"
            type="text"
            fullWidth
            variant="standard"
            value={loginUsername}
            onChange={handleLoginUsernameChange}
            className={styles.textField}
            error={!!loginUsernameError}
            helperText={loginUsernameError}
            onKeyUp={handleSubmit}
          />
          <TextField
            margin="dense"
            id="password"
            label="密码"
            type="password"
            fullWidth
            variant="standard"
            value={loginPassword}
            onChange={handleLoginPasswordChange}
            error={!!loginPasswordError}
            helperText={loginPasswordError}
            onKeyUp={handleSubmit}
          />
        </Box>
        <Box hidden={value !== 1}>
          <TextField
            autoFocus
            autoComplete="off"
            margin="dense"
            id="username"
            label="用户名"
            type="text"
            fullWidth
            variant="standard"
            value={signUpUsername}
            onChange={handleSignUpUsernameChange}
            error={!!signUpUsernameError}
            helperText={signUpUsernameError}
            onKeyUp={handleSubmit}
          />
          <TextField
            margin="dense"
            id="password"
            label="密码"
            type="password"
            fullWidth
            variant="standard"
            value={signUpPassword}
            onChange={handleSignUpPasswordChange}
            error={!!signUpPasswordError}
            helperText={signUpPasswordError}
            onKeyUp={handleSubmit}
          />
          <TextField
            margin="dense"
            id="password"
            label="确认密码"
            type="password"
            fullWidth
            variant="standard"
            value={signUpConfirmPassword}
            onChange={handleSignUpConfirmPasswordChange}
            error={!!signUpConfirmPasswordError}
            helperText={signUpConfirmPasswordError}
            onKeyUp={handleSubmit}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
