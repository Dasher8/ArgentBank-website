import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dropdown({ date, details, spend, balance, transactionsType, category, note, onCategoryChange, onNoteChange }) {
  const [isOpen, setIsOpen] = useState(false);

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
      <FontAwesomeIcon icon="fa-solid fa-chevron-up" className={`fa-solid fa-chevron-up`} />
    </button>
    <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
      <p>Transaction type {transactionsType}</p>
      <p>
        Category 
        <select value={category} onChange={e => onCategoryChange(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </p>
      <p>
        Note 
        <input 
          type="text" 
          value={note} 
          onChange={e => onNoteChange(e.target.value)} 
        />
      </p>
    </div>
  </div>
  );
}

export default Dropdown;
