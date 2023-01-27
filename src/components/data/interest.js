import React from "react";
import KitchenIcon from '@mui/icons-material/Kitchen';
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import art from "../images/interests/art.jpg";
import { BsFillPencilFill } from "react-icons/bs";
import travel from "../images/interests/travel.jpg";
import food from "../images/interests/food.jpg";

const interest = [
  {
    src: art,
    alt: "First slide",
    icon: <BsFillPencilFill fontSize="large" />,
    title: "Painting",
    detail:
      "Creating an imaginary world with my art skill"
  },
  {
    src:food,
    alt: "Second slide",
    icon: <KitchenIcon fontSize="large" />,
    title: "Cooking",
    detail:
      "I love to cook in my free time"
  },
  {
    src:travel,
    alt: "Third slide",
    icon: <FilterHdrIcon fontSize="large" />,
    title: "Travelling",
    detail: "Enjoy nature life"
  },
  
  
];

export default interest;
