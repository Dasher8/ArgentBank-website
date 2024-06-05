import React, { useState } from "react";
import LayoutPrivate from "../../layout/private";
import Balance from "../../components/balance";
import Dropdown from "../../components/dropdown";
import "../../index.css";

export default function Transactions() {
  const title = "Argent Bank Checking (x8349)";
  const amount = "$2,082.79";
  const description = "Available Balance";

  const [transactions, setTransactions] = useState([
    {
      date: "27/02/20",
      details: "Golden Sun Bakery",
      spend: "$8.00",
      balance: "$298.00",
      transactionType: "Electronic",
      category: "Food",
      note: "Lorem ipsum",
    },
  ]);
  const handleCategoryChange = (index, newCategory) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index].category = newCategory;
    setTransactions(updatedTransactions);
  };

  const handleNoteChange = (index, newNote) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index].note = newNote;
    setTransactions(updatedTransactions);
  };
  return (
    <LayoutPrivate>
      <Balance title={title} amount={amount} description={description} />
      <div className="transaction-table">
        <div className="transactions-list">
          <p>Date</p>
          <p>Description</p>
          <p>Amount</p>
          <p>Balance</p>
        </div>

        {transactions.map((transaction, index) => (
          <Dropdown
            key={index}
            date={transaction.date}
            details={transaction.details}
            spend={transaction.spend}
            balance={transaction.balance}
            transactionType={transaction.transactionType}
            category={transaction.category}
            note={transaction.note}
            onCategoryChange={(newCategory) =>
              handleCategoryChange(index, newCategory)
            }
            onNoteChange={(newNote) => handleNoteChange(index, newNote)}
          />
        ))}
      </div>
    </LayoutPrivate>
  );
}
