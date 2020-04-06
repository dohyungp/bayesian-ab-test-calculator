import React from "react";
import { useState } from "react";
import "./App.css";
import { getWinProb } from "./utils/StatUtils";
import Row from "./components/Row";
import { Header } from "./components/Header";
function App() {
  const [arm, setArm] = useState({});
  const [alphabet, setAlphabet] = useState(67);
  const [table, setTable] = useState(["A", "B"]);
  const [winner, setWinner] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    const [metricName, armName] = e.target.name.split("-");
    const metricValue = parseInt(e.target.value);
    let cvr = 0;

    if (metricName === "total")
      cvr = (arm[[armName]]?.conversion || 0) / metricValue;
    else if (arm[[armName]]?.total > 0)
      cvr = metricValue / arm[[armName]].total;

    setArm({
      ...arm,
      [armName]: {
        ...arm[[armName]],
        [metricName]: metricValue || 0,
        cvr,
      },
    });

    const armList = Object.keys(arm);

    if (armList.length < 1) return;

    let winningArm = armList.reduce((a, b) => {
      let aCVR = a === armName ? cvr : arm[[a]]?.cvr || 0;
      let bCVR = b === armName ? cvr : arm[[b]]?.cvr || 0;

      return aCVR > bCVR ? a : b;
    });

    setWinner(winningArm);
  }

  function addNewVariation(e) {
    e.preventDefault();
    setTable([...table, String.fromCharCode(alphabet)]);
    setAlphabet(alphabet + 1);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <form onChange={handleChange}>
          <table className="table">
            <thead className="header">
              <tr>
                <th></th>
                <th>Visitors</th>
                <th>Conversion</th>
                <th>CVR(%)</th>
              </tr>
            </thead>
            <tbody className="body">
              {table.map((elem) => (
                <Row
                  key={`key-${elem}`}
                  id={elem}
                  total={arm[elem]?.total || 0}
                  conversion={arm[elem]?.conversion || 0}
                  isWin={winner === elem}
                />
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <button className="add-button" onClick={addNewVariation}>
        Add Another Variation
      </button>

      <p>{JSON.stringify(arm)}</p>
      <h1>
        {getWinProb(
          [arm["total-A"] || 0, arm["conversion-A"] || 0],
          [arm["total-B"] || 0, arm["conversion-B"] || 0]
        ).toFixed(2)}
      </h1>
    </div>
  );
}

export default App;
