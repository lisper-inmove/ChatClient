import '../css/globals.css';
import Box from '@mui/material/Box';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import { WebsiteTheme, ColorConstants } from '../themes/WebsiteTheme';
import { SidebarTheme } from '../themes/SidebarTheme';
import { ContentTheme } from '../themes/ContentTheme';
import { styled } from '@mui/system';
import { ContextCompose } from '../contexts/ContextCompose';
import { CurrentChitchatProvider } from '../contexts/CurrentChitchatContext';
import { UserinfoProvider } from '../contexts/UserinfoContext';

const Home: React.FC = () => {

  const StyledMain = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
  }));

  const StyledSidebar = styled(Box)(({theme}) => ({
    width: '15%',
    height: '100%',
    backgroundColor: ColorConstants.sidebarBgColor,
  }));

  const StyledContent = styled(Box)(({theme}) => ({
    width: '85%',
    height: '100%',
    backgroundColor: ColorConstants.contentBgColor,
  }));

  return (
    <ContextCompose>

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

    </ContextCompose>
  );
}

export default Home;
