import React, { useState, useEffect } from "react";
import "./style.css";
import Footer from "./Footer";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { GrAddCircle, GrNewWindow } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const getDatafromEvent = () => {
  const data = localStorage.getItem("eventsList");
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

// const getTotalDatafromEvents = () => {
//   const data = localStorage.getItem("eventsList");
//   console.log("getTotaldataevents:" + data);
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

export default function EventListNew() {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState(getDatafromEvent());
  const [entries, setEntries] = useState(getEntryData());
  // const [totalEvents, setTotalEvents] = useState(getTotalDatafromEvents());

  const getTotalAmount = (eventId) => {
    // console.log("Getting total amount for event id :" + eventId);
    // console.log(entries);
    const totalAmount = entries
      .filter((entry) => parseInt(entry.eventId) === eventId)
      .map((entry) => parseInt(entry.amount))
      .reduce((acc, value) => acc + +value, 0);
    // console.log(totalAmount);
    return totalAmount;
  };

  const getTotalGift = (eventId) => {
    // console.log("Getting total gift for event id :" + eventId);
    const totalGift = entries
      .filter((entry) => parseInt(entry.eventId) === eventId)
      .map((entry) => parseInt(entry.gift))
      .reduce((acc, value) => acc + +value, 0);
    // console.log(totalGift);
    return totalGift;
  };

  const navigateToAddNewEvent = () => {
    navigate("/event/new");
  };

  const navigateToEntryList = (id) => {
    navigate(`/entryList?event=${id}`);
  };

  const moveToFrontPage = () => {
    navigate("/frontpage");
  };

  const editEvent = (id) => {
    navigate(`/event?event=${id}`);
  };

  const deleteEvent = (eventId) => {
    console.log("eventID: " + eventId);
    const eventArray = eventsList.filter((singleEvent) => {
      return parseInt(singleEvent.id) !== parseInt(eventId);
    });

    setEventsList(eventArray);

    localStorage.setItem("eventsList", JSON.stringify(eventArray));
    console.log("Event List after deletion: " + JSON.stringify(eventArray));
    deleteEntries(eventId);
    // setEventsList(getDatafromEvent());
  };

  const deleteEntries = (eventId) => {
    const data = JSON.parse(localStorage.getItem("entries"));
    const filteredEntries = data.filter((entry) => {
      return parseInt(entry.eventId) !== parseInt(eventId);
    });
    localStorage.setItem("entries", JSON.stringify(filteredEntries));
  };
  // useEffect(() => {
  //   localStorage.setItem("eventsList", JSON.stringify(totalEvents));
  //   setEventsList(getDatafromEvent());
  // }, []);

  return (
    <div className="event_container">
      <div className="event_header">
        <AiOutlineArrowLeft
          className="event_header_icon"
          onClick={moveToFrontPage}
        />
        <h1>Events</h1>
        <BsPersonCircle className="event_header_icon" />
      </div>
      <div className="event_content">
        <div className="event-list-container">
          {eventsList.length > 0 && (
            <>
              {eventsList.map((event) => (
                <div
                  className="event-inner-box"
                  // onClick={() => navigateToEntryList(event.id)}
                >
                  <div className="event_head_name">
                    <h4>{event.name}</h4>
                    <GrNewWindow
                      onClick={() => navigateToEntryList(event.id)}
                    />
                    <AiFillEdit onClick={() => editEvent(event.id)} />
                    <MdDelete onClick={() => deleteEvent(event.id)} />
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

          {eventsList.length < 1 && <p>No Events found</p>}

          <button className="addevent-button" onClick={navigateToAddNewEvent}>
            Add New Event
          </button>
        </div>
      </div>
      <div className="footer_container">
        <AiFillHome />
        <GrAddCircle onClick={navigateToAddNewEvent} />
        <BiMenu />
      </div>
    </div>
  );
}
