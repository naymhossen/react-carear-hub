import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";
import { useState } from "react";

const Jobs = () => {
  const phones = useLoaderData();
  //   console.log(phones);
  const [phoneLength, setPhoneLength] = useState(12);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState([]);

  const handleSearch = () => {
    // console.log(phones.data);
    const searchPhones = phones.data.filter((phone) => phone.phone_name.includes(search));
    setShowSearch(searchPhones);
  };
  const displayedPhones = search ? showSearch : phones.data.slice(0, phoneLength);

  return (
    <div className="mb-14">
      <div className="flex gap-3 mt-10">
        <input
          className=" border p-3 rounded-xl"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name=""
          id=""
          placeholder="find your phone"
        />
        <button onClick={() => handleSearch()} className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md mt-5">
        {displayedPhones.map((phone) => (
          <Phone key={phone.slug} phone={phone}></Phone>
        ))}
      </div>
      <div className={phoneLength === phones.length && "hidden"}>
        <div className="flex justify-end mt-5 mb-10">
          <button onClick={() => setPhoneLength(phones.length)} className="btn btn-primary">
            See More..
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;