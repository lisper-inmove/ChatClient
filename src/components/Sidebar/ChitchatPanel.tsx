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

import { api } from '../../proto/api/api';

import { ThemeProvider } from '@mui/material/styles';
import { ChitchatListTheme, CreateContainerTheme } from '../../themes/ChitchatTheme';
import { ColorConstants } from '../../themes/WebsiteTheme';
import { styled } from '@mui/system';


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

enum ChitchatType {
  ROLE = 'Role',
  CHAT = 'Chat',
}

interface Chitchat {
  id: number;
  name: string;
  type: ChitchatType;
}

const ChitchatPanel = () => {
  const [chitchatList, setChitchatList] = useState<Chitchat[]>([]);
  const [hoveredItemId, setHoveredItemId] = React.useState(-1);
  const [editItemId, setEditItemId] = React.useState(-1);
  const [editedChitchatName, setEditedChitchatName] = React.useState('');

  // TODO: for test. 应该由服务端生成ID
  const generateId = () => {
    return chitchatList.length > 0 ? Math.max(...chitchatList.map(c => c.id)) + 1 : 1;
  };

  const handleCreateButtonClick = (type: ChitchatType) => {
    const newChitchat: Chitchat = {
      id: generateId(),
      name: type === ChitchatType.ROLE ? 'New Role >>>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>>>.' : 'New Chitchat',
      type: type,
    };
    setChitchatList((prevChitchatList) => [newChitchat, ...prevChitchatList]);
  };

  const handleShareChitchat = (id: number) => {}
  const handleDeleteChitchat = (id: number) => {}

  const handleStartEditing = (id: number, name: string) => {
    setEditItemId(id);
    setEditedChitchatName(name);
    console.log(id, name);
  };

  const handleCancelEditing = () => {
    setEditItemId(-1);
    setEditedChitchatName('');
  };

  const handleApplyChanges = (chitchat: Chitchat) => {
    setEditItemId(-1);
    setEditedChitchatName('');
    chitchat.name = editedChitchatName;
  };

  return (
    <ChitchatContainer>
      <ThemeProvider theme={CreateContainerTheme}>
        <CreateChitchat>
          <CreateChitchatBorder>
            <Button
              variant="contained"
              onClick={() => handleCreateButtonClick(ChitchatType.ROLE)}
            >
              新建角色
            </Button>
            <Button
              variant="contained"
              onClick={() => handleCreateButtonClick(ChitchatType.CHAT)}
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
              onMouseLeave={() => setHoveredItemId(-1)}
            >
              <ChitchatItem>
                {chitchat.type === ChitchatType.ROLE ? <RoleIcon /> : <ChatIcon />}
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
