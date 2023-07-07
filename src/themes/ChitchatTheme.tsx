import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { WebsiteTheme, ColorConstants } from './WebsiteTheme';

export const ChitchatTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
  }
});

export const ChitchatTextFieldTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
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

export const CreateContainerTheme = createTheme({
  palette: {
    mode: WebsiteTheme.palette.mode,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: ColorConstants.buttonHoverColor
          },
          height: '30px',
          color: ColorConstants.buttonTextColor,
        }
      }
    }
  }
});
