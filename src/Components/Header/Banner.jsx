const Banner = () => {
  return (
    <div className="lg:flex lg:justify-between items-center grid bg-gray-300 rounded-md">
      <div className="p-8 space-y-3">
        <h1 className="text-5xl font-semibold">
          One Step Closer To Your <span className="text-violet-600">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the <br /> information you need. Its your future.
          Come find it. Manage all <br />your job application from start to finish.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div>
        <img src="../../../public/images/user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
