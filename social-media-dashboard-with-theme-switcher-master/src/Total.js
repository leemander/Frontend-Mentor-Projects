import React from "react";

export default function Total(props) {
  return (
    <article className="totals__total">
      <div className="row">
        <img
          className="total__logo"
          src={`./images/icon-${props.service.toLowerCase()}.svg`}
          alt={props.service}
        ></img>
        <span className="total__user">{props.user}</span>
      </div>
      <div className="total__followers-container">
        <p>
          <strong>{props.followers}</strong>
        </p>
        <p className="spaced">followers</p>
      </div>
      <div
        className={props.gain ? "total__difference gain" : "total__difference"}
      >
        <img
          src={props.gain ? "./images/icon-up.svg" : "./images/icon-down.svg"}
          alt={props.gain ? "follower increase" : "follower decrease"}
        ></img>
        <span>{props.difference} Today</span>
      </div>
    </article>
  );
}
