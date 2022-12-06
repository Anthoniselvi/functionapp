import React from "react";
import FrontPage from "./Components.css/FrontPage";
import Signin from "./Components.css/Signin";
import Signup from "./Components.css/Signup";
import Events from "./Components.css/Events";
import Entry from "./Components.css/Entry";
// import Form from "./Components.css/Form";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddNewEvent from "./Components.css/AddNewEvent";
import EventList from "./Components.css/EventList";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<FrontPage />} />
            <Route path="frontpage" element={<FrontPage />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="eventlist" element={<EventList />} />
            <Route path="events" element={<Events />} />
            <Route path="addnewevent" element={<AddNewEvent />} />
            <Route path="entry" element={<Entry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
