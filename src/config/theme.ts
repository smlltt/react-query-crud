export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: "#5C24B7",
    secondary: "#63BAAA",
    tertiary: "#FCEAFF",
    quaternary: "#8972A3",
    black: "#111111",
    white: "#FCEAFF",
    error: "#FF0000",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {
    primaryButton: {
      display: "inline-block",
      p: 2,
      color: "white",
      bg: "primary",
      borderRadius: 6,
      ":hover": {
        cursor: "pointer",
      },
    },
    title: {
      fontSize: [18, 20, 24],
      fontWeight: "heading",
    },
    formError: {
      color: "error",
      fontSize: 12,
    },
  },
  text: {
    color: {
      dark: "black",
      light: "white",
    },
  },
  input: {
    borderRadius: 6,
    borderColor: "primary",
    ":focus": {
      outline: "none",
      borderWidth: 2,
      borderColor: "secondary",
    },
  },
};
