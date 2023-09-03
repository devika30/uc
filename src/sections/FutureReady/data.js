import shopify from "../../images/shopify.svg";
import wordpress from "../../images/wordpress.png";
import webflow from "../../images/webflow.png";
import xano from "../../images/xano-nocode.png";
import nodejs from "../../images/nodejs.svg";
import hasura from "../../images/hasura.svg";
import laravel from "../../images/laravel.svg";
import react from "../../images/react.svg";
import angular from "../../images/angular.svg";

export const noCode = [
  {
    image: {
      url: xano,
      width: 168,
    },
    content:
      "Xano builder provides us with a scalable server, flexible database, and a no-code API that transforms, filters and integrates with data anywhere.",
  },
  {
    image: {
      url: webflow,
      width: 168,
    },
    content:
      "Webflow is a no-code web design tool with excellent support features that helps us design, build and launch websites at lightning-fast speed and uncompromised quality.",
  },
  {
    image: {
      url: wordpress,
      width: 210,
    },
    content:
      "WordPress is a go-to platform for designing simple, modern and flexible websites that make the development process a smooth and adaptable experience for us.",
  },
  {
    image: {
      url: shopify,
      width: 168,
    },
    content:
      "Shopify is an e-commerce platform used to create online e-shops with visually stunning designs. It is secure, reliable and easily customizable at the same time.",
  },
];

export const codePlatforms = [
  {
    title: "Front-end",
    content:
      "Dealing with parts of a user interface, the front-end development needs efficient systems to build them up slowly. What your users see, access and interact with is built by us keeping in mind a combination of resources.",
    children: [
      { image: nodejs, title: "Node Js" },
      { image: angular, title: "Angular" },
      { image: react, title: "React" },
    ],
  },
  {
    title: "Back-end",
    content:
      "Delving deep into the machinery of each click, the back-end systems make sure any website or software program accessed by your users works smoothly. Offering the latest software, we make sure to avoid all glitches.",
    children: [
      { image: laravel, title: "Laravel" },
      { image: nodejs, title: "Node JS" },
      { image: hasura, title: "Hasura" },
    ],
  },
];