import React from "react";
import FrontPage from "./Components/FrontPage";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import EventListNew from "./Components/EventListNew";
import EventFormNew from "./Components/EventFormNew";
import EntryFormNew from "./Components/EntryFormNew";
import EntryListNew from "./Components/EntryListNew";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<FrontPage />} />
            <Route path="frontpage" element={<FrontPage />} />

            {/* <Route path="signin" element={<Signin />} /> */}
            <Route path="signup" element={<Signup />} />

            <Route path="eventslist" element={<EventListNew />} />
            <Route path="event/new" element={<EventFormNew />} />
            <Route path="entrylist" element={<EntryListNew />} />
            <Route path="entry/new" element={<EntryFormNew />} />

            {/* <Route path="eventsform" element={<EventsForm />} />
            <Route path="addnewevent" element={<AddNewEvent />} />
            <Route path="entryform" element={<EntryForm />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
