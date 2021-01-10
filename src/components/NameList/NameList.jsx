import React from "react";
import NameListItem from "./NameListItem";

function Namelist() {
  return (
    <div>
      <h1>Name List</h1>
      <ul>
        <NameListItem name="Ramesh" age="25" />
      </ul>
      <hr />
    </div>
  );
}
export default Namelist;
