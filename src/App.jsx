/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Button from "./components/Button/Button";
import { Banner } from "./components/Banner/index";
import Badge from "./components/Badge/Badge";

function App() {
  function test() {
    console.log("opened/closed");
  }

  return (
    <>
      <h1>Hello World</h1>
      <Banner variant="sucess">
        <Banner.Title>Congratulations!</Banner.Title>
        <Banner.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
      </Banner>
      <br/>
      <Badge color="green" type="square">Badge</Badge>
      <Badge color="blue" type="pill">Badge</Badge>
      <Badge color="indigo" type="square">Badge</Badge>
      <Badge color="red" type="square">Badge</Badge>
    </>
  );
}

export default App;
