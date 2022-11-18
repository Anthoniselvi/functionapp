import React from "react";
import Footer from "./Footer";
import Entry from "./Entry";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Event() {
  const navigate = useNavigate();

  function moveToFrontPage() {
    navigate("/FrontPage");
  }

  function moveToEntry() {
    navigate("/Entry");
  }
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
        <div className="event_list">
          <div className="event-inner-box" onClick={moveToEntry}>
            <div className="event_head_name">
              <h4>Event Name</h4>
              <AiFillEdit className="event_icon" />
              <MdDelete className="event_icon" />
            </div>
            <table>
              <tr>
                <td>Amount</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Things</td>
                <td>Nil</td>
              </tr>
            </table>
          </div>
          <div className="event-inner-box" onClick={moveToEntry}>
            <div className="event_head_name">
              <h4>Event Name</h4>
              <AiFillEdit className="event_icon" />
              <MdDelete className="event_icon" />
            </div>
            <table>
              <tr>
                <td>Amount</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Things</td>
                <td>Nil</td>
              </tr>
            </table>
          </div>
          <div className="event-inner-box" onClick={moveToEntry}>
            <div className="event_head_name">
              <h4>Event Name</h4>
              <AiFillEdit className="event_icon" />
              <MdDelete className="event_icon" />
            </div>
            <table>
              <tr>
                <td>Amount</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Things</td>
                <td>Nil</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Event;
