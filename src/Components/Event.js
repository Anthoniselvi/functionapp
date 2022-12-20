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

const getDataforSingleEvent = (eventId) => {
  const data = localStorage.getItem("eventsList");
  // console.log("getdatafor Single event:" + data);
  if (data) {
    return JSON.parse(data).filter((event) => {
      return parseInt(event.id) === parseInt(eventId);
    })[0];
  } else {
    return {};
  }
};

export default function Event() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const eventId = searchParam.get("event");

  const [eventsList, setEventsList] = useState(getDatafromEvent());

  const [editEvent, setEditEvent] = useState(getDataforSingleEvent(eventId));
  const [name, setName] = useState(editEvent.name);
  const [place, setPlace] = useState(editEvent.place);
  const [date, setDate] = useState(editEvent.date);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    let newEdit = {
      id: editEvent.id,
      name,
      place,
      date,
    };
    console.log(newEdit);

    const updatedEventsList = eventsList.map((singleEvent) => {
      if (parseInt(singleEvent.id) === parseInt(eventId)) {
        return newEdit;
      } else {
        return singleEvent;
      }
    });

    localStorage.setItem("eventsList", JSON.stringify(updatedEventsList));
    console.log("updated total events : " + JSON.stringify(updatedEventsList));
    // navigate(`/entrylist?event=${editEntry.eventId}`);

    navigate("/eventslist");
  };
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
