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

  const [darkMode, setDarkMode] = React.useState(false);

  function renderFollowers(figure) {
    //formats 5 digit numbers to 'Xk'
    return figure.toString().length === 5
      ? figure.toString()[0] + figure.toString()[1] + "k"
      : figure;
  }

  const totalsEl = totals.map((total, index) => {
    return (
      <Total
        key={index}
        service={total.service}
        user={total.username}
        followers={renderFollowers(total.followers)}
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
        amount={renderFollowers(daily.amount)}
        gain={daily.gain}
        difference={daily.difference}
      />
    );
  });

  darkMode
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");

  return (
    <>
      <header className="header">
        <div className="container">
          <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <hr></hr>
          <div className="header__dark-mode-toggle-container">
            <span>Dark Mode</span>
            <button
              className="header__dark-mode-toggle"
              aria-label="toggle dark mode on and off"
              onClick={() => {
                setDarkMode((prev) => !prev);
              }}
            ></button>
          </div>
        </div>
      </header>
      <div className="container">
        <main className="main">
          <section className="main__totals">{totalsEl}</section>
          <section className="main__dailies">
            <h2>Overview - Today</h2>
            <div className="dailies-container">{dailiesEl}</div>
          </section>
        </main>
      </div>
    </>
  );
}
