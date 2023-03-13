import { createTheme, PaletteColor, PaletteColorOptions, ThemeOptions } from '@mui/material/styles';

const colors = {
  primary: {
    main: '#1877f2',
  },
  secondary: {
    main: '#42b72a',
  },
  tertiary: {
    main: '#FF9500',
  },
  grey: {
    100: '#FCFCFD',
    500: '#f0f2f5',
    700: '#0000003B',
    800: '#737373',
  },
  error: {
    main: '#E23229',
  },
  text: {
    main: '#000000',
  },
};
export let theme = createTheme();

const themeOptions: ThemeOptions = {
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,
    grey: colors.grey,
    success: { main: '#34C759' },
    error: colors.error,
    warning: { main: '#FFCC00', dark: '#F7BA1E' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 980,
      xl: 1536,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: { textTransform: 'none', fontSize: 16, fontWeight: 500, minWidth: 'unset' },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'noStyle' },
          style: {
            color: colors.text.main,
          },
        },
      ],
      styleOverrides: {
        root: {
          backgroundColor: colors.primary.main,
          color: '#ffffff',
          borderColor: colors.grey[100],
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          padding: '12px 16px',
          textTransform: 'none',
          minHeight: 'auto',
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
        },
        sizeLarge: {
          padding: '16px',
          fontSize: '18px',
          lineHeight: '24px',
        },
        sizeSmall: {
          padding: '10px 16px',
          fontSize: '14px',
          lineHeight: '20px',
        },
        contained: {
          color: '#FFFFFF',

          '&.Mui-disabled': {
            backgroundColor: colors.grey[500],
            color: '#FFFFFF',
          },
        },
        containedInherit: {
          backgroundColor: colors.grey[500],
          color: colors.primary.main,

          '&.Mui-disabled': {
            backgroundColor: colors.grey[500],
            color: colors.grey[500],
          },
        },
        containedSecondary: {
          backgroundColor: colors.secondary.main,
          color: '#fff',

          '&.Mui-disabled': {
            backgroundColor: colors.grey[500],
            color: '#FFFFFF',
          },
        },
        text: {
          color: '#000000',
          backgroundColor: '#ffffff',
          borderColor: '#ffffff',
          boxShadow: 'none',
          borderRadius: 8,
          '&.Mui-disabled': {
            color: colors.grey[500],
            borderColor: colors.grey[500],
          },
          '&:hover': {
            borderColor: '#ffffff',
          },
        },
        textError: {
          color: colors.error.main,
        },
        outlined: {
          color: '#000000',
          backgroundColor: '#ffffff',
          borderRadius: 8,
          boxShadow: 'none',
          '&.Mui-disabled': {
            color: colors.grey[500],
          },
          '&:hover': {
            borderColor: '#ffffff',
          },
        },
      },
    },
  },
  typography: {
    allVariants: {
      margin: 0,
    },
    h1: {
      fontSize: '66px',
      fontWeight: 600,
      lineHeight: '68px',
    },
    h2: {
      fontSize: '34px',
      fontWeight: 600,
      lineHeight: '48px',
    },
    title1: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '38px',
    },
    title2: {
      fontSize: '24px',
      lineHeight: '30px',
    },
    title3: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    title4: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    body: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    footnote: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    caption: {
      fontSize: '13px',
      lineHeight: '18px',
    },
    caption1: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    caption2: {
      fontSize: '11px',
      lineHeight: '15px',
    },
  },
};

theme = createTheme(themeOptions);

export type CustomizedTheme = typeof theme;

declare module '@mui/material/styles' {
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
  interface Palette {
    tertiary: PaletteColor;
  }
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    footnote: React.CSSProperties;
    body: React.CSSProperties;
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    title4: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    footnote: React.CSSProperties;
    body: React.CSSProperties;
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    title4: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    footnote: true;
    body: true;
    title1: true;
    title2: true;
    title3: true;
    title4: true;
  }
}

declare module '@mui/material' {
  interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    350: string;
    400: string;
    450: string;
    500: string;
    550: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    noStyle: true;
  }
}

declare module '@emotion/react' {
  export interface Theme extends CustomizedTheme {}
}
