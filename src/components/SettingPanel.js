import React, {useState} from 'react';
import './SettingPanel.scss';

const SettingPanel = props => {

  const {onOK, onCancel} = props;

  const [unique, setUnique] = useState(props.unique);
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);

  const handleCancel = () => {
    onCancel();
  };

  const handleOK = () => {
    onOK(('' + min).replace(/[^\d]/g, '') * 1,
      ('' + max).replace(/[^\d]/g, '') * 1,
      unique
    );
  };

  // min/max must not be same
  const valid = min >= 0 && min < max;

  return <div className={"SettingPanel"}>
    <div className={"overlay"}>
      <div className={"box"}>
        <div className={"header"}>
          Set Range
        </div>
        <div className={"body"}>
          <div className={"settings"}>
            <div className={"instruction"}>
              Numbers are inclusive.
            </div>
            <div className={"setting"}>
              <div className={"lbl"}>Min</div>
              <div className={"val"}>
                <input type={"text"} value={min} onChange={e => setMin(e.target.value)} className={"form-control"} />
              </div>
            </div>
            <div className={"setting"}>
              <div className={"lbl"}>Max</div>
              <div className={"val"}>
                <input type={"text"} value={max} onChange={e => setMax(e.target.value)} className={"form-control"} />
              </div>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="unique" defaultChecked={unique} onChange={e => setUnique(e.target.checked)} />
                <label className="form-check-label" htmlFor="unique">Unique Only</label>
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