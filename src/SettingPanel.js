import React, {useState} from 'react';
import './SettingPanel.scss';

const SettingPanel = props => {

  const {onOK, onCancel} = props;

  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);

  const handleCancel = () => {
    onCancel();
  };

  const handleOK = () => {
    onOK(min * 1, max * 1);
  };

  const handleMinChange = e => {
    setMin(e.target.value.replace(/[^\d]/g, '') * 1);
  };

  const handleMaxChange = e => {
    setMax(e.target.value.replace(/[^\d]/g, '') * 1);
  };

  // min/max must not be same
  const valid = min >= 0 && min < max;

  return <div className={"SettingPanel"}>
    <div className={"overlay"}>
      <div className={"box"}>
        <div className={"header"}>
          Settings
        </div>
        <div className={"body"}>
          <div className={"settings"}>
            <div className={"instruction"}>
              You can set the minimum and maximum number of the generator. Numbers are inclusive.
            </div>
            <div className={"setting"}>
              <div className={"lbl"}>Minimum number</div>
              <div className={"val"}>
                <input type={"text"} value={min} onChange={handleMinChange} className={"form-control"} />
              </div>
            </div>
            <div className={"setting"}>
              <div className={"lbl"}>Maximum number</div>
              <div className={"val"}>
                <input type={"text"} value={max} onChange={handleMaxChange} className={"form-control"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"actions"}>
          <button className={"btn btn-secondary"} onClick={handleCancel}>Cancel</button>
          <button className={"btn btn-primary"} onClick={handleOK} disabled={!valid}>OK</button>
        </div>
      </div>
    </div>
  </div>
};

export default SettingPanel;