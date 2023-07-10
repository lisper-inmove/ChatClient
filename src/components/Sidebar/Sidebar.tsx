import Box from '@mui/material/Box';
import styles from '../../css/Sidebar.module.css';
import ChitchatPanel from './ChitchatPanel';
import UserinfoPanel from './UserinfoPanel';

const Sidebar: React.FC = () => {

  return (
    <Box className={styles.sidebar}>

      <ChitchatPanel />

      <UserinfoPanel />

    </Box>

  );
}

export default Sidebar;
