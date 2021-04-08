import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Draggable from "./Hello";

const Comp = () => (
  <Draggable>
    <div style={{ height: "100px", width: "100px", background: "yellow" }}>
      Heloo
    </div>
  </Draggable>
);

render(<Comp />, document.getElementById("root"));
