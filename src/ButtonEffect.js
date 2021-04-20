import React, { useState, useEffect } from 'react';

const ButtonEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  });

  return pug`
    div
      p You clicked #{count} times

      button(onClick=() => setCount(count + 1)) Click me
  `
}

export default ButtonEffect