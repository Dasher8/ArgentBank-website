import React from "react";

import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import IconChat from '../../assets/img/icon-chat.png';
import IconMoney from '../../assets/img/icon-money.png';
import IconSecurity from '../../assets/img/icon-security.png';
import "../../../src/index.css";
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <main>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
          <img src={IconChat} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={IconMoney}
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature-item">
          <img
            src={IconSecurity}
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
      <Footer/>
    </div>
  );
}
