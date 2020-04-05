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
    setArm({
      ...arm,
      [e.target.name]: parseInt(e.target.value) || 0
    });
  }

  function addNewVariation(e) {
    e.preventDefault();
    setTable([...table, String.fromCharCode(alphabet)]);
    setAlphabet(alphabet + 1);
  }

  return (
    <div className="App">
      <form onChange={handleChange}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>방문자 수</th>
              <th>전환 수</th>
              <th>전환율</th>
            </tr>
          </thead>
          <tbody>
            {table.map(elem => (
              <Row
                key={elem}
                id={elem}
                total={arm[`total${elem}`] || 0}
                conversion={arm[`conversion${elem}`] || 0}
              />
            ))}
          </tbody>
        </table>
      </form>

      <button onClick={addNewVariation}>Add Another Variation</button>

      <h1>
        {getWinProb(
          [arm.totalA || 0, arm.conversionA || 0],
          [arm.totalB || 0, arm.conversionB || 0]
        )}
      </h1>
    </div>
  );
}

export default App;
