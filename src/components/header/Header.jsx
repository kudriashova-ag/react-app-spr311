import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Auth from "../auth/Auth";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todos">Todo</NavLink>
        <NavLink to="/my">My</NavLink>
        <NavLink to="/counters">Counters</NavLink>
      </nav>
      <Space size="middle">
        <Button
          type="primary"
          shape="circle"
          onClick={toggleTheme}
          icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
        ></Button>
        <Auth />
     </Space>
    </header>
  );
};

export default Header;
