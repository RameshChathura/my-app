import React from "react";
import moment from "moment";

function NameListItem(props) {
  return (
    <div>
      <li>
        <p>Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>Birthday: {moment(props.birthday).format("DD-MM-YYYY")}</p>
        <p>Email: {props.mail}</p>
      </li>
    </div>
  );
}
export default NameListItem;
