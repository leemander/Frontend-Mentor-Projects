import React from "react";
import Country from "./components/Country";

export default function App() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(async () => {
    const results = await fetch("https://restcountries.com/v2/all");
    const data = await results.json();
    setCountries(data);
  }, []);

  const countriesEl = countries.map((country, index) => {
    return (
      <Country
        key={index + 1}
        flag={country.flag}
        name={country.name}
        pop={country.population}
        region={country.region}
        capital={country.capital}
      />
    );
  });

  return (
    <div>
      <header className="header">
        <h1>Where in the world?</h1>
        <button className="header__dark-mode-toggle">Dark mode</button>
      </header>
      <main className="main">
        <div className="container">
          <div className="main__search-container">
            <span>🔎</span>
            <input
              className="main__search"
              placeholder="Search for a country..."
            />
          </div>
          <select className="main__filter" defaultValue="Filter by Region">
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
          <div className="main__countries">{countriesEl}</div>
        </div>
      </main>
    </div>
  );
}
