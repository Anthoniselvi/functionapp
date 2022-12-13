import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Footer from "./Footer";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const getDatafromEntry = (eventId) => {
  //   const data = localStorage.getItem("entries");
  //   console.log("getdataentry:" + data);
  //   if (data) {
  //     return JSON.parse(data).filter((entry) => {
  //       return parseInt(entry.eventId) === parseInt(eventId);
  //     });
  //   } else {
  //     return [];
  //   }
};
const getTotalDatafromEntry = (eventId) => {
  const data = localStorage.getItem("totalEntries");
  console.log("getTotaldataentry:" + data);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function EntryFormNew() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const eventId = searchParam.get("event");

  const [entries, setEntries] = useState(getDatafromEntry(eventId));
  const [totalEntries, setTotalEntries] = useState(
    getTotalDatafromEntry(eventId)
  );
  const [personName, setPersonName] = useState("");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState(0);
  const [gift, setGift] = useState(0);

  const handleSubmitEvent = (e) => {
    console.log("handlesubmit entries:" + totalEntries);
    console.log(eventId);
    e.preventDefault();
    let totalentry = {
      id: totalEntries.length + 1,
      personName,
      city,
      amount,
      gift,
      eventId,
    };

    setPersonName("");
    setCity("");
    setAmount("");
    setGift("");
    console.log("totalEntries:" + totalEntries, "totalentry:" + totalentry);
    localStorage.setItem(
      "totalEntries",
      JSON.stringify([...totalEntries, totalentry])
    );

    navigate(`/entryList?event=${eventId}`);
  };

  const moveToEventListPage = () => {
    navigate("/eventslist");
  };

  const navigateToEntryForm = () => {
    navigate(`/entry/new?event=${eventId}`);
  };

  return (
    <div className="entry_container">
      <div className="entry_header">
        <AiOutlineArrowLeft
          className="entry_header_icon"
          onClick={moveToEventListPage}
        />
        <h1>Entry</h1>
        <BsPersonCircle className="event_header_icon" />
      </div>
      <div className="entry_content">
        <form className="entry_form" onSubmit={handleSubmitEvent}>
          <h1 className="entry-title">Add New Entry</h1>
          <input
            className="entry_inputs"
            type="text"
            name="name"
            required
            onChange={(e) => setPersonName(e.target.value)}
            value={personName}
            placeholder="Person Name"
          />
          <input
            className="entry_inputs"
            type="text"
            required
            name="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City Name"
          />
          <input
            className="entry_inputs"
            type="number"
            required
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <input
            className="entry_inputs"
            type="number"
            required
            name="gift"
            onChange={(e) => setGift(e.target.value)}
            value={gift}
          />
          <button className="entry_button" type="submit">
            Add Entry
          </button>
        </form>
      </div>
      <div className="footer_container">
        <AiFillHome />
        <GrAddCircle onClick={navigateToEntryForm} />
        <BiMenu />
      </div>
    </div>
  );
}
