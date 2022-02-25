import React from "react";

export default function Country(props) {
  return (
    <section
      className="main__country"
      onClick={props.onClick}
      aria-label="button"
      tabIndex={0}
    >
      <img
        className="country__flag"
        src={props.flag}
        alt={`Flag of ${props.name}`}
      />
      <div className="country__info">
        <h2 className="country__name">{props.name}</h2>
        <ul className="country__facts">
          <li>
            <strong>Population: </strong>
            {props.pop}
          </li>
          <li>
            <strong>Region: </strong>
            {props.region}
          </li>
          {props.capital && (
            <li>
              <strong>Capital: </strong>
              {props.capital}
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
