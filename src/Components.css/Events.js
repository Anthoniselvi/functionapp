import React from "react";

function Events(props) {
  const { name, place, date } = props;

  return (
    <div>
      <p>
        {props.name}
        <br />
        {props.date}
        <br />
        {props.place}
      </p>
    </div>
  );
}

export default Events;
