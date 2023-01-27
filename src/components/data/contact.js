import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { BsGithub } from "react-icons/bs";

const contact = [
  {
    url: "https://github.com/vasukiraj01",
    icon: <BsGithub fontSize="large" />
  },
  {
    url: "https://www.instagram.com/__.artistiq/",
    icon: <InstagramIcon fontSize="large" />
  },
  {
    url: "https://www.linkedin.com/in/vasuki-rajendran-b64b6616b/",
    icon: <LinkedInIcon fontSize="large" />
  },
  {
    url: "mailto:vasukiraj01@gmail.com",
    icon: <EmailIcon fontSize="large" />
  }
];

export default contact;
