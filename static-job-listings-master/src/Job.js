import React from "react";
import Keyword from "./Keyword";

export default function Job(props) {
  const keywordsArr = [];

  function populateKeywords() {
    keywordsArr.push(props.role);
    keywordsArr.push(props.level);
    props.languages.forEach((language) => {
      keywordsArr.push(language);
    });
    if (props.tools.length) {
      props.tools.forEach((tool) => {
        keywordsArr.push(tool);
      });
    }
  }

  populateKeywords();

  const keywordsEl = keywordsArr.map((keyword, index) => {
    return <Keyword word={keyword} key={index + 1} />;
  });

  return (
    <article className="job">
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
