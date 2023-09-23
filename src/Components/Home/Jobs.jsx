import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";

const Jobs = () => {
  const phones = useLoaderData();
  //   console.log(phones);

  return (
    <div>
      <div className="flex gap-3 mt-10">
        <input
          className=" border p-3 rounded-xl"
          type="search"
          name=""
          id=""
          placeholder="find your phone"
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 bg-gray-300 rounded-md p-5">
        {phones.data.map((phone, slug) => (
          <Phone key={phone.slug} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
