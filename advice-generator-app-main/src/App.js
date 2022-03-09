import React from "react";
import diceIcon from "./images/icon-dice.svg";
import mobileDivider from "./images/pattern-divider-mobile.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";

function App() {
  const [quote, setQuote] = React.useState({});

  React.useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setQuote(data.slip);
  }

  return (
    <main className="card">
      <div className="card__container">
        <h1 className="card__id">Advice #{quote.id}</h1>
        <p className="card__quote">"{quote.advice}"</p>
        <img
          className="card__divider"
          src={window.innerWidth > 500 ? desktopDivider : mobileDivider}
          alt=""
        />
        <button className="card__new" onClick={() => window.location.reload()}>
          <span className="sr-only">generate new advice</span>
          <img src={diceIcon} alt="" />
        </button>
      </div>
    </main>
  );
}

export default App;
