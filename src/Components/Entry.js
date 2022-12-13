import React, { useState } from "react";
import "./style.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Entry() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    type: true,
    amount: "",
    comments: "",
  });

  function moveToEvent() {
    navigate("/Event");
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Entry");
  }

  return (
    <div className="entry_container">
      <div className="entry_header">
        <AiOutlineArrowLeft
          className="event_header_icon"
          onClick={moveToEvent}
        />
        <h1>Entry</h1>
        <BsPersonCircle className="event_header_icon" />
      </div>
      <div className="entry_content">
        {show ? (
          <form className="entry_form" onSubmit={handleSubmit}>
            <input
              className="entry_form_input"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            <input
              className="entry_form_input"
              type="text"
              placeholder="City"
              onChange={handleChange}
              name="city"
              value={formData.city}
            />
            <div className="select-container">
              <p className="select-container-title">Presentation Types</p>
              <div className="select-type-list">
                <div className="select-type">
                  <input
                    type="radio"
                    id="rupees"
                    name="present"
                    value="rupees"
                    checked={formData.money === "rupees"}
                    // checked="checked"
                    onChange={handleChange}
                  />
                  <label htmlFor="rupees">Money</label>
                </div>

                <div className="select-type">
                  <input
                    type="radio"
                    id="thing"
                    name="present"
                    value="thing"
                    checked={formData.gift === "thing"}
                    onChange={handleChange}
                  />
                  <label htmlFor="thing">Thing</label>
                </div>

                <div className="select-type">
                  <input
                    type="radio"
                    id="both"
                    name="present"
                    value="both"
                    checked={formData.employment === "both"}
                    onChange={handleChange}
                  />
                  <label htmlFor="both">Both</label>
                </div>
              </div>
            </div>

            <input
              className="entry_form_input"
              type="text"
              placeholder="Amount"
              onChange={handleChange}
              name="amount"
              value={formData.amount}
            />
            <textarea
              className="entry_form_comments"
              value={formData.comments}
              placeholder="Comments"
              onChange={handleChange}
              name="comments"
            />
            <button className="entry_button" onClick={() => setShow(!show)}>
              Add
            </button>
          </form>
        ) : (
          <div className="entry_content_list">
            <div className="entry_search">
              <BiSearch />
              <input
                className="entry_input"
                type="text"
                placeholder="Search by Name"
              />
            </div>
            {/* {formData.map((info, ind) => {
              return ( */}
            <div className="entry_list_container">
              <div className="entry_list_inner" onClick={() => setShow(!show)}>
                <BsFillPersonFill className="entry_list_icon" />
                {/* <h4>{info.name}</h4>
                <h4>{info.amount}</h4> */}
                <h4>Person name</h4>
                <h4>Present</h4>
                <MdDelete />
              </div>
              ;
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Entry;
