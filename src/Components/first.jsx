const SkillBanner = () => {
    return (
      <div className="bg-blue-900 text-white py-10 px-6 md:px-16 lg:flex items-center justify-between">

        {/* Left: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Empower Your Professional <br /> Journey With Industry-Ready Skills
          </h1>

          <ul className="text-lg space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✔</span>
              Build real-world projects with in-person collaboration.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✔</span>
              Individually tailored learning approach.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✔</span>
              Mentorship from industry experts.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✔</span>
              Intensive placement assistance.
            </li>
          </ul>

          <button className="mt-4 bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md text-lg transition">
            Enroll Now
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="/Images/employees.png"
            alt="Team Working Illustration"
            className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
          />
        </div>
      </div>
    );
  };

  export default SkillBanner;
