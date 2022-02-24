import React from "react";

export default function Country(props) {
  return (
    <button className="main__country" onClick={props.onClick}>
      <img className="country__flag" src={props.flag} />
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
          <li>
            <strong>Capital: </strong>
            {props.capital}
          </li>
        </ul>
      </div>
    </button>
  );
}
