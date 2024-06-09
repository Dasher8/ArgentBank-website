import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="error-page">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">Page is not found</h2>
      <Link to={"/"} className="return-link">
        <p>Return to Home page</p>
      </Link>
    </main>
  );
}
