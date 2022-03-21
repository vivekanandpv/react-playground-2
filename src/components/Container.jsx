import React, { useState } from 'react';

const Container = (props) => {
  const [counter, setCounter] = useState(0);

  const handler = () => {
    console.log('before', counter);

    setCounter((current) => {
      return current + 1;
    });

    console.log('after', counter);
  };

  return (
    <>
      <h3>Container Component: {counter}</h3>
      <button onClick={handler}>Increment</button>
    </>
  );
};

export default Container;
