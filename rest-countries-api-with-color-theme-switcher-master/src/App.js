import React from "react";
import Country from "./components/Country";
import Detail from "./components/Detail";
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
  const [selectedCountry, setSelectedCountry] = React.useState();

  React.useEffect(async () => {
    const results = await fetch("https://restcountries.com/v2/all");
    const data = await results.json();
    setCountries(data);
  }, []);

  React.useEffect(() => {
    filterResults();
  }, [region, searchTerm]);

  function handleFilterChange(e) {
    setRegion(e.target.value);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function handleBtnClick(index) {
    generateDetail(index);
  }

  function filterResults() {
    setFailedSearch(false);
    if (region && !searchTerm) {
      setFilteredCountries(() => {
        return countriesEl.filter((country) => {
          return country.props.region === region;
        });
      });
    } else if (region && searchTerm) {
      let results = countriesEl.filter((country) => {
        return (
          country.props.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          country.props.region === region
        );
      });
      !results.length && setFailedSearch(true);
      setFilteredCountries(results);
    } else if (searchTerm && !region) {
      let results = countriesEl.filter((country) => {
        return country.props.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      !results.length && setFailedSearch(true);
      setFilteredCountries(results);
    } else {
      setFilteredCountries([]);
    }
  }

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  function generateDetail(index) {
    const country = countries[index];
    const population = formatNumber(country.population);
    const currencies = country.currencies.map((currency) => currency.name);
    const languages = country.languages.map((language) => language.name);
    const bordersEl = [];

    function bordersGenerator(borders) {
      if (borders) {
        borders.forEach((code) => {
          countries.forEach((country, index) => {
            if (country.alpha3Code === code) {
              bordersEl.push(
                <button
                  key={index + 1}
                  className="detail__border-btn"
                  onClick={() => handleBtnClick(index)}
                >
                  {country.name}
                </button>
              );
            }
          });
        });
        return bordersEl;
      }
    }

    bordersGenerator(country.borders);

    setSelectedCountry(
      <Detail
        name={country.name}
        flag={country.flag}
        pop={population}
        region={country.region}
        capital={country.capital}
        subregion={country.subregion}
        languages={languages}
        nativeName={country.nativeName}
        domain={country.topLevelDomain}
        currencies={currencies}
        borders={bordersEl}
        closeDetail={() => {
          setSelectedCountry();
        }}
      />
    );

    window.scroll(0, 0);
  }

  const countriesEl = countries.map((country, index) => {
    const population = formatNumber(country.population);
    return (
      <Country
        key={index + 1}
        flag={country.flag}
        name={country.name}
        pop={population}
        region={country.region}
        capital={country.capital}
        onClick={() => generateDetail(index)}
      />
    );
  });

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Where in the world?</h1>
          <button className="header__dark-mode-toggle">
            <FontAwesomeIcon icon={faMoon} />
            Dark Mode
          </button>
        </div>
      </header>
      <main className="main">
        {!selectedCountry ? (
          <div className="container">
            <div className="flex">
              <div className="main__search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  className="main__search"
                  id="search-bar"
                  placeholder="Search for a country..."
                  onChange={(e) => {
                    handleSearch(e);
                  }}
                  value={searchTerm}
                />
              </div>
              <div className="main__filter-container">
                <select
                  className="main__filter"
                  onChange={(e) => handleFilterChange(e)}
                  value={region}
                >
                  <option value="">All Regions</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">Americas</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
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
        ) : (
          <div className="container">{selectedCountry}</div>
        )}
      </main>
    </div>
  );
}
