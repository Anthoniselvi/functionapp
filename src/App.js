import React from "react";
import FrontPage from "./Components.css/FrontPage";
import Signin from "./Components.css/Signin";
import Signup from "./Components.css/Signup";
import Entry from "./Components.css/Entry";
// import Form from "./Components.css/Form";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddNewEvent from "./Components.css/AddNewEvent";
import EventList from "./Components.css/EventList";
import EventsForm from "./Components.css/EventsForm";
import EntryForm from "./Components.css/EntryForm";
import EntryList from "./Components.css/EntryList";

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
            <Route path="eventsform" element={<EventsForm />} />
            <Route path="addnewevent" element={<AddNewEvent />} />
            <Route path="entryform" element={<EntryForm />} />
            <Route path="entrylist" element={<EntryList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
