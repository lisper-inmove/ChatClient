import React, { useState } from 'react';
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
import { ChatListTheme, CreateContainerTheme } from '../../themes/ChitchatTheme';
import { ColorConstants } from '../../themes/WebsiteTheme';
import { styled } from '@mui/system';


// styles ------------------------------------------------------------
const ChatContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '8.5',
  flexDirection: 'column',
  height: '80vh',
}));

const CreateChat = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  flex: '0.4',
  display: 'flex',
  justifyContent: 'center',
}));

const CreateChatBorder = styled(Box)(({ theme }) => ({
  width: '95%',
  flex: '1',
  display: 'flex',
  justifyContent: 'space-around',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ChatList = styled(Box)(({ theme }) => ({
  flex: '7',
  overflowY: 'scroll'
}));

const ChatListItem = styled(Box)(({ theme }) => ({
  padding: '4px',
  margin: '4px 3px 0',
  backgroundColor: ColorConstants.sidebarBgColor,
  transaction: 'background-color 0.3s ease',
  display: 'flex',
  gap: '3px',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: ColorConstants.chatListItemHoverColor,
  }
}));

const ChatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
}));

const ChatName = styled('p')(({ theme }) => ({
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

enum ChatType {
  ROLE = 'Role',
  CHAT = 'Chat',
}

interface ChatCategory {
  id: number;
  name: string;
  type: ChatType;
}

const ChatPanel = () => {
  const [chatList, setChatList] = useState<ChatCategory[]>([]);
  const [hoveredItemId, setHoveredItemId] = React.useState(-1);
  const [editItemId, setEditItemId] = React.useState(-1);
  const [editedChatName, setEditedChatName] = React.useState('');

  // TODO: for test. 应该由服务端生成ID
  const generateId = () => {
    return chatList.length > 0 ? Math.max(...chatList.map(c => c.id)) + 1 : 1;
  };

  const handleCreateButtonClick = (type: ChatType) => {
    const newChatCategory: ChatCategory = {
      id: generateId(),
      name: type === ChatType.ROLE ? 'New Role >>>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>>>.' : 'New Chat',
      type: type,
    };
    setChatList((prevChatList) => [newChatCategory, ...prevChatList]);
  };

  const handleShareChat = (id: number) => {}
  const handleDeleteChat = (id: number) => {}

  const handleStartEditing = (id: number, name: string) => {
    setEditItemId(id);
    setEditedChatName(name);
    console.log(id, name);
  };
  
  const handleCancelEditing = () => {
    setEditItemId(-1);
    setEditedChatName('');
  };
  
  const handleApplyChanges = (chat: ChatCategory) => {
    setEditItemId(-1);
    setEditedChatName('');
    chat.name = editedChatName;
  };

  return (
    <ChatContainer>
      <ThemeProvider theme={CreateContainerTheme}>
        <CreateChat>
          <CreateChatBorder>
            <Button
              variant="contained"
              onClick={() => handleCreateButtonClick(ChatType.ROLE)}
            >
              新建角色
            </Button>
            <Button
              variant="contained"
              onClick={() => handleCreateButtonClick(ChatType.CHAT)}
            >
              新建聊天
            </Button>
          </CreateChatBorder>
        </CreateChat>
      </ThemeProvider>

      <ThemeProvider theme={ChatListTheme}>
        <ChatList>
          {chatList.map((chat) => (
            <ChatListItem
              key={chat.id}
              onMouseEnter={() => setHoveredItemId(chat.id)}
              onMouseLeave={() => setHoveredItemId(-1)}
            >
              <ChatItem>
                {chat.type === ChatType.ROLE ? <RoleIcon /> : <ChatIcon />}
                  {editItemId === chat.id ? (
                  <TextField
                    value={editedChatName}
                    onChange={(e) => setEditedChatName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleApplyChanges(chat);
                      }
                    }}
                    onBlur={handleCancelEditing}
                    autoFocus
                    size="small"
                  />
                  ) : (
                    <Tooltip title={chat.name}>
                      <ChatName>
                        {chat.name}
                      </ChatName>
                    </Tooltip>
                  )}
              </ChatItem>

              <ItemOperations>
                {hoveredItemId === chat.id && (
                <>
                  <IconButton
                    onClick={() => handleStartEditing(chat.id, chat.name)}
                    color="primary"
                    aria-label="update"
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleShareChat(chat.id)} color="secondary" aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteChat(chat.id)} color="error" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  </>
                )}
              </ItemOperations>
            </ChatListItem>
          ))}
        </ChatList>
      </ThemeProvider>
    </ChatContainer>
  );
}

export default ChatPanel;
