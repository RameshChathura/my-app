import React from "react";

function NameListItem(props) {
  return (
    <div>
      <li>
        <p>{props.name}</p>
        <p>{props.age}</p>
      </li>
    </div>
  );
}
export default NameListItem;
