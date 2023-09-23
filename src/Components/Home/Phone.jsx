import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Phone = ({ phone }) => {
    const {brand, image, phone_name, slug} = phone;
  console.log(phone);
  return (
    <div>
        <div className="border rounded-xl bg-white p-5">
            <div className="flex justify-center"><img src={image} alt="" /></div>
            <div className="space-y-2 mt-3">
                <h1 className="text-2xl font-semibold">{brand}</h1>
                <h1 className="font-bold">{phone_name}</h1>
                <p>{slug}</p>
            </div>
            <Link><button className="btn btn-primary w-full mt-5 hover:bg-violet-800">Buy Now</button></Link>
        </div>
    </div>
  );
};

export default Phone;
