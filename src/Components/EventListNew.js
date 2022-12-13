import React, { useState, useEffect } from "react";
import "./style.css";
import Footer from "./Footer";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const getDatafromEvent = () => {
  const data = localStorage.getItem("eventss");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const getEntryData = () => {
  const data = localStorage.getItem("entries");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function EventListNew() {
  const navigate = useNavigate();
  const [eventss, setEventss] = useState(getDatafromEvent());
  const [entries, setEntries] = useState(getEntryData());
  const [showList] = useState(true);

  const getTotalAmount = (eventId) => {
    console.log("Getting total amount for event id :" + eventId);
    console.log(entries);
    const totalAmount = entries
      .filter((entry) => parseInt(entry.eventId) === eventId)
      .map((entry) => parseInt(entry.amount))
      .reduce((acc, value) => acc + +value, 0);
    console.log(totalAmount);
    return totalAmount;
  };

  const getTotalGift = (eventId) => {
    console.log("Getting total gift for event id :" + eventId);
    const totalGift = entries
      .filter((entry) => parseInt(entry.eventId) === eventId)
      .map((entry) => parseInt(entry.gift))
      .reduce((acc, value) => acc + +value, 0);
    console.log(totalGift);
    return totalGift;
  };

  const navigateToAddNewEvent = () => {
    navigate("/event/new");
  };

  const moveToEntryList = (id) => {
    navigate(`/entryList?event=${id}`);
  };
  // const moveToEntryForm = () => {
  //   navigate("/EntryForm");
  // };

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
        <div className="event-list-container">
          {eventss.length > 0 && (
            <>
              {eventss.map((event) => (
                <div
                  className="event-inner-box"
                  onClick={() => moveToEntryList(event.id)}
                >
                  <div className="event_head_name">
                    <h4>{event.name}</h4>
                    <AiFillEdit className="event_icon" />
                    <MdDelete className="event_icon" />
                  </div>
                  <table className="event-table">
                    <tr>
                      <td>Amount</td>
                      <td>{getTotalAmount(event.id)}</td>
                    </tr>
                    <tr>
                      <td>Things</td>
                      <td>{getTotalGift(event.id)}</td>
                    </tr>
                  </table>
                </div>
              ))}
            </>
          )}

          {eventss.length < 1 && <p>No Events found</p>}

          <button className="addevent-button" onClick={navigateToAddNewEvent}>
            Add New Event
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
