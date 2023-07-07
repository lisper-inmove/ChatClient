import { createTheme } from '@mui/material/styles';
import { WebsiteTheme } from './WebsiteTheme';

export const ContentTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
  }
});

export const ChatTextFieldTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
  }
});
