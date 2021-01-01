import React, {useState, useEffect} from 'react';
import './Picker.scss';
import Odometer from "./Odometer";

//https://stackoverflow.com/a/2450976
const shuffle = arr => {
  let currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
};

const Picker = ({
  min, max, unique = true
}) => {

  const [disabled, setDisabled] = useState(false);
  const [counting, setCounting] = useState(false);
  const [number, setNumber] = useState(null);
  const [indices, setIndices] = useState([]);

  const reset = () => {
    setNumber(null);
    const indices = Array.from({length: max - min + 1},(v, k) => k + min);
    setIndices(shuffle(indices));
  }

  const getNumber = () => {
    if (unique) {
      return indices.pop();
    } else {
      let newNumber = number;
      // ensuring the number keep changing
      do {
        newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      } while(number === newNumber);
      return newNumber;
    }
  };

  const generate = () => {
    if (!disabled && !counting) {
      setCounting(true);
      const number = getNumber();
      setNumber(number);
    }
  };

  const handleReset = e => {
    e.stopPropagation();
    if (window.confirm('Reset unique numbers?')) {
      reset();
    }
  }

  useEffect(() => {
    setDisabled(indices.length === 0);
  }, [indices.length]);

  // reset whenever number changed.
  useEffect(() => {
    reset();
  }, [min, max, unique]);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.keyCode === 32) {
        generate();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    };
  }, [counting, min, max]);

  const handlePickOne = () => generate();

  const handleOdometerStopCounting = () => {
    setCounting(false);
  };

  const digits = Math.floor(Math.log10(max) + 1);

  return <div className={"Picker" + (disabled ? ' disabled' : '')}>
    <div onClick={handlePickOne}>
      <Odometer number={number} digits={digits} onStopCounting={handleOdometerStopCounting} />
    </div>
    <div className={"picker-footer"}>
      {indices.length > 0 && <div className={"left"}>{indices.length} {indices.length === 1 ? 'number' : 'numbers'} left</div>}
      {disabled && <div className={"disabled"}>
        Numbers exhausted
      </div>}
      {unique && <button className={"btn btn-text"} onClick={handleReset}>[Reset Unique]</button>}
      <div className={"range"}>{min} - {max}{unique && ' (Unique)'}</div>
    </div>
  </div>
}

export default Picker;