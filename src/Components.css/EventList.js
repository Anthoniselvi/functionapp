import React from "react";
import Footer from "./Footer";
import Entry from "./Entry";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Events from "./Events";

function EventList(props) {
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
            {props.events.length > 0 ? (
              props.events.map((event) => (
                <>
                  <div className="event_head_name">
                    <Events event={event} />
                    <h4>{props.event.name}</h4>
                    <AiFillEdit className="event_icon" />
                    <MdDelete className="event_icon" />
                  </div>

                  <table>
                    <tr key={event.id}>
                      {/* <td>Amount</td> */}
                      <td>
                        {" "}
                        <Events event={event} />
                      </td>
                    </tr>
                    <tr>
                      <td>Things</td>
                      <td>Nil</td>
                    </tr>
                  </table>
                </>
              ))
            ) : (
              <>
                <tr>
                  <td>No Events currently.</td>
                </tr>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EventList;
