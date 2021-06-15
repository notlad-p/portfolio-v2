import { ThemeProvider } from "styled-components";

const themeData = {
  colors: {
    primary: "#3395D6",
    textPrimary: "#E9E9E9",
    textSecondary: "#A6A6A6",
    borders: "#373737",
    background: "#212121",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={themeData}>{children}</ThemeProvider>;
};

export default Theme;
