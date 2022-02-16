import React from "react";
import Job from "./Job.js";
import data from "./data.json";

export default function App() {
  const dataArr = data;
  const [filters, setFilters] = React.useState([]);
  const filteredJobs = [];

  const jobsEl = dataArr.map((job) => {
    const keywordsArr = [];

    //populates an array of keywords which can be used to filter jobs based on the properties 'role', 'level', 'languages', and 'tools' found in the provided data

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
    setFilters((oldFilters) => {
      return oldFilters.indexOf(keyword)
        ? [...oldFilters, keyword]
        : oldFilters;
    });
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
    jobsEl.forEach((el) => {
      let pass = false;
      for (let i = 0; i < filters.length; i++) {
        if (el.props.keywords.indexOf(filters[i]) !== -1) {
          pass = true;
        } else {
          return;
        }
      }
      pass && filteredJobs.push(el);
    });
  }

  filterJobs();

  const filtersEl = filters.map((filter, index) => {
    return (
      <div className="filter" key={index + 1}>
        <span>{filter}</span>
        <button onClick={() => deleteFilter(index)}>
          <span>Remove filter</span>
          <img alt="remove filter" src={"./images/icon-remove.svg"} />
        </button>
      </div>
    );
  });

  return (
    <div>
      <header>
        <h1>Job listings</h1>
      </header>
      <main>
        <div className="container">
          {filtersEl.length > 0 && (
            <div className="filters-container">
              <div className="filters">{filtersEl}</div>
              <button className="filters__clear" onClick={clearFilters}>
                Clear
              </button>
            </div>
          )}
          {filteredJobs.length < 1 ? jobsEl : filteredJobs}
        </div>
      </main>
    </div>
  );
}
