import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import logo from "../../Assets/images/logo.png";
import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
       <img src={logo} alt="" height="70" />
        <Navbar />
      </header>
    </>
  );
};
