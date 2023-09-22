import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mb-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Featured Jobs</h1>
        <p className="font-bold mt-3">
          Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div className="w-9/12 mx-auto grid lg:grid-cols-2 gap-8 mt-8">
        {jobs.slice(0, (dataLength)).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className={dataLength === jobs.length && 'hidden'}>
      <div className="flex justify-center mt-5">
        <button onClick={() => setDataLength(jobs.length)} className="btn btn-warning rounded-xl">See All Jobs</button>
      </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
