import React from "react";

export const Row = ({ id, total, conversion }) => {
  return (
    <tr>
      <td>{`${id}`}</td>
      <td>
        <input name={`total${id}`} type="number" min="0" />
      </td>
      <td>
        <input name={`conversion${id}`} type="number" min="0" />
      </td>
      <td>{total > 0 ? conversion / total : ""}</td>
    </tr>
  );
};

export default Row;
