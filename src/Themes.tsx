import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const WebsiteTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  customVariables: {
    // 侧边栏背景色
    sidebarBgColor: '#353535',
    // 主体部分背景色
    contentBgColor: '#555555',
    // 按钮hover时的颜色
    buttonHoverColor: '#525252db',
    // 按钮上议定的颜色
    buttonTextColor: 'white',

    // 通用字体颜色
    commonTextColor: 'white',

    chatListItemHoverColor: '#595959',
  }
});

export const SidebarTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
  }
});

export const CreateContainerTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: WebsiteTheme.customVariables.buttonHoverColor
          },
          height: '30px',
          color: WebsiteTheme.customVariables.buttonTextColor,
        }
      }
    }
  }
});

export const ChatListTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#626466',
          '--TextField-brandBorderHoverColor': '#686466',
          '--TextField-brandBorderFocusedColor': '#646567',
          width: '150px',
          height: '15px',
          maxHeight: '20px',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        input: {
          padding: '0',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:before, &:after': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
  },
});

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
