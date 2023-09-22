import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

  return (
    <div className="space-y-2 bg-gray-300 p-5 rounded-xl">
      <img src={logo} alt="" />
      <h2 className="text-2xl font-semibold">{job_title}</h2>
      <h3 className="font-semibold">{company_name}</h3>
      <div className="flex gap-5">
        <div className="border border-yellow-800 rounded-md p-1">
          <h2>{remote_or_onsite}</h2>
        </div>
        <div className="border border-yellow-800 rounded-md p-1">
          <h2>{job_type}</h2>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="font-medium">
          <h2>{location}</h2>
        </div>
        <div>
          <h2>{salary}</h2>
        </div>
      </div>
      <div>
        <Link to={`/job/${id}`}>
          <button className="btn btn-warning rounded-xl">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
