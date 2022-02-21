import React from "react";
import Country from "./components/Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [countries, setCountries] = React.useState([]);
  const [filteredCountries, setFilteredCountries] = React.useState([]);
  const [region, setRegion] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [failedSearch, setFailedSearch] = React.useState(false);

  React.useEffect(async () => {
    const results = await fetch("https://restcountries.com/v2/all");
    const data = await results.json();
    setCountries(data);
  }, []);

  React.useEffect(() => {
    setFailedSearch(false);
    document.getElementById("search-bar").value = "";
    setFilteredCountries(() => {
      return countriesEl.filter((country) => {
        return country.props.region === region;
      });
    });
  }, [region]);

  function handleChange(e) {
    setRegion(e.target.value);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function search(e) {
    setFailedSearch(false);

    const term = e.target.value.toLowerCase();

    let results = countriesEl.filter((country) => {
      return region === ""
        ? country.props.name.toLowerCase().includes(term)
        : country.props.name.toLowerCase().includes(term) &&
            country.props.region === region;
    });

    !results.length && setFailedSearch(true);

    setFilteredCountries(results);
  }

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
        <button className="header__dark-mode-toggle">
          <FontAwesomeIcon icon={faMoon} />
          Dark Mode
        </button>
      </header>
      <main className="main">
        <div className="container">
          <div className="main__search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              className="main__search"
              id="search-bar"
              placeholder="Search for a country..."
              onChange={(e) => {
                search(e);
              }}
            />
          </div>
          <div className="main__filter-container">
            <select
              className="main__filter"
              defaultValue=""
              onChange={(e) => handleChange(e)}
            >
              <option value="">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          {failedSearch ? (
            <p className="main__error">
              Your search returned no results. Please try again.
            </p>
          ) : (
            <div className="main__countries">
              {filteredCountries.length ? filteredCountries : countriesEl}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
