import React, { useState, useEffect, useCallback } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField  from '@mui/material/TextField';
import RoleIcon from '../../icons/RoleIcon';
import ChatIcon from '../../icons/ChatIcon';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '../../icons/EditIcon';
import ShareIcon from '../../icons/ShareIcon';
import DeleteIcon from '../../icons/DeleteIcon';

import { ThemeProvider } from '@mui/material/styles';
import { ChitchatListTheme, CreateContainerTheme } from '../../themes/ChitchatTheme';
import { ColorConstants } from '../../themes/WebsiteTheme';
import CreateRoleDialog from './CreateRoleDialog';
import WebSocketService from '../../websocket/Websocket';
import { styled } from '@mui/system';
import { api } from '../../proto/api/api';
import { entity } from '../../proto/entities/entities';
import { useCurrentChitchat } from '../../contexts/CurrentChitchatContext';


// styles ------------------------------------------------------------
const ChitchatContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '8.5',
  flexDirection: 'column',
  height: '80vh',
}));

const CreateChitchat = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  flex: '0.4',
  display: 'flex',
  justifyContent: 'center',
}));

const CreateChitchatBorder = styled(Box)(({ theme }) => ({
  width: '95%',
  flex: '1',
  display: 'flex',
  justifyContent: 'space-around',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ChitchatList = styled(Box)(({ theme }) => ({
  flex: '7',
  overflowY: 'scroll'
}));

const ChitchatListItem = styled(Box)(({ theme }) => ({
  padding: '4px',
  margin: '4px 3px 0',
  backgroundColor: ColorConstants.sidebarBgColor,
  transaction: 'background-color 0.3s ease',
  display: 'flex',
  gap: '3px',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: ColorConstants.chitchatListItemHoverColor,
  }
}));

const ChitchatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
}));

const ChitchatName = styled('p')(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '150px',
  color: ColorConstants.commonFontColor,
}));

const ItemOperations = styled('p')(({ theme }) => ({
  display: 'flex'
}));

// styles end---------------------------------------------------------

interface Chitchat {
  id: string;
  name: string;
  type: string;
  description: string;
}

const ChitchatPanel = () => {
  const [chitchatList, setChitchatList] = useState<Chitchat[]>([]);
  const [hoveredItemId, setHoveredItemId] = React.useState('');
  const [editItemId, setEditItemId] = React.useState('');
  const [editedChitchatName, setEditedChitchatName] = React.useState('');
  const [createRoleDialogOpen, setCreateRoleDialogOpen] = useState(false);
  const [ws, setWs] = useState<WebSocketService | null>(null);
  const [currentChitchat, setCurrentChitchat] = useCurrentChitchat();

  const chitchatListCallback = useCallback((message: any) => {
    const newChitchat: Chitchat = {
      id: message.id,
      name: message.name,
      type: message.type,
      description: message.description,
    };
    setChitchatList((prevChitchatList) => [newChitchat, ...prevChitchatList]);
  }, []);

  const deleteChitchatCallback = useCallback((message: any) => {
    setChitchatList((prevChitchatList) => prevChitchatList.filter(item => item.id !== message.id));
  }, []);

  useEffect(() => {
    const websocket = WebSocketService.getInstance();
    websocket.register(api.common.Action.LIST_CHITCHAT, chitchatListCallback);
    websocket.register(api.common.Action.DELETE_CHITCHAT, deleteChitchatCallback);
    setWs(websocket);
  }, [chitchatListCallback, deleteChitchatCallback]);

  const handleCreateButtonClick = (type: string) => {
    if (type == "CHAT") {
      if (ws) {
        ws.createChitchat({
          name: "New Chat",
          description: '',
          type: 'CHAT'
        });
      }
    } else {
      setCreateRoleDialogOpen(true);
    }
  };

  const handleCreateChitchat = (chitchat: Chitchat) => {
    const newChitchat: Chitchat = {
      id: chitchat.id,
      name: chitchat.name,
      type: chitchat.type,
      description: chitchat.description,
    };
    setChitchatList((prevChitchatList) => [newChitchat, ...prevChitchatList]);
  }

  const createRole = (message: any) => {
    chitchatListCallback(message);
    setCurrentChitchat({
      id: message.id,
      name: message.name,
      description: message.description,
      type: message.type,
    });
  }

  const handleShareChitchat = (id: string) => {}
  const handleDeleteChitchat = (id: string) => {
    if (!ws) {
      return;
    }
    ws.deleteChitchat({
      id: id
    });
  }

  const handleStartEditing = (id: string, name: string) => {
    setEditItemId(id);
    setEditedChitchatName(name);
  };

  const handleCancelEditing = () => {
    setEditItemId('');
    setEditedChitchatName('');
  };

  const handleApplyChanges = (chitchat: Chitchat) => {
    setEditItemId('');
    setEditedChitchatName('');
    chitchat.name = editedChitchatName;
  };

  const loadMessages = (chitchat: Chitchat) => {
    setCurrentChitchat({
      id: chitchat.id,
      name: chitchat.name,
      description: chitchat.description,
      type: chitchat.type
    });
  }

  return (
    <ChitchatContainer>
      <ThemeProvider theme={CreateContainerTheme}>
        <CreateChitchat>
          <CreateChitchatBorder>
            <Button
              variant="contained"
              onClick={() => handleCreateButtonClick("ROLE")}
            >
              新建角色
            </Button>
            <CreateRoleDialog
              onClose={() => setCreateRoleDialogOpen(false)}
              onConfirm={(message: any) => createRole(message)}
              open={createRoleDialogOpen}
            />
            <Button
              variant="contained"
              onClick={() => handleCreateButtonClick("CHAT")}
            >
              新建聊天
            </Button>
          </CreateChitchatBorder>
        </CreateChitchat>
      </ThemeProvider>

      <ThemeProvider theme={ChitchatListTheme}>
        <ChitchatList>
          {chitchatList.map((chitchat) => (
            <ChitchatListItem
              key={chitchat.id}
              onMouseEnter={() => setHoveredItemId(chitchat.id)}
              onMouseLeave={() => setHoveredItemId('')}
            >
              <ChitchatItem
                onClick={() => loadMessages(chitchat)}
              >
                {chitchat.type === "ROLE" ? <RoleIcon /> : <ChatIcon />}
                  {editItemId === chitchat.id ? (
                  <TextField
                    value={editedChitchatName}
                    onChange={(e) => setEditedChitchatName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleApplyChanges(chitchat);
                      }
                    }}
                    onBlur={handleCancelEditing}
                    autoFocus
                    size="small"
                  />
                  ) : (
                    <Tooltip title={chitchat.name}>
                      <ChitchatName>
                        {chitchat.name}
                      </ChitchatName>
                    </Tooltip>
                  )}
              </ChitchatItem>

              <ItemOperations>
                {hoveredItemId === chitchat.id && (
                <>
                  <IconButton
                    onClick={() => handleStartEditing(chitchat.id, chitchat.name)}
                    color="primary"
                    aria-label="update"
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleShareChitchat(chitchat.id)} color="secondary" aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteChitchat(chitchat.id)} color="error" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  </>
                )}
              </ItemOperations>
            </ChitchatListItem>
          ))}
        </ChitchatList>
      </ThemeProvider>
    </ChitchatContainer>
  );
}

export default ChitchatPanel;
