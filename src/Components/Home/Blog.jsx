import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Blog = ({ blog }) => {
  const { title, body } = blog;

  return (
    <div className="border rounded-md p-3 flex flex-col space-y-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="flex-grow">{body}</p>
        <div className="flex justify-end">
            <Link><button className="btn btn-primary">Read More..</button></Link>
        </div>
    </div>
  );
};

export default Blog;
