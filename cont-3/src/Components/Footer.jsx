import React from "react";
import { themeOptions } from "../Utilities/ThemeJSON";
import Select from "react-select";
import { useTheme } from "../Context/ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
// https://react-select.com/home  //https://react-select.com/styles

const Footer = () => {
  const { setTheme, theme } = useTheme();

  const handleChange = (e) => {
    console.log(e);
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };
  return (
    <div className="footer">
      <div className="links">
        <a
          href="https://github.com/JadhavPrasad21"
          style={{ color: "#0062FF" }}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/prasad-j26/"
          style={{ color: "#0062FF" }}
        >
          <LinkedInIcon />
        </a>
        <a href="mailto:prasadj9316@gmail.com" style={{ color: "#0062FF" }}>
          <AttachEmailIcon />
        </a>
        <a
          href="https://www.instagram.com/_prasad_a_jadhav_/"
          style={{ color: "#0062FF" }}
        >
          <InstagramIcon />
        </a>
      </div>
      <div
        className="themeButton"
        style={{ fontFamily: "poppins", fontWeight: "bold" }}
      >
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{ label: theme.label, value: theme }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "white",
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: theme.background,
              borderColor: theme.textColor,
            }),
            option: (baseStyles, state) => {
              return {
                ...baseStyles,
                backgroundColor: state.isFocused
                  ? theme.background
                  : theme.textColor,
                color: state.isFocused ? theme.textColor : theme.background,
                cursor: "pointer",
              };
            },
          }}
        />
      </div>
    </div>
  );
};

export default Footer;