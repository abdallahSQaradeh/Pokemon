import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./drop-down-filter.style.scss";

export default function DropDownFilter() {
  return (
    <div className="drop-down">
      <button type="button" className="drop-down-button">
        drop
        <div className="drop-down-icon">
          <AiOutlineDown />
        </div>
      </button>
    </div>
  );
}
