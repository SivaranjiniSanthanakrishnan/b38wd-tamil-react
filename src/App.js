import React from "react";
import CounterComponent from "./Counter";

function Foo(props) {
  return (
    <h3>
      This is {props.componentName} Foo, and the type is {props.componentType}
      <CounterComponent componentName="Class Component" />
    </h3>
  );
}

export default Foo;
