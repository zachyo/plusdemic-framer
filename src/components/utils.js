import { delay } from "framer-motion";
import icon1 from "../assets/icon/1.png";
import icon2 from "../assets/icon/2.png";
import icon3 from "../assets/icon/3.png";
import img1 from "../assets/uses/1.png";
import img2 from "../assets/uses/2.png";
import img3 from "../assets/uses/3.png";

export const navLinks = [
  { title: "Products", link: "" },
  { title: "Customer Services", link: "" },
  { title: "About", link: "" },
  { title: "Blogs", link: "" },
];

export const howithelps = [
  {
    delay : 0.2,
    icon: icon1,
    heading: "Symptoms",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veritatis quis est maiores corporis aliquid molestiae.",
  },
  {
    delay : 0.4,
    icon: icon2,
    heading: "Reccomendations",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veritatis quis est maiores corporis aliquid molestiae.",
  },
  {
    delay : 0.6,
    icon: icon3,
    heading: "Local information",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veritatis quis est maiores corporis aliquid molestiae.",
  },
];

export const uses = [
  {
    img: img1,
    heading: "Symptoms",
    delay : 0.4
  },
  {
    img: img2,
    heading: "Reccomendations",
    delay : 0.6
  },
  {
    img: img3,
    heading: "Local information",
    delay : 0.8
  },
];
