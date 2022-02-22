import React from "react";

export default function Detail(props) {
  function listRenderer(arr) {
    return arr.length === 1
      ? arr
      : arr.map((element) => {
          return arr.indexOf(element) + 1 !== arr.length
            ? `${element}, `
            : element;
        });
  }

  const languages = listRenderer(props.languages);
  const currencies = listRenderer(props.currencies);
  return (
    <section>
      <button className="detail__back">Back</button>
      <img src={props.flag} className="detail__flag" />
      <h2 className="detail__name">{props.name}</h2>
      <ul className="detail__facts">
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
      <ul className="detail__facts">
        <li>
          <strong>Top Level Domain: </strong>
          {props.domain}
        </li>
        <li>
          <strong>Currencies: </strong> {currencies}
        </li>
        <li>
          <strong>Languages: </strong> {languages}
        </li>
      </ul>
      <h3>Border Countries:</h3>
      {props.borders}
    </section>
  );
}
