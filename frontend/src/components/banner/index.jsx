import React from "react";
import Background from "../../assets/img/bank-tree.jpeg";
export default function Banner() {
  return (
    <div className="hero">
      <img src={Background} alt="" className="hero" />
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}
