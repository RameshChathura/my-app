import React from "react";
import NameListItem from "./NameListItem";

function NameList() {
  const nameList = [
    {
      name: {
        first: "Ramesh",
        last: "Chathura",
      },
      address: {
        city: "ginigathena",
        village: "bagathuluwa",
      },
      email: "c.r.subasena@gmail.com",
      dob: {
        date: "1996-07-13",
        age: 24,
      },
    },
    {
      name: {
        first: "KAVINDU",
        last: "mihiran",
      },
      address: {
        city: "ginigathena",
        village: "ambagamuwa",
      },
      email: "mihi@gmail.com",
      dob: {
        date: "1996-08-23",
        age: 24,
      },
    },
    {
      name: {
        first: "Isuru",
        last: "Rajitha",
      },
      address: {
        city: "Millagahamula",
        village: "Kalugala",
      },
      email: "isuru@gmail.com",
      dob: {
        date: "1996-09-22",
        age: 24,
      },
    },
  ];

  const nameListArray = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          name={`${aName.name.first} ${aName.name.last}`}
          address={`${aName.address.city} - ${aName.address.village}`}
          mail={aName.email}
          birthday={`${aName.dob.date}  ${aName.dob.age}`}
        />
      );
    });
  };
  return (
    <div>
      <h1>Name List</h1>
      <hr />
      <ul>{nameListArray()}</ul>
    </div>
  );
}
export default NameList;
