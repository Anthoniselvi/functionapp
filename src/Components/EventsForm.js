import React, { useState, useEffect } from "react";
import "./style.css";
import Footer from "./Footer";
import EventList from "./EventList";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import EntryForm from "./EntryForm";
import EntryList from "./EntryList";
import { useNavigate } from "react-router-dom";

const getDatafromEvent = () => {
  const data = localStorage.getItem("eventss");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export default function EventsForm({ totalAmount, totalGift }) {
  const navigate = useNavigate();
  const [eventss, setEventss] = useState(getDatafromEvent());
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [showList, setShowList] = useState(true);

  const moveToEntryForm = () => {
    navigate("/EntryForm");
  };
  const handleSubmitEvent = (e) => {
    console.log();
    e.preventDefault();
    let events = {
      name,
      place,
      date,
    };
    setEventss([...eventss, events]);
    setName("");
    setPlace("");
    setDate("");
    setShowList(true);
  };

  useEffect(() => {
    localStorage.setItem("eventss", JSON.stringify(eventss));
  }, [eventss]);

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
        {showList ? (
          <div className="event-list-container">
            {eventss.length > 0 && (
              <>
                <div className="event-inner-box" onClick={moveToEntryForm}>
                  <div className="event_head_name">
                    <h4>
                      <EventList eventss={eventss} />
                    </h4>
                    <AiFillEdit className="event_icon" />
                    <MdDelete className="event_icon" />
                  </div>
                  <table className="event-table">
                    <tr>
                      <td>Amount</td>
                      <td>{totalAmount}</td>
                    </tr>
                    <tr>
                      <td>Things</td>
                      <td>{totalGift}</td>
                    </tr>
                  </table>
                </div>
              </>
            )}

            {eventss.length < 1 && <p>No Events found</p>}
            <button
              className="addevent-button"
              onClick={() => setShowList(false)}
            >
              Add New Event
            </button>
          </div>
        ) : (
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
            {/* <button type="submit" onClick={() => setShow(!show)}> */}
            <button type="submit" className="event_button">
              Add Event
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
