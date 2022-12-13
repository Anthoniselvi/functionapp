import React, { useState } from "react";
import "./style.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const getDatafromEvent = () => {
  const data = localStorage.getItem("eventsList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function EventFormNew() {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState(getDatafromEvent());

  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    let newEvent = {
      id: eventsList.length + 1,
      name,
      place,
      date,
    };
    setName("");
    setPlace("");
    setDate("");

    localStorage.setItem(
      "eventsList",
      JSON.stringify([...eventsList, newEvent])
    );
    navigate("/eventslist");
  };

  const navigateToAddNewEvent = () => {
    navigate("/event/new");
  };

  return (
    <div className="event_container">
      <div className="event_header">
        <AiOutlineArrowLeft
          className="event_header_icon"
          // onClick={moveToFrontPage}
        />
        <h1>Events</h1>
        <BsPersonCircle className="event_header_icon" />
      </div>
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
      <div className="footer_container">
        <AiFillHome />
        <GrAddCircle onClick={navigateToAddNewEvent} />
        <BiMenu />
      </div>
    </div>
  );
}
