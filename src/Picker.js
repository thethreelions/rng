import React, {useState, useEffect} from 'react';
import './Picker.scss';
import Odometer from "./Odometer";

const Picker = ({
  min, max
}) => {

  const [counting, setCounting] = useState(false);

  const generate = () => {
    let newNumber = number;
    // ensuring the number keep changing
    do {
      newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while(number === newNumber);
    return newNumber;
  };

  const [number, setNumber] = useState(0);

  // reset whenever number changed.
  useEffect(() => {
    setNumber(0);
  }, [min, max]);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.keyCode === 32) {
        if (!counting) {
          setCounting(true);
          setNumber(generate);
        }
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    };
  }, [counting, min, max]);

  const handlePickOne = () => {
    if (!counting) {
      setCounting(true);
      setNumber(generate());
    }
  };

  const handleOdometerStopCounting = () => {
    setCounting(false);
  };

  const digits = Math.floor(Math.log10(max) + 1);

  return <div className={"Picker"} onClick={handlePickOne}>
    <Odometer number={number} digits={digits} onStopCounting={handleOdometerStopCounting} />
    <div className={"range"}>[{min}, {max}]</div>
  </div>
}

export default Picker;