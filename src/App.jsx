import React from "react";
import { useState } from "react";
import "./App.css";
import { getWinProb } from "./utils/StatUtils";
import Row from "./components/Row";
function App() {
  const [arm, setArm] = useState({});
  const [alphabet, setAlphabet] = useState(67);
  const [table, setTable] = useState(["A", "B"]);

  function handleChange(e) {
    e.preventDefault();
    const [metricName, armName] = e.target.name.split("-");
    const metricValue = parseInt(e.target.value);
    setArm({
      ...arm,
      [armName]: {
        ...arm[[armName]],
        [metricName]: metricValue || 0,
      },
    });
  }

  function addNewVariation(e) {
    e.preventDefault();
    setTable([...table, String.fromCharCode(alphabet)]);
    setAlphabet(alphabet + 1);
  }

  return (
    <div className="App">
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
            <tbody>
              {table.map((elem) => (
                <Row
                  key={`key-${elem}`}
                  id={elem}
                  total={arm[elem]?.total || 0}
                  conversion={arm[elem]?.conversion || 0}
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
