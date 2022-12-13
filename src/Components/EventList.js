import React from "react";

export default function EventList({ eventss }) {
  return eventss.map((events) => <h4>{events.name}</h4>);
}
