import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const WebsiteTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  colorVariables: {
    // 侧边栏背景色
    sidebarBgColor: '#353535',
    // 主体部分背景色
    contentBgColor: '#555555',
    // 按钮hover时的颜色
    buttonHoverColor: '#525252db',
    // 按钮上议定的颜色
    buttonTextColor: 'white',

    // 通用字体颜色
    commonFontColor: 'white',

    chatListItemHoverColor: '#595959',

    chitchatBgColor: '#555555',
    chitchatBgColorRgb: 'rgb(5, 5, 5, 0.01)',

    chitchatTextFieldBgColor: '#9c9c9c',
  }
});
