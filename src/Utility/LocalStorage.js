// import { json } from "react-router-dom";

const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("Job-Applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const isExist = storedJobApplications.find((jobId) => jobId === id);
  if (!isExist) {
    storedJobApplications.push(id);
    localStorage.setItem('Job-Applications', JSON.stringify(storedJobApplications))
  }
};

export { saveJobApplication, getStoredJobApplication };
