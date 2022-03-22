import React from "react";
export default function Daily(props) {
  return (
    <article className="dailies__daily">
      <h3 className="daily__metric">{props.metric}</h3>
      <img
        src={`./images/icon-${props.service.toLowerCase()}.svg`}
        alt={props.service}
        className="daily__logo"
      />
      <p className="daily__amount">{props.amount}</p>
      <div
        className={props.gain ? "daily__difference gain" : "daily__difference"}
      >
        <img
          src={props.gain ? "./images/icon-up.svg" : "./images/icon-down.svg"}
          alt={props.gain ? "daily increase" : "daily decrease"}
        />
        <span>{props.difference}%</span>
      </div>
    </article>
  );
}
