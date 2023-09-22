import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const Applied = () => {
    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobesId = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => )
        }
    }, []);
    return (
        <div>
            <h2>In Applied page</h2>
        </div>
    );
};

export default Applied;