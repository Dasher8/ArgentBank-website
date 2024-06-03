import React from "react";
import { Link } from "react-router-dom";

export default function Balance( {title, spend, description} ){
    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{spend}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
        <Link to="/transactions" className="transaction-button">
          View transactions
        </Link>
        </div>
      </section>
    )
}