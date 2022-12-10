import React from "react";

export default function EventList({ entries }) {
  return entries.map((entry) => (
    <tr key={entry}>
      <td>{entry.personName}</td>
      {/* <td>{entry.city}</td> */}
      <td>{entry.amount}</td>
      <td>{entry.gift}</td>
    </tr>
  ));
}
