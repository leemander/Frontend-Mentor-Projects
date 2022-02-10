import React from "react";

export default function Keyword(props) {
  return (
    <button className="job__keyword" onClick={props.addFilter}>
      {props.word}
    </button>
  );
}
