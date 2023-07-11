import React, { useState, useEffect, useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WebSocketService from '../../websocket/Websocket';
import { api } from '../../proto/api/api';


const CreateRoleDialog: React.FC<{
  open: boolean,
  onClose: () => void,
  onConfirm: (name: string, description: string) => void,
}> = ({ open, onClose, onConfirm }) => {
  const DESCRIPTION_MAX_LENGTH = 300;
  const [remainingChars, setRemainingChars] = useState(DESCRIPTION_MAX_LENGTH);
  const [roleName, setRoleName] = useState('');
  const [roleNameError, setRoleNameError] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [roleDescriptionError, setRoleDescriptionError] = useState('');
  const [ws, setWs] = useState<WebSocketService | null>(null);

  const createChitchatCallback = useCallback((message: any) => {

  }, []);

  useEffect(() => {
    const websocket = WebSocketService.getInstance();
    websocket.register(websocket.CREATE_CHITCHAT, createChitchatCallback);
    setWs(websocket);
  }, [createChitchatCallback]);

  const onCreateRoleConfirm = () => {
    if (roleName.length < 3 || roleName.length > 20) {
      setRoleNameError("角色名称必须在3~20个字符之间");
      return;
    }
    if (roleDescription.length < 20) {
      setRoleDescriptionError("角色描述必须大于20个字符");
      return;
    }
    if (!ws) {
      return;
    }
    ws.createChitchat({
      name: roleName,
      description: roleDescription,
      type: 'ROLE'
    });
    onConfirm(roleName, roleDescription);
  }

  const onCreateRoleCancel = () => {
    setRoleName('');
    setRoleNameError('');
    setRoleDescription('');
    setRoleDescriptionError('');
    onClose();
  }

  const onDescriptionChange = (event: any) => {
    console.log(event);
    setRemainingChars(DESCRIPTION_MAX_LENGTH - event.target.value.length);
    setRoleDescription(event.target.value);
    setRoleDescriptionError('');
  }

  const onNameChange = (event: any) => {
    setRoleName(event.target.value);
    setRoleNameError('');
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="createrole-dialog-title"
      aria-describedby="createrole-dialog-description"
    >
      <DialogTitle id="createrole-dialog-title">创建角色</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          autoComplete="off"
          margin="dense"
          id="name"
          label="角色名"
          type="text"
          onChange={onNameChange}
          value={roleName}
          error={!!roleNameError}
          helperText={roleNameError}
          fullWidth
        />
        <TextField
          margin="dense"
          autoComplete="off"
          id="description"
          label="角色说明"
          type="text"
          fullWidth
          value={roleDescription}
          inputProps={{ maxLength: DESCRIPTION_MAX_LENGTH }}
          onChange={onDescriptionChange}
          error={!!roleDescriptionError}
          helperText={roleDescriptionError}
          multiline
        />
        <Box textAlign="right">
          <Typography component="span">
            还可输入
          </Typography>
          <Typography sx={{ color: 'red' }} component="span">
              {remainingChars}
          </Typography>
          <Typography component="span">
            个字符
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCreateRoleCancel}>取消</Button>
        <Button onClick={onCreateRoleConfirm}>确认</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateRoleDialog;
