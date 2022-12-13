import React from "react";

export default function EventList({ entries }) {
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
      <td>{entry.personName}</td>
      {/* <td>{entry.city}</td> */}
      <td>{entry.amount}</td>
      <td>{entry.gift}</td>
    </tr>
  ));
}
