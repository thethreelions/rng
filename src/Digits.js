import React from 'react';
import './Digits.scss';

const Digits = ({n}) => {
  return <div className={"Digits"}>
    <div className={"digit"}>{n}</div>
  </div>
};

export default Digits;