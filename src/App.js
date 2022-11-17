import React from "react";
import FrontPage from "./Components.css/FrontPage";
import Signin from "./Components.css/Signin";
import Signup from "./Components.css/Signup";
import Event from "./Components.css/Event";
import Entry from "./Components.css/Entry";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {/* <FrontPage />
      <Signin />
      <Signup /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<FrontPage />} />
            <Route path="frontpage" element={<FrontPage />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="event" element={<Event />} />
            <Route path="entry" element={<Entry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
