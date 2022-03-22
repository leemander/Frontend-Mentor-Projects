import React from "react";
import Total from "./Total";
import Daily from "./Daily";
export default function App() {
  const totals = [
    {
      service: "Facebook",
      username: "@nathanf",
      followers: 1987,
      gain: true,
      difference: 12,
    },
    {
      service: "Twitter",
      username: "@nathanf",
      followers: 1044,
      gain: true,
      difference: 99,
    },
    {
      service: "Instagram",
      username: "@realnathanf",
      followers: 11000,
      gain: true,
      difference: 1099,
    },
    {
      service: "YouTube",
      username: "Nathan F.",
      followers: 8239,
      gain: false,
      difference: 144,
    },
  ];

  const dailies = [
    {
      service: "Facebook",
      metric: "Page Views",
      amount: 87,
      gain: true,
      difference: 3,
    },
    {
      service: "Facebook",
      metric: "Likes",
      amount: 52,
      gain: false,
      difference: 2,
    },
    {
      service: "Instagram",
      metric: "Likes",
      amount: 5462,
      gain: true,
      difference: 2257,
    },
    {
      service: "Instagram",
      metric: "Profile Views",
      amount: 52000,
      gain: true,
      difference: 1375,
    },
    {
      service: "Twitter",
      metric: "Retweets",
      amount: 117,
      gain: true,
      difference: 303,
    },
    {
      service: "Twitter",
      metric: "Likes",
      amount: 507,
      gain: true,
      difference: 553,
    },
    {
      service: "YouTube",
      metric: "Likes",
      amount: 107,
      gain: false,
      difference: 19,
    },
    {
      service: "YouTube",
      metric: "Total Views",
      amount: 1407,
      gain: false,
      difference: 12,
    },
  ];

  const totalsEl = totals.map((total, index) => {
    return (
      <Total
        key={index}
        service={total.service}
        user={total.username}
        followers={total.followers}
        gain={total.gain}
        difference={total.difference}
      />
    );
  });

  const dailiesEl = dailies.map((daily, index) => {
    return (
      <Daily
        key={index}
        service={daily.service}
        metric={daily.metric}
        amount={daily.amount}
        gain={daily.gain}
        difference={daily.difference}
      />
    );
  });

  return (
    <main>
      <h1>Social Media Tracker</h1>
      <section className="main__totals">{totalsEl}</section>
      <section className="main__dailies">
        <h2>Overview - Today</h2>
        <div className="dailies-container">{dailiesEl}</div>
      </section>
    </main>
  );
}
