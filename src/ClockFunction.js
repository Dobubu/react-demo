import React, { useState } from 'react'
import Display from './Display';
import Button from './Button';
import ButtonEffect from './ButtonEffect';

const ClockFunction = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  return pug`
    div
      Display(counter=counter)

      Button(
        handleClick=increaseByOne
        text="plus"
      )

      // button(onClick=increaseByOne) plus

      Button(
        handleClick=decreaseByOne
        text="minus"
      )

      // button(onClick=decreaseByOne) minus

      Button(
        handleClick=setToZero
        text="zero"
      )

      // button(onClick=setToZero) zero

      ButtonEffect
`
}

export default ClockFunction
