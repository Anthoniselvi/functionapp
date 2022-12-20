import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const getDatafromEvent = (eventId) => {
  const data = localStorage.getItem("eventsList");
  if (data) {
    return JSON.parse(data).filter((event) => {
      return parseInt(event.id) === parseInt(eventId);
    });
  } else {
    return [];
  }
};

const getDatafromEntry = (eventId) => {
  const data = localStorage.getItem("entries");
  // console.log("from data", data);
  if (data) {
    return JSON.parse(data).filter((entry) => {
      return parseInt(entry.eventId) === parseInt(eventId);
    });
  } else {
    return [];
  }
};

const getTotalDatafromEntry = () => {
  const data = localStorage.getItem("entries");
  // console.log("getTotaldataentry:" + data);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function EntriesList() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const eventId = searchParam.get("event");
  const [totalEntries, setTotalEntries] = useState(getTotalDatafromEntry());
  const [eventsList, setEventsList] = useState(getDatafromEvent(eventId));
  const [entries, setEntries] = useState(getDatafromEntry(eventId));

  const totalAmount = entries
    .map((entry) => entry.amount)
    .reduce((acc, value) => acc + +value, 0);
  // console.log(totalAmount);

  const totalGift = entries
    .map((entry) => entry.gift)
    .reduce((acc, value) => acc + +value, 0);
  // console.log(totalGift);

  const navigateToEntryForm = () => {
    navigate(`/entry/new?event=${eventId}`);
  };

  const moveToEventListPage = () => {
    navigate("/eventslist");
  };

  const editEntry = (id) => {
    navigate(`/edit?entry=${id}`);
  };

  const deleteEntry = (id) => {
    const entryArray = totalEntries.filter((item) => {
      return item.id !== id;
    });
    // console.log("deleteEntry: " + entryArray);
    setTotalEntries(entryArray);
    // localStorage.setItem("entries", JSON.stringify(totalEntries));
    // setEntries(getDatafromEntry(eventId));
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(totalEntries));
    setEntries(getDatafromEntry(eventId));
  }, [totalEntries]);

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
        {entries.length > 0 && (
          <>
            <div className="entry-inner-box">
              {/* onClick={moveToEntry} */}
              <div className="entry_head_name">
                {eventsList.map((eventId) => (
                  <h1 className="entry-title">{eventId.name}</h1>
                ))}
                <div>
                  <BiSearch />
                  <p>Search by Person Name</p>
                </div>
                <table className="entry-table">
                  <tr>
                    <th>Person Name</th>
                    <th>Amount</th>
                    <th>Gift</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  {entries.map((entry) => (
                    <tr key={entry}>
                      <td>{entry.personName}</td>
                      <td>{entry.amount}</td>
                      <td>{entry.gift}</td>
                      <td>
                        <AiFillEdit onClick={() => editEntry(entry.id)} />
                      </td>
                      <td>
                        <MdDelete onClick={() => deleteEntry(entry.id)} />
                      </td>
                    </tr>
                  ))}
                  {eventsList.map((event) => (
                    <tr className="total-entry">
                      <td>Total</td>
                      <td>{totalAmount}</td>
                      <td>{totalGift}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </>
        )}

        {entries.length < 1 && <p>No Entries found</p>}
        <button className="addentry-button" onClick={navigateToEntryForm}>
          Add New Entry
        </button>
      </div>

      <div className="footer_container">
        <AiFillHome />
        <GrAddCircle onClick={navigateToEntryForm} />
        <BiMenu />
      </div>
    </div>
  );
}
