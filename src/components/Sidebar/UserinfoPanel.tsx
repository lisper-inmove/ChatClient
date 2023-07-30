import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import styles from '../../css/UserinfoPanel.module.css';
import RechargeDialog from './RechargeDialog'; // adjust the path if necessary
import LoginDialog from './LoginDialog'; // adjust the path if necessary
import Image from 'next/image';
import WebSocketService from '../../websocket/Websocket';
import { api } from '../../proto/api/api';


const UserinfoPanel = () => {

  // 用户登陆注册面板
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [ws, setWs] = useState<WebSocketService | null>(null);

  // 弹出菜单
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  // 储值
  const [openRechargeDialog, setOpenRechargeDialog] = React.useState(false);

  const handleOpenRechargeDialog = () => {
    setOpenRechargeDialog(true);
  };
  const handleCloseRechargeDialog = () => {
    setOpenRechargeDialog(false);
  };

  // 个人使用
  const [userinfo, setUserinfo] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedUserinfo = localStorage.getItem('userinfo');
      return storedUserinfo ? JSON.parse(storedUserinfo) : null;
    }
    return null;
  });

  const tokenAuthorizeCallback = (message: any) => {
    if (Object.keys(message).length === 0) {
      setLoginDialogOpen(true);
      setUserinfo(null);
    }
  };

  useEffect(() => {
    if (userinfo === null) {
      setLoginDialogOpen(true);
    } else {
      if (ws && userinfo.token) {
        ws.tokenAuthorize({"token": userinfo.token});
      }
    }
  }, [userinfo, ws]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const websocket = WebSocketService.getInstance();
    websocket.register(api.common.Action.TOKEN_AUTHORIZE, tokenAuthorizeCallback);
    setWs(websocket);
  }, [ws]);

  const handleLoginDialogClose = () => {
    if (userinfo !== null) {
      setLoginDialogOpen(false);
    }
  };

  // 登陆/注册完成之后调用的函数
  const setUserinfoFromDialog = (username: string, avatar: string) => {
    setUserinfo({
      "username": username,
      "avatar": avatar
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('userinfo');
    setUserinfo(null);
    setAnchorEl(null);
  }

  return (
    <Box className={styles.userinfoContainer}>
      <Box className={styles.userinfoBorder}>

        <Box className={styles.userinfo}>
          {hasMounted && (userinfo ? (
            <>
              <Avatar alt={userinfo.username}>
                {userinfo.avatar ?
                  <Image src={userinfo.avatar} alt={userinfo.username} />
                  :
                userinfo.username.charAt(0)}
              </Avatar>
              <Typography variant="h6" className={styles.userinfoUsername}>
                {userinfo.username}
              </Typography>
            </>
          ) : (
            <LoginDialog open={loginDialogOpen} onClose={handleLoginDialogClose} setUserinfo={setUserinfoFromDialog} />
          ))}
        </Box>

        <Box className={styles.userinfoMenu}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={openMenu}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <MenuItem onClick={handleOpenRechargeDialog}>
              <ListItemIcon>
                <PaymentIcon fontSize="small" />
              </ListItemIcon>
                 升级会员
            </MenuItem>
            <RechargeDialog open={openRechargeDialog} onClose={handleCloseRechargeDialog} />
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              系统设置
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlinedIcon fontSize="small" />
              </ListItemIcon>
              退出
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default UserinfoPanel;
