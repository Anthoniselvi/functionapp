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
import Avatar from "react-avatar";

const getDatafromEvent = (eventId) => {
  const data = localStorage.getItem("eventsList");
  if (data) {
    return JSON.parse(data).filter((event) => {
      return event.id === eventId;
    });
  } else {
    return [];
  }
};

const getDatafromEntry = (eventId) => {
  const data = localStorage.getItem("entries");
  console.log("from data", data);
  if (data) {
    return JSON.parse(data).filter((entry) => {
      return entry.eventId === eventId;
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
  // const [filteredName, setFilteredNames] = useState([]);
  // const [searchName, setSearchName] = useState("");

  function onChangeHandle(e) {
    console.log("e.target.value", e.target.value);
    if (e.target.value === "") {
      window.location.reload(true);
      const tempArr = entries;
      setEntries(tempArr);
      return;
    }
    const searchResult = entries.filter((entry) =>
      entry.personName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setEntries(searchResult);
  }
  const totalAmount = entries
    .map((entry) => entry.amount)
    .reduce((acc, value) => acc + +value, 0);
  // console.log(totalAmount);

  const totalGift = entries.filter((entry) => entry.gift !== "").length;
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

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("entries"));
  //   data.get("entries").then((res) => setFilteredNames(res.data));
  // }, []);

  // {
  //   NOTES.filter((note) => note.title.toLowerCase().includes(query)).map((note, index) => (
  //     <div key={index}>{note.title}</div>
  //   ))
  // }
  return (
    <div className="entry_container">
      <div className="entry_header">
        <AiOutlineArrowLeft
          className="entry_header_icon"
          onClick={moveToEventListPage}
        />
        {eventsList.map((eventId) => (
          <h1 className="entry-title">{eventId.name}</h1>
        ))}
        {/* <h1>Entry</h1> */}
        <BsPersonCircle className="event_header_icon" />
      </div>

      <div className="entry_content">
        <div className="entry_searchbar">
          <BiSearch />
          <input
            type="text"
            placeholder="Search by Person Name"
            className="entry_searchbar_input"
            // value={searchName}
            onChange={onChangeHandle}
          />
        </div>
        {entries.length > 0 && (
          <>
            <div className="entry-inner-box">
              {/* onClick={moveToEntry} */}
              <div className="entry_head_name">
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
                      <td>
                        <Avatar
                          name={entry.personName}
                          size="35"
                          round={true}
                          maxInitials="1"
                        />
                        {entry.personName}
                      </td>
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
