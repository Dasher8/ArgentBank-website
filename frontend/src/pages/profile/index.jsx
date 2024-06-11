import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../redux/slices/userSlice";
import Balance from "../../components/balance";

export default function Profile() {
  const dispatch = useDispatch();
  const { firstName, lastName, userName, error } = useSelector(
    (state) => state.user
  );
  const token = useSelector((state) => state.auth.token); // Assuming you store the token in the auth state

  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    setNewUserName(userName);
  }, [userName])

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (token) {
      dispatch(updateUserName({ token, userName: newUserName }));
      setIsEditing(false);
    } else {
      console.log("No token found");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewUserName(userName);
  };

  const balances = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="welcome-title">
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <p>Username: {userName}</p>
        {isEditing ? (
          <form onSubmit={handleSave}>
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <button className="edit-button" onClick={handleEdit}>
              Edit User Name
            </button>
          </>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="balance-container">
      {balances.map((balance, index) => (
          <Balance
            key={index}
            title={balance.title}
            amount={balance.amount}
            description={balance.description}
          />
        ))}
      </div>
    </main>
  );
}
