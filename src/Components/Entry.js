import "antd/dist/antd.css";
import "./style.css";
import { Table } from "antd";
import React, { useState } from "react";

export default function Entry() {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      city: "Virudhunagar",
      amount: 200,
    },
    { id: 2, name: "Stella", city: "Virudhunagar", amount: 500 },
    { id: 3, name: "Mary", city: "Virudhunagar", amount: 100 },
  ]);
  const columns = [{ key: "1", title: "ID" }];

  const onAddNewEntry = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newEntry = {
      id: randomNumber,
      name: "Name " + randomNumber,
      city: randomNumber + "patti",
    };
  };
  return (
    <div>
      {/* <Button>Add New Entry </Button> */}
      <Table columns={columns} dataSource={dataSource}></Table>
    </div>
  );
}
