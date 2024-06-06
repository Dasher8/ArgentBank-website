import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../redux/slices/userSlice';
import Balance from '../../components/balance';
import LayoutPrivate from '../../layout/private';

export default function Profile() {
  const dispatch = useDispatch();
  const { firstName, lastName, userName, error } = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token); // Assuming you store the token in the auth state

  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);

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

  const title = "Argent Bank Checking (x8349)";
  const amount = "$2,082.79";
  const description = "Available Balance";

  return (
    <LayoutPrivate>
      <main className="main bg-dark">
        <div className="header">
          <h1>
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
              <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
          ) : (
            <>
              <button className="edit-button" onClick={handleEdit}>Edit User Name</button>
            </>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Balance title={title} amount={amount} description={description} />
        <Balance title={title} amount={amount} description={description} />
        <Balance title={title} amount={amount} description={description} />
      </main>
    </LayoutPrivate>
  );
}
