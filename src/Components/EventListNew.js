import React, { useState, useEffect } from "react";
import "./style.css";
import Footer from "./Footer";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
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

export default function EventListNew() {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState(getDatafromEvent());
  const [entries, setEntries] = useState(getEntryData());
  const [selectedEvent, setSelectedEvent] = useState("");
  const [show, setShow] = useState(false);

  const getTotalAmount = (eventId) => {
    // console.log("Getting total amount for event id :" + eventId);
    // console.log(entries);
    const totalAmount = entries
      .filter((entry) => entry.eventId === eventId)
      .map((entry) => parseInt(entry.amount))
      .reduce((acc, value) => acc + +value, 0);
    // console.log(totalAmount);
    return totalAmount;
  };

  // const getTotalGift = (eventId) => {
  //   // console.log("Getting total gift for event id :" + eventId);
  //   const totalGift = entries
  //     .filter((entry) => parseInt(entry.eventId) === eventId)
  //     .map((entry) => parseInt(entry.gift))
  //     .reduce((acc, value) => acc + +value, 0);
  //   // console.log(totalGift);
  //   return totalGift;
  // };

  const gettotalGiftforEvent = (eventId) => {
    return entries.filter(
      (entry) => entry.eventId === eventId && entry.gift !== ""
    ).length;
  };

  const navigateToAddNewEvent = (e) => {
    e.stopPropagation();
    navigate("/event/new");
  };

  const navigateToAddNewEntry = (e, eventId) => {
    e.stopPropagation();
    navigate(`/entry/new?event=${eventId}`);
  };
  const navigateToEntryList = (id) => {
    navigate(`/entryList?event=${id}`);
  };

  const moveToFrontPage = () => {
    navigate("/frontpage");
  };

  const editEvent = (e, id) => {
    e.stopPropagation();
    console.log("editing the event wiht ID" + id);
    navigate(`/event?event=${id}`);
  };

  const deleteEvent = (e, eventId) => {
    e.stopPropagation();
    console.log("eventID: " + eventId);
    const eventArray = eventsList.filter((singleEvent) => {
      return singleEvent.id !== eventId;
    });

    // let totalAmount = 0;

    // entries.forEach((entry) => {
    //   totalAmount += entry.amount;
    // });

    setEventsList(eventArray);

    localStorage.setItem("eventsList", JSON.stringify(eventArray));
    console.log("Event List after deletion: " + JSON.stringify(eventArray));
    deleteEntries(eventId);
    // setEventsList(getDatafromEvent());
  };

  const deleteEntries = (eventId) => {
    const data = JSON.parse(localStorage.getItem("entries"));
    const filteredEntries = data.filter((entry) => {
      return entry.eventId !== eventId;
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
        <h1 className="event_title">Moi Registry</h1>
        {/* <BsPersonCircle className="event_header_icon" /> */}
        <AiOutlineLogout className="event_header_icon" />
      </div>
      <div className="event_content">
        <div className="event-list-container">
          {eventsList.length > 0 && (
            <>
              {eventsList.map((singleEvent) => (
                <div
                  className="event-inner-box"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigating to entry list");
                    navigateToEntryList(singleEvent.id);
                  }}
                >
                  <div className="event_head_name">
                    <h4>{singleEvent.name}</h4>
                    <HiDotsVertical
                      className="event_icon_dropdown"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("set show clicked..");
                        setSelectedEvent(singleEvent.id);
                        setShow((show) => !show);
                      }}
                    />
                  </div>
                  {singleEvent.id === selectedEvent && show ? (
                    <div className="event_dropdown">
                      <p
                        onClick={(e) =>
                          navigateToAddNewEntry(e, singleEvent.id)
                        }
                      >
                        Add Entry
                      </p>
                      <p onClick={(e) => editEvent(e, singleEvent.id)}>Edit</p>
                      <p onClick={(e) => deleteEvent(e, singleEvent.id)}>
                        Delete
                      </p>
                      {/* <GrNewWindow
                        onClick={() => navigateToEntryList(event.id)}
                      />
                      <AiFillEdit onClick={() => editEvent(event.id)} />
                      <MdDelete onClick={() => deleteEvent(event.id)} /> */}
                    </div>
                  ) : null}

                  <table className="event-table">
                    <tr>
                      <td>Total Amount</td>
                      <td>
                        Rs. <span>{getTotalAmount(singleEvent.id)}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Total No.of Gift</td>
                      {/* <td>{getTotalGift(event.id)}</td> */}
                      <td>{gettotalGiftforEvent(singleEvent.id)}</td>
                    </tr>
                  </table>
                </div>
              ))}
            </>
          )}

          {eventsList.length < 1 && (
            <>
              <p>No Events found</p>

              <button
                className="addevent-button"
                onClick={navigateToAddNewEvent}
              >
                Add New Event
              </button>
            </>
          )}
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
