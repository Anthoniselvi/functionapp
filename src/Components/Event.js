import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const getDatafromEvent = () => {
  const data = localStorage.getItem("eventsList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function Event() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const eventId = searchParam.get("event");

  const [eventsList, setEventsList] = useState(getDatafromEvent());

  const [editEvent, setEditEvent] = useState(getDataforSingleEvent(eventId));
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className="event_content">
      <form className="event_form" onSubmit={handleSubmitEvent}>
        <h1 className="event-title">Add New Event</h1>
        <input
          className="event_inputs"
          type="text"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Event Name"
        />
        <input
          className="event_inputs"
          type="text"
          required
          name="place"
          onChange={(e) => setPlace(e.target.value)}
          value={place}
          placeholder="Place"
        />
        <input
          className="event_inputs"
          type="date"
          required
          name="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <button type="submit" className="event_button">
          Add Event
        </button>
      </form>
    </div>
  );
}
