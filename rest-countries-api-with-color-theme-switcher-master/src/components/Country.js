import React from "react";

export default function Country(props) {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <article className="main__country">
      <img className="country__flag" src={props.flag} />
      <div className="country__info">
        <h2 className="country__name">{props.name}</h2>
        <ul className="country__facts">
          <li>
            <strong>Population: </strong>
            {formatNumber(props.pop)}
          </li>
          <li>
            <strong>Region: </strong>
            {props.region}
          </li>
          <li>
            <strong>Capital: </strong>
            {props.capital}
          </li>
        </ul>
      </div>
    </article>
  );
}
