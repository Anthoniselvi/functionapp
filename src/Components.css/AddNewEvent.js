import React, { useState } from "react";
import "./style.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AddNewEvent() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [date, setDate] = useState();

  function moveToEvent() {
    navigate("/Events");
  }

  const handleAddEventSubmit = (event) => {
    event.preventDefault();

    setName(name);
    setPlace(place);
    setDate(date);
    navigate("/Events");
  };

  return (
    <div className="addnewevent_container">
      <div className="event_header">
        <AiOutlineArrowLeft
          className="event_header_icon"
          onClick={moveToEvent}
        />
        <h1>Add New Event</h1>
        <BsPersonCircle className="event_header_icon" />
      </div>
      <div className="addevent_content">
        <form onSubmit={handleAddEventSubmit} className="addevent_form">
          <div className="addevent_input_container">
            <label className="addevent_label">Event Name</label>
            <input
              className="addevent_input"
              required
              type="text"
              // placeholder="Event Name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />
          </div>
          <div className="addevent_input_container">
            <label className="addevent_label">Event Date</label>
            <input
              required
              className="addevent_input"
              type="date"
              // placeholder="Event Date"
              onChange={(e) => setDate(e.target.value)}
              name="date"
              value={date}
            />
          </div>
          <div className="addevent_input_container">
            <label className="addevent_label">Event Place</label>
            <input
              className="addevent_input"
              required
              type="text"
              // placeholder=""
              onChange={(e) => setPlace(e.target.value)}
              name="place"
              value={place}
            />
          </div>

          <button className="addevent_button">Add New Event</button>
        </form>
      </div>
    </div>
  );
}

export default AddNewEvent;
