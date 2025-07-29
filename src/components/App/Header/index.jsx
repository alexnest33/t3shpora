import { Switch } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        className="knopka"
        checked={theme === "dark"}
        onChange={switchTheme}
        size="default"
      />
    </>
  );
};

export default Header;
