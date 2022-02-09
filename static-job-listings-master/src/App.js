import React from "react";
import Job from "./Job.js";

import remove from "./images/icon-remove.svg";

//company logos
import account from "./images/account.svg";
import eyecam from "./images/eyecam-co.svg";
import faceit from "./images/faceit.svg";
import loop from "./images/loop-studios.svg";
import manage from "./images/manage.svg";
import myhome from "./images/myhome.svg";
import photosnap from "./images/photosnap.svg";
import shortly from "./images/shortly.svg";
import airFilter from "./images/the-air-filter-company.svg";

import data from "./data.json";

const dataArr = data;

const jobsEl = dataArr.map((job) => {
  return (
    <Job
      key={job.id}
      company={job.company}
      new={job.new}
      featured={job.featured}
      position={job.position}
      postedAt={job.postedAt}
      contract={job.contract}
      location={job.location}
      role={job.role}
      level={job.level}
      languages={job.languages}
      tools={job.tools}
    />
  );
});

export default function App() {
  return <main>{jobsEl}</main>;
}
