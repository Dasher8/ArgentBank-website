import React from "react";
import Banner from "../../components/banner";
import IconChat from "../../assets/img/icon-chat.png";
import IconMoney from "../../assets/img/icon-money.png";
import IconSecurity from "../../assets/img/icon-security.png";
import IconChat1 from "../../assets/img/icon-chat.webp";
import IconMoney1 from "../../assets/img/icon-money.webp";
import IconSecurity1 from "../../assets/img/icon-security.webp";
import Feature from "../../components/features";
export default function Home() {
  const features = [
    {
      iconSrc: IconChat,
      iconSrcSet: IconChat1,
      altText: "Chat Icon",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      iconSrc: IconMoney,
      iconSrcSet: IconMoney1,
      altText: "Chat Icon",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      iconSrc: IconSecurity,
      iconSrcSet: IconSecurity1,
      altText: "Chat Icon",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <>
      <Banner />
      <main className="home">
        <section className="features">
          {features.map((feature, index) => (
            <Feature
              key={index}
              iconSrc={feature.iconSrc}
              iconSrcSet={feature.iconSrcSet}
              altText={feature.altText}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </main>
    </>
  );
}
