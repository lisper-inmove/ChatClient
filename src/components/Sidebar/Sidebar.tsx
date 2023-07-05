import Box from '@mui/material/Box';
import styles from '../../css/Sidebar.module.css';
import ChatPanel from './ChatPanel';
import UserinfoPanel from './UserinfoPanel';

const Sidebar: React.FC = () => {

  return (
    <Box className={styles.sidebar}>

      <ChatPanel />

      <UserinfoPanel />

    </Box>

  );
}

export default Sidebar;

