import React from "react";

export default function Total({ entries }) {
  const totalAmount = entries
    .map((entry) => entry.amount)
    .reduce((acc, value) => acc + +value, 0);
  console.log(totalAmount);

  const totalGift = entries
    .map((entry) => entry.gift)
    .reduce((acc, value) => acc + +value, 0);
  console.log(totalGift);

  return entries.map((entry) => (
    <tr key={entry}>
      <td>
        Total Amount: <span>{totalAmount}</span>{" "}
      </td>

      <td>
        Total Gift: <span>{totalGift}</span>{" "}
      </td>
    </tr>
  ));
}
