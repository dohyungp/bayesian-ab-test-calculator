import React from "react";
import { getWinProb } from "../utils/StatUtils";

export const Row = ({ id, currentArm, winnerArm, isWin }) => {
  const cvr =
    currentArm?.total > 0
      ? `${((currentArm?.cvr || 0) * 100).toFixed(1)}%`
      : "";

  const beatRatio = isWin
    ? "— %"
    : `${getWinProb(
        [currentArm?.total || 0, currentArm?.conversion || 0],
        [winnerArm?.total || 0, winnerArm?.conversion || 0]
      ).toFixed(1)}%`;
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
      <td>{beatRatio}</td>
    </tr>
  );
};

export default Row;
