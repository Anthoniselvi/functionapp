import React from "react";
import "./style.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AddNewEvent() {
  const navigate = useNavigate();
  const [addevent, setAddEvent] = React.useState({
    event: "",
    place: "",
    date: "",
  });

  function addeventInput(e) {
    const { event, place, date } = e.target;
    setAddEvent((prevAddEvent) => {
      return {
        ...prevAddEvent,
        // [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function moveToEvent() {
    navigate("/Event");
  }

  function handleAddEventSubmit(event) {
    event.preventDefault();
    navigate("/Event");
  }
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
              type="text"
              placeholder=""
              onChange={addeventInput}
              name="name"
              // value={}
            />
          </div>
          <div className="addevent_input_container">
            <label className="addevent_label">Event Date</label>
            <input
              className="addevent_input"
              type="date"
              placeholder="Event Date"
              onChange={addeventInput}
              name="date"
              // value={formData.city}
            />
          </div>
          <div className="addevent_input_container">
            <label className="addevent_label">Event Place</label>
            <input
              className="addevent_input"
              type="text"
              placeholder=""
              onChange={addeventInput}
              name="place"
              // value={formData.amount}
            />
          </div>

          <button className="addevent_button">Add</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddNewEvent;
