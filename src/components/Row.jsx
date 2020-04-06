import React from "react";

export const Row = ({ id, total, conversion, isWin }) => {
  const cvr = total > 0 ? `${((conversion / total) * 100).toFixed(1)}%` : "";
  return (
    <tr className={isWin ? "winner" : ""}>
      <td>{`${id}`}</td>
      <td>
        <input
          className="metric-input"
          name={`total-${id}`}
          type="number"
          min="0"
        />
      </td>
      <td>
        <input
          className="metric-input"
          name={`conversion-${id}`}
          type="number"
          min="0"
        />
      </td>
      <td>{cvr}</td>
    </tr>
  );
};

export default Row;
