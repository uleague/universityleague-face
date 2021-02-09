import { grommet, ThemeType } from "grommet/themes";
import { deepMerge } from "grommet/utils";

export const customTheme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#1E202B',
    },
    font: {
      family: 'M PLUS 1p',
      size: '18px',
      height: '20px',
    },
  },
  button: {
    minWidth: '236px',
    default: {
      color: 'text',
      border: undefined,
      padding: {
        horizontal: '12px',
        vertical: '8px',
      },
    },
    primary: {
      background: { color: '#EB5757' },
      boxShadow: '0px 8px 12px rgba(235, 87, 87, 0.3)',
      border: undefined,
      color: '#F4F4F4',
      font: { weight: 'bold' },
      padding: {
        vertical: '10px',
        horizontal: '10px'
      },
    },
  },
  anchor: {
    color: "#FFFFFF"
  }
});