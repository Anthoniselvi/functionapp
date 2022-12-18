// import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleEdit = (e) => {
    // console.log({ name, amount, index: localStorage.getItem("editEntry") });
    let entries =
      localStorage.getItem("entries") &&
      localStorage.getItem("entries").length > 0
        ? JSON.parse(localStorage.getItem("entries"))
        : [];

    const newEntries = entries.map((entry, entryIn) => {
      if (entryIn === localStorage.getItem("editEntry")) {
        return { name, amount };
      } else {
        return entry;
      }
    });
    console.log(newEntries);
    localStorage.setItem("entries", JSON.stringify(newEntries));
    navigate(`/entryList?event=${entries.id}`);
  };

  return (
    <>
      <h1> Edit Entry </h1>
      <input value={name} onChange={(e) => handleNameChange(e)} label="Name" />
      <br />
      <input
        value={amount}
        onChange={(e) => handleAmountChange(e)}
        label="Amount"
      />
      <button onClick={handleEdit}>SUBMIT</button>
    </>
  );
}

export default Edit;
