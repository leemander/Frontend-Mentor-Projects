import React from "react";
import Job from "./Job.js";
import data from "./data.json";

export default function App() {
  const dataArr = data;
  const [filters, setFilters] = React.useState([]);
  const [filteredJobs, setFilteredJobs] = React.useState([]);

  const jobsEl = dataArr.map((job) => {
    //populates an array of keywords which can be used to filter jobs based on the properties 'role', 'level', 'languages', and 'tools' found in the provided data

    const keywordsArr = [];

    keywordsArr.push(job.role);
    keywordsArr.push(job.level);

    job.languages.forEach((language) => {
      keywordsArr.push(language);
    });

    if (job.tools.length) {
      job.tools.forEach((tool) => {
        keywordsArr.push(tool);
      });
    }

    return (
      <Job
        key={job.id}
        company={job.company}
        logo={job.logo}
        new={job.new}
        featured={job.featured}
        position={job.position}
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
        keywords={keywordsArr}
        addFilter={addFilter}
      />
    );
  });

  function addFilter(keyword) {
    setFilters((oldFilters) => [...oldFilters, keyword]);
    setFilteredJobs(filterJobs);
  }

  function deleteFilter(index) {
    setFilters((oldFilters) => {
      return oldFilters.filter((filter) => filters.indexOf(filter) !== index);
    });
  }

  function clearFilters() {
    setFilters([]);
  }

  function filterJobs() {
    const filteredJobsArr = [];
    jobsEl.forEach((el) => {
      let pass;
      for (let i = 0; i < filters.length; i++) {
        el.props.keywords.indexOf(filters[i]) !== -1
          ? (pass = true)
          : (pass = false);
      }
      pass && filteredJobsArr.push(el);
    });
    return filteredJobsArr;
  }

  const filtersEl = filters.map((filter, index) => {
    return (
      <button key={index + 1} onClick={() => deleteFilter(index)}>
        {filter}
      </button>
    );
  });

  return (
    <div>
      <header></header>
      <main>
        {filtersEl.length > 0 && (
          <div className="main__filters">
            {filtersEl}
            <button className="filters__clear" onClick={clearFilters}>
              Clear
            </button>
          </div>
        )}
        {jobsEl}
      </main>
    </div>
  );
}
