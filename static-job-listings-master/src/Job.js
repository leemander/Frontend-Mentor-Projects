import React from "react";
import Keyword from "./Keyword";

export default function Job(props) {
  const keywordsEl = props.keywords.map((keyword, index) => {
    return (
      <Keyword
        word={keyword}
        key={index + 1}
        addFilter={() => {
          props.addFilter(keyword);
        }}
      />
    );
  });

  return (
    <article className="job">
      <img className="job__logo" src={props.logo} />
      <h2>{props.company}</h2>
      {props.new && <span>NEW!</span>}
      {props.featured && <span>FEATURED</span>}
      <h3>{props.position}</h3>
      <div>
        <span>{props.postedAt}</span>
        <span>&#8226;</span>
        <span>{props.contract}</span>
        <span>&#8226;</span>
        <span>{props.location}</span>
      </div>
      <hr></hr>
      <div>{keywordsEl}</div>
    </article>
  );
}
