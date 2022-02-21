import React from "react";

export default function Detail(props) {
  return (
    <section>
      <button className="detail__back">Back</button>
      <img src={props.flag} className="detail__flag" />
      <h2 className="detail__name">{props.name}</h2>
      <ul>
        <li>
          <strong>Native Name: </strong>
          {props.nativeName}
        </li>
        <li>
          <strong>Population: </strong>
          {props.pop}
        </li>
        <li>
          <strong>Region: </strong>
          {props.region}
        </li>
        <li>
          <strong>Subregion: </strong>
          {props.subregion}
        </li>
        <li>
          <strong>Capital: </strong>
          {props.capital}
        </li>
      </ul>
      <ul>
        <li>
          <strong>Top Level Domain: </strong>
          {props.domain}
        </li>
        <li>
          <strong>Currency: </strong> {props.currencies}
        </li>
        <li>
          <strong>Languages: </strong> {props.languages}
        </li>
      </ul>
      <h3>Border Countries:</h3>
      {props.borders}
    </section>
  );
}
