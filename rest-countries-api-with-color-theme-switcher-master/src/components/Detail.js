import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
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
    <section className="detail">
      <button className="detail__back" onClick={props.closeDetail}>
        <FontAwesomeIcon icon={faLeftLong} />
        Back
      </button>
      <div className="desktop-flex">
        <div className="detail__flag-container">
          <img src={props.flag} className="detail__flag" />
        </div>
        <div className="detail__info">
          <h2 className="detail__name">{props.name}</h2>
          <div className="flex">
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
              {props.capital && (
                <li>
                  <strong>Capital: </strong>
                  {props.capital}
                </li>
              )}
            </ul>
            <ul className="detail__facts">
              <li>
                <strong>Top Level Domain: </strong>
                {props.domain}
              </li>
              {props.currencies.length > 0 && (
                <li>
                  <strong>Currencies: </strong> {currencies}
                </li>
              )}
              <li>
                <strong>Languages: </strong> {languages}
              </li>
            </ul>
          </div>
          {props.borders.length > 0 && (
            <div className="detail__borders">
              <h3>Border Countries:</h3>
              <div className="detail__borders-container">{props.borders}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
