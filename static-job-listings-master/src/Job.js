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
    <article className={props.featured ? "job featured" : "job"}>
      <div className="job__data">
        <img className="job__logo" src={props.logo} />
        <div>
          <div className="job__company-container">
            <h2 className="job__company">{props.company}</h2>
            {props.new && (
              <span className="job__new">
                <p>NEW!</p>
              </span>
            )}
            {props.featured && <span className="job__featured">FEATURED</span>}
          </div>
          <a href="" className="job__position">
            {props.position}
          </a>
          <div className="job__info">
            <span>{props.postedAt}</span>
            <span>&#8226;</span>
            <span>{props.contract}</span>
            <span>&#8226;</span>
            <span>{props.location}</span>
          </div>
        </div>
      </div>
      <hr className="mobile-only"></hr>
      <div className="job__keywords">{keywordsEl}</div>
    </article>
  );
}
