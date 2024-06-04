import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function Dropdown({
  date,
  details,
  spend,
  balance,
  transactionType,
  category,
  note,
  onCategoryChange,
  onNoteChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen && "active"}`}>
      <button className="drop-btn" onClick={toggleDropdown}>
        <span className="date">{date}</span>
        <span className="details">{details}</span>
        <span className="spend">{spend}</span>
        <span className="balance">{balance}</span>
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-up"
          className={`fa-solid fa-chevron-up`}
        />
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        <div className="transaction-type">
          <p className="dropdown-title">Transaction type</p>
          <p>{transactionType}</p>
        </div>
        <div className="custom-select">
          <p className="dropdown-title">Category</p>
          {isEditingCategory ? (
            <select
              value={category}
              onChange={(e) => {
                onCategoryChange(e.target.value);
                setIsEditingCategory(false);
              }}
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          ) : (
            <span className="selected-option">
              {category}
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="pencil-icon"
                onClick={() => setIsEditingCategory(true)}
              />
            </span>
          )}
        </div>
        <div className="note">
          <p className="dropdown-title">Note</p>
          {isEditingNote ? (
            <input
              type="text"
              value={note}
              onChange={(e) => onNoteChange(e.target.value)}
              onBlur={() => setIsEditingNote(false)}
            />
          ) : (
            <span>
              {note}
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="pencil-icon"
                onClick={() => setIsEditingNote(true)}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
