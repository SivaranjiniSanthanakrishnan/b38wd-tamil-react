import React, { useState, useEffect } from "react";
import CounterComponent from "./Counter";

function Foo(props) {
  const [initialValue, setInitialValues] = useState(5);
  const [counter, setCounter] = useState(true);

  useEffect(() => {
    console.log("Mounting Phase for Functional Component");
  }, []);

  useEffect(() => {
    console.log("Updating phase of  Functional Component");
  }, [initialValue, counter]);

  const handleIncrement = () => {
    setInitialValues(initialValue + 1);
  };
  const handleDecrement = () => {
    setInitialValues(initialValue - 1);
  };
  return (
    <h3>
      This is {props.componentName}
      <br /> <br />
      Initial Value: {initialValue} <br /> <br />
      <button onClick={() => handleIncrement()}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decrement</button> &nbsp;
      <button onClick={() => setInitialValues(5)}>Reset</button> &nbsp; <br />{" "}
      <br />
      <button onClick={() => setCounter(!counter)}>
        Mount/Unmount Class Component
      </button>
      {counter ? <CounterComponent componentName="Class Component" /> : <></>}
    </h3>
  );
}

export default Foo;
