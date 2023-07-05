import '../css/globals.css';
import Box from '@mui/material/Box';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import { WebsiteTheme, SidebarTheme, ContentTheme } from '../Themes';
import { styled } from '@mui/system';

const Home: React.FC = () => {

  const StyledMain = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
  }));

  const StyledSidebar = styled(Box)(({theme}) => ({
    width: '15%',
    height: '100%',
    backgroundColor: theme.customVariables.sidebarBgColor,
  }));

  const StyledContent = styled(Box)(({theme}) => ({
    width: '85%',
    height: '100%',
    backgroundColor: theme.customVariables.contentBgColor,
  }));

  return (
    <ThemeProvider theme={WebsiteTheme}>
      <Box className='Container'>

        <StyledMain>

          <ThemeProvider theme={SidebarTheme}>
            <StyledSidebar>
              <Sidebar />
            </StyledSidebar>
          </ThemeProvider>

          <ThemeProvider theme={ContentTheme}>

            <StyledContent>
              <Content />
            </StyledContent>
          </ThemeProvider>

        </StyledMain>

      </Box>
    </ThemeProvider>
  );
}

export default Home;
