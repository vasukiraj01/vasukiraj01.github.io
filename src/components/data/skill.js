import React from "react";
import {MdOutlineSettingsSuggest} from "react-icons/md";
import { BsTools } from "react-icons/bs";
import {
  SiSpring,
  SiJavascript,
  SiSmartthings,
} from "react-icons/si";
import MoreIcon from "@material-ui/icons/More";




const skill = [
  {
    name: "Spring",
    style: {
      background: "green",
      color: "white",
      width: "6rem",
      height: "6rem",
      margin: "10px auto",
      
    },
    icon: <SiSpring size={70} />,
    detail: [
      {

        title: "Spring MVC",
        src:""
      },
      {
        title: "Spring Boot"
      },
      {
        title: "Spring RestAPI"
      },
      {
        title:"Spring Security"
      }
  
    ]
  },
  {
    name: "Javascript",
    style: {
      background: "#000",
      color: "#f7eb00",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <SiJavascript size={70} />,
    detail: [
      {
        title: "ES6"
      },
      {
        title: "JQuery"
      },
      {
        title: "React"
      },
      {
        title: "Angular",
      }
    ]
  },
  {
    name: "Other Skills",
    style: {
      background: "#0d0d0d",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon :<MdOutlineSettingsSuggest size={70}/>,
    detail: [
      {
        title: "Docker"
      },
      {
        title: "Git"
      },
      {
        title: "Aamzon Web Services"
      },
    ]
  },
  
  {
    name: "Others Programming",
    style: {
      background: "#122",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <MoreIcon size={70} />,
    detail: [
      {
        title: "SQL (MySQL & MangoDB)"
      },
      {
        title: "Bootstrap"
      },
      {
        title: "HTML/CSS"
      },
    ]
  },
  {
    name: "Tools",
    style: {
      background: "#740be3",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <BsTools size={70} />,
    detail: [
      {
        title: "Eclipse"
      },
      {
        title: "Visual Studio Code"
      },
      {
        title: "Miscrosoft Office"
      },
      {
        title: "Eclipse EE"
      }
    ]
  },
  {
    name: "Soft Skills",
    style: {
      background: "#e60ba4",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <SiSmartthings size={70} />,
    detail: [
      {
        title: "Self-motivation"
      },
      {
        title: "Teamwork"
      },
      {
        title: "Responsibility"
      },
      {
        title: "Problem-solving"
      },
      {
        title: "Time management"
      },
    ]
  },

];

export default skill;
