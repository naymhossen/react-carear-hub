import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {

    const myBlogs = useLoaderData();
    console.log(myBlogs);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
            {
                myBlogs.map(blog => <Blog key={blog.id} blog={blog}></Blog> )
            }
        </div>
    );
};

export default Blogs;