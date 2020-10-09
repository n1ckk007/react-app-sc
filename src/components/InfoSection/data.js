import React from "react";

export const aboutObj = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Info",
  headline: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, iusto.",
  buttonLabel: "Get started",
  imgStart: false,
  img: require("../../images/off_road.svg"),
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const discoverObj = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Discover Info",
  headline: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dignissimos! Non dicta iure suscipit voluptatibus vero amet adipisci fuga perspiciatis.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: require("../../images/navigator.svg"),
  alt: "Navigator",
  dark: false,
  primary: false,
  darkText: true,
};

export const signUpObj = {
  id: "signUp",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Sign Up",
  headline: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, iusto.",
  buttonLabel: "Start now",
  imgStart: false,
  img: require("../../images/logistics.svg"),
  alt: "Logistics",
  dark: false,
  primary: false,
  darkText: true,
};

export const test = () => (
  <div>
    Lorem ipsum dolor sit amet.
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, iusto.
    </div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dignissimos!
    Non dicta iure suscipit voluptatibus vero amet adipisci fuga perspiciatis.
  </div>
);
