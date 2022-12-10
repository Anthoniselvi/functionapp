import React, { useState, useEffect } from "react";
import "./style.css";
import EventList from "./EventList";
import EntryList from "./EntryList";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const getDatafromEntry = () => {
  const data = localStorage.getItem("entries");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export default function EntryForm() {
  const [entries, setEntries] = useState(getDatafromEntry());
  const [personName, setPersonName] = useState("");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState("");
  const [gift, setGift] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSubmitEvent = (e) => {
    console.log();
    e.preventDefault();
    let entry = {
      personName,
      city,
      amount,
      gift,
    };
    setEntries([...entries, entry]);
    setPersonName("");
    setCity("");
    setAmount("");
    setGift("");
    setShowList(true);
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div className="entry_container">
      <div className="entry_header">
        <AiOutlineArrowLeft
          className="entry_header_icon"
          // onClick={moveToFrontPage}
        />
        <h1>Entry</h1>
        <BsPersonCircle className="event_header_icon" />
      </div>
      <div className="entry-content">
        {showList ? (
          <div className="event-list-container">
            {entries.length > 0 && (
              <>
                <div className="entry-inner-box">
                  {/* onClick={moveToEntry} */}
                  <div className="entry_head_name">
                    <h1>Entry List</h1>
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Place</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <EntryList entries={entries} />
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {entries.length < 1 && <p>No Entries found</p>}
            <button onClick={() => setShowList(false)}>Add New Entry</button>
          </div>
        ) : (
          <form onSubmit={handleSubmitEvent}>
            <h1>Add New Entry</h1>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setPersonName(e.target.value)}
              value={personName}
              placeholder="Person Name"
            />
            <input
              type="text"
              required
              name="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City Name"
            />
            <input
              type="number"
              required
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            <input
              type="number"
              required
              name="gift"
              onChange={(e) => setGift(e.target.value)}
              value={gift}
            />
            {/* <button type="submit" onClick={() => setShow(!show)}> */}
            <button type="submit">Add Entry</button>
          </form>
        )}
      </div>
    </div>
  );
}
