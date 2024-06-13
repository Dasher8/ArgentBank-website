import React from "react";

export default function Balance( {title, amount, description} ){
    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
        <p className="transaction-button">
          View transactions
        </p>
        </div>
      </section>
    )
}