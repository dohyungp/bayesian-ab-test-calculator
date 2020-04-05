import React from "react";

export const Row = ({ id, total, conversion }) => {
  const cvr = total > 0 ? `${((conversion / total) * 100).toFixed(2)}%` : "";
  return (
    <tr>
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
