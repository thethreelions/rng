import React, {useState, useEffect} from 'react';
import Digits from "./Digits";
import './RandomNumberDisplay.scss';

const RandomNumberDisplay = ({min, max, number, run}) => {

  const digits = Math.floor(Math.log10(max) + 1);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    let a;
    if (run) {
      const runRandomNumber = () => {
        const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
        setNumbers(("" + rnd).padStart(digits, '0').split(''));
      };
      runRandomNumber();
      a = setInterval(runRandomNumber, 40);
    } else {
      if (number) {
        setNumbers(("" + number).padStart(digits, '0').split(''));
      }
    }
    return () => {
      clearInterval(a);
    };
  }, [run, number]);

  useEffect(() => {
    if (number === null) {
      setNumbers([]);
    }
  }, [number]);

  return <div className={"RandomNumberDisplay"}>
    {numbers.length === 0 ? <Digits n={"-"} /> : numbers.map((n, i) => <Digits key={i} n={n * 1} />)}
  </div>
};

export default RandomNumberDisplay;