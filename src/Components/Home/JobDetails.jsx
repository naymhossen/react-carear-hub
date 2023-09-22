import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const paInt = parseInt(id);
  const job = jobs.find((job) => job.id === paInt);
  console.log(job);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-8">Job Detailes</h2>

      <div className="grid md:grid-cols-4 gap-3 mt-10 pb-10">
        <div className="border md:col-span-3 p-3 rounded-xl space-y-3">
          <p>
            <span className="font-bold">Job Description:</span> {job.job_description}
          </p>
          <p><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
          <p><span className="font-bold">Educational Requirements: <br /></span> {job.educational_requirements}</p>
          <p><span className="font-bold">Experiences: <br /> </span>{job.experiences}</p>
        </div>
        <div className="border space-y-3 p-3 rounded-xl bg-violet-300">
            <h2 className="font-bold text-xl">Job Details</h2>
            <div className="border w-11/12 mx-auto"></div>
            <p><span className="font-bold">Salary:</span>{job.salary} (Per Month)</p>
            <p><span className="font-bold">Job Title :</span>{job.job_title}</p>

            <h1 className="text-xl font-bold">Contact Information</h1>
            <div className="border w-11/12 mx-auto"></div>

            <p><span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
            <p><span className="font-bold">Email: </span>{job.contact_information.email}</p>
            <p><span className="font-bold">Address: </span>{job.contact_information.address}</p>



          <button className="btn btn-primary w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
