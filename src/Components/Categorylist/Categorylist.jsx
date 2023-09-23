import { useEffect, useState } from "react";

const Categorylist = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div className="text-center mt-20">
      <h2 className="text-6xl text-center font-semibold">Job Category List</h2>
      <p className="font-bold mt-3">
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-16">
        {category.map((job) => (
          <div key={job.id}>
            <div>
              <div className="p-5 text-left space-y-3 rounded-xl bg-slate-200">
                <img src={job.logo} alt="" />
                <h2 className="text-2xl font-semibold">{job.category_name}</h2>
                <p>{job.availability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorylist;