const RecognizedBy = () => {
    return (
      <div className="bg-white py-16 px-4 flex flex-col items-center text-center">
        {/* Heading with two-tone color */}
        <h2 className="text-4xl md:text-5xl font-extrabold">
          <span className="text-[#0c0c3f]">Recognized </span>
          <span className="text-[#2d9cfa]">by</span>
        </h2>

        {/* Image below heading */}
        <div className="mt-8">
          <img
            src="/Images/MCA_Logo_3 1[1].png" // Remove "/public" in src path
            alt="Government Ministry Logo"
            className="w-64 md:w-80 lg:w-[360px] object-contain"
          />
        </div>
      </div>
    );
  };

  export default RecognizedBy;
