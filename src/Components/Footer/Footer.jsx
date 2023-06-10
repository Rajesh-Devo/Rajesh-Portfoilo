import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";
import PhoneIcon from "@material-ui/icons/Phone";


export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/Rajesh-Devo"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="footer">Eat . Sleep . Code . Repeat </h3>
        </a>
      </div>
    </>
  );
};
