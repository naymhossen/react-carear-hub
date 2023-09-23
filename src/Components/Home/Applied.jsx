/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const Applied = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  //jobs filter section

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter((job) => job.remote_or_onsite === "Remote");
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter((job) => job.remote_or_onsite === "Onsite");
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobesId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobesId.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobesId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      //   console.log(jobsApplied, jobs, storedJobesId);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-end mt-10">
      <details className="dropdown">
        <summary className="m-1 btn">Filter By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}>
            <a>All Jobs</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      </div>

      <div className="mb-14">
        {displayJobs.map((job) => (
          <div key={job.id}>
            <div className="flex justify-between items-center border p-5 rounded-xl mt-5">
              <div className="flex justify-center items-center gap-14">
                <div className="border bg-slate-300 rounded-xl p-8">
                  <img className="w-44" src={job.logo} alt="" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{job.job_title}</h2>
                  <p className="font-bold">{job.company_name}</p>
                  <div className="flex gap-8">
                    <h2>{job.remote_or_onsite}</h2>
                    <h2>{job.job_type}</h2>
                  </div>
                  <div className="flex items-center gap-8">
                    <div>
                      <p>{job.location}</p>
                    </div>
                    <div>
                      <p>{job.salary}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-success">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applied;
