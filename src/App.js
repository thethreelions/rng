import React, {useState} from 'react';
import './App.scss';
import Picker from "./Picker";
import SettingPanel from "./SettingPanel";

function App() {

  const localStorageMin = window.localStorage.getItem('rng-min');
  const localStorageMax = window.localStorage.getItem('rng-max');
  const [showSettings, setShowSettings] = useState(false);
  const [min, setMin] = useState(localStorageMin === null ? 1 : localStorageMin * 1);
  const [max, setMax] = useState(localStorageMax === null ? 50 : localStorageMax * 1);

  const handleSettingsOK = (min, max) => {
    setMin(min);
    setMax(max);
    setShowSettings(false);
    window.localStorage.setItem('rng-min', min);
    window.localStorage.setItem('rng-max', max);
  };

  const handleSettingsCancel = () => {
    setShowSettings(false);
  };

  return <div className="App">
      {showSettings && <SettingPanel min={min} max={max} onOK={handleSettingsOK} onCancel={handleSettingsCancel} />}
      <Picker min={min}
              max={max} />
      <div className={"page-instruction"}>
        Click on the number or hit the space bar to generate a new number.
      </div>
      <div className={"settings"}>
        <button className={"btn btn-text"} onClick={() => setShowSettings(true)}>Change Range</button>
      </div>
    </div>;
}

export default App;
