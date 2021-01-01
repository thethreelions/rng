import React, {useState} from 'react';
import './App.scss';
import Picker from "./components/Picker";
import SettingPanel from "./components/SettingPanel";

function App() {

  const localStorageMin = window.localStorage.getItem('rng-min');
  const localStorageMax = window.localStorage.getItem('rng-max');
  const localStorageUnique = window.localStorage.getItem('rng-unique');
  const [showSettings, setShowSettings] = useState(false);
  const [min, setMin] = useState(localStorageMin === null ? 1 : localStorageMin * 1);
  const [max, setMax] = useState(localStorageMax === null ? 50 : localStorageMax * 1);
  const [unique, setUnique] = useState(localStorageUnique === null ? true : localStorageUnique === '1');

  const handleSettingsOK = (min, max, unique) => {
    setMin(min);
    setMax(max);
    setUnique(unique);
    setShowSettings(false);
    window.localStorage.setItem('rng-min', min);
    window.localStorage.setItem('rng-max', max);
    window.localStorage.setItem('rng-unique', unique ? '1' : '0');
  };

  const handleSettingsCancel = () => {
    setShowSettings(false);
  };

  return <div className="App">
      {showSettings && <SettingPanel min={min} max={max} unique={unique} onOK={handleSettingsOK} onCancel={handleSettingsCancel} />}
      <div className={"main"}>
        <Picker min={min} max={max} unique={unique} />
      </div>
      <div className={"app-footer"}>
        <div className={"instruction"}>
          Click number or hit space bar to generate new number.
        </div>
        <div className={"actions"}>
          <button className={"btn btn-text"} onClick={() => setShowSettings(true)}>[Settings]</button>
        </div>
      </div>
    </div>;
}

export default App;
