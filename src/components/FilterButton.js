import React from "react";

function FilterButton(props) {
  return (
    <a
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </a>
  );
}

export default FilterButton;
