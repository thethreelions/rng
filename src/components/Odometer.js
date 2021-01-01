import React, {useState, useEffect} from 'react';
import './Odometer.scss';
import Digits from "./Digits";

const Odometer = ({number, digits = 2, transformSpeed = 600, onStopCounting}) => {

  const [currentNumber, setCurrentNumber] = useState(number);
  const [speed, setSpeed] = useState(transformSpeed);
  const [step, setStep] = useState(1);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    let a = null;
    if (number !== null && number !== currentNumber) {
      const distance = Math.abs(currentNumber - number);
      setStep(Math.floor(Math.max(1, distance / 40)));
      a = setTimeout(() => {
        setCurrentNumber(currentNumber + (currentNumber > number ? -step : step));
      }, speed);
    } else {
      onStopCounting();
    }
    setCounting(number !== null && number !== currentNumber);
    return () => {
      clearInterval(a);
    };
  }, [step, number, currentNumber, speed, onStopCounting]);

  useEffect(() => {
    if (number !== null) {
      if (currentNumber !== number) {
        // Whenever the number changes, we set the counting interval
        setSpeed(transformSpeed / Math.abs(currentNumber - number));
      }
    } else {
      setCurrentNumber(0);
    }
  }, [number]);

  // split the digits
  const numbers = ("" + currentNumber).padStart(digits, '0').split('');

  return <div className={"Odometer" + (counting ? ' counting' : '')}>
    {number === null ? <Digits n={"-"} /> : numbers.map((n, i) => <Digits key={i} n={n * 1} />)}
  </div>;
};

export default Odometer;