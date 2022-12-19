// import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EntryFormNew from "./EntryFormNew";
import { useSearchParams } from "react-router-dom";

// get single entry
//  entry object
// getindex[0]

const getDataforSingleEntry = (entryId) => {
  const data = localStorage.getItem("entries");
  // console.log("getdatafor Single entry:" + data);
  if (data) {
    return JSON.parse(data).filter((entry) => {
      return parseInt(entry.id) === parseInt(entryId);
    })[0];
  } else {
    return {};
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
function Edit() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const entryId = searchParam.get("entry");

  // const [entries, setEntries] = useState();
  const [totalEntries, setTotalEntries] = useState(getTotalDatafromEntry());

  const [editEntry, setEditEntry] = useState(getDataforSingleEntry(entryId));
  const [personName, setPersonName] = useState(editEntry.personName);
  const [city, setCity] = useState(editEntry.city);
  const [amount, setAmount] = useState(editEntry.amount);
  const [gift, setGift] = useState(editEntry.gift);

  const handleSubmitEditEntry = (e) => {
    e.preventDefault();
    let newEdit = {
      id: editEntry.id,
      personName,
      city,
      amount,
      gift,
      eventId: editEntry.eventId,
    };
    console.log(newEdit);

    const updatedtotalEntry = totalEntries.map((singleEntry) => {
      if (parseInt(singleEntry.id) === parseInt(entryId)) {
        return newEdit;
      } else {
        return singleEntry;
      }
    });

    localStorage.setItem("entries", JSON.stringify(updatedtotalEntry));
    console.log("updated total entry : " + JSON.stringify(updatedtotalEntry));
    navigate(`/entrylist?event=${editEntry.eventId}`);
  };

  return (
    <div className="entry_container">
      {/* <div className="entry_header">
        <AiOutlineArrowLeft
          className="entry_header_icon"
          onClick={moveToEventListPage}
        />
        <h1>Entry</h1>
        <BsPersonCircle className="event_header_icon" />
      </div> */}
      <div className="entry_content">
        <form className="entry_form" onSubmit={handleSubmitEditEntry}>
          <h1 className="entry-title">Edit Entry</h1>
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
      {/* <div className="footer_container">
        <AiFillHome />
        <GrAddCircle onClick={navigateToEntryForm} />
        <BiMenu />
      </div> */}
    </div>
  );
}

export default Edit;
