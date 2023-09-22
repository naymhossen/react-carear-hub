import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-9/12 mx-auto mt-44 items-center flex gap-5 justify-center">
            <h1>Oops!!!!</h1>
            <Link to="/"><button className="btn btn-secondary rounded-xl">Go Back</button></Link>
        </div>
    );
};

export default Error;