import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Entry from "./Entry";
import { useNavigate } from "react-router-dom";

function Event() {
  const navigate = useNavigate();

  function moveToEntry() {
    navigate("/Entry");
  }
  return (
    <div className="event_container">
      <Header />
      <div className="event_content">
        <h1>Events</h1>
        <div className="event_list">
          <div className="event-inner-box" onClick={moveToEntry}>
            <h4>Event Name</h4>
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
            <h4>Event Name</h4>
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
            <h4>Event Name</h4>
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
