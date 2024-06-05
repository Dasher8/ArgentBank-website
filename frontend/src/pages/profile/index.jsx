import React from "react";
import Balance from "../../components/balance";
import LayoutPrivate from "../../layout/private";
export default function Profile() {
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
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Balance title={title} amount={amount} description={description} />
        <Balance title={title} amount={amount} description={description} />
        <Balance title={title} amount={amount} description={description} />
      </main>
    </LayoutPrivate>
  );
}
