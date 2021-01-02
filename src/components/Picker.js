import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import './Picker.scss';
import RandomNumberDisplay from "./RandomNumberDisplay";

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

const lastNumberRaw = window.localStorage.getItem('rng-lastNumber');
const lastNumber = lastNumberRaw !== null ? parseInt(lastNumberRaw, 10) : null;

const Picker = forwardRef(({min, max, unique = true}, ref) => {

  const [disabled, setDisabled] = useState(false);
  const [number, setNumber] = useState(lastNumber);
  const [indices, setIndices] = useState([]);
  const [run, setRun] = useState(false);

  useImperativeHandle(ref, () => ({
    reset() {
      reset();
    }
  }));

  const reset = () => {
    setNumber(null);
    const indices = Array.from({length: max - min + 1},(v, k) => k + min);
    setIndices(shuffle(indices));
    window.localStorage.removeItem('rng-lastNumber');
  };

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
    if (!disabled) {
      const number = getNumber();
      setNumber(number);
      window.localStorage.setItem('rng-lastNumber', number);
    }
  };

  const handleReset = e => {
    if (e) e.stopPropagation();
    if (window.confirm('Reset unique numbers?')) {
      reset();
    }
  }

  useEffect(() => {
    const localIndices = window.localStorage.getItem('rng-indices');
    if (/[^\d,]/.test(localIndices) || localIndices === '') {
      reset();
    } else {
      const reload = localIndices.split(',').map(i => parseInt(i, 10));
      setIndices(reload);
    }
  }, []);

  useEffect(() => {
    setDisabled(indices.length === 0);
    window.localStorage.setItem('rng-indices', indices.join(','));
  }, [indices, indices.length]);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.keyCode === 32) {
        handleStartSelecting();
      }
      if (e.key === 'x' || e.key === 'X') {
        handleReset();
      }
    };
    const handleKeyup = e => {
      if (e.keyCode === 32) handleStopSelecting();
    };
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);
    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('keyup', handleKeyup)
    };
  }, [generate, run]);

  const handleStartSelecting = e => {
    if (!run && !disabled) {
      setRun(true);
    }
  };
  const handleStopSelecting = () => {
    generate();
    setRun(false);
  };

  return <div className={"Picker" + (disabled ? ' disabled' : '')}>
    <div onMouseDown={handleStartSelecting} onMouseUp={handleStopSelecting}>
      <RandomNumberDisplay
        min={min}
        max={max}
        run={run}
        number={number} />
    </div>
    <div className={"picker-footer"}>
      {indices.length > 0 && unique && <div className={"left"}>{indices.length} {indices.length === 1 ? 'number' : 'numbers'} left</div>}
      {disabled && <div className={"disabled"}>
        Numbers exhausted
      </div>}
      {unique && <button className={"btn btn-text"} onMouseUp={handleReset}>[Reset Unique]</button>}
      <div className={"range"}>{min} - {max}{unique && ' (Unique)'}</div>
    </div>
  </div>
});

export default Picker;