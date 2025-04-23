const HeroSection = () => {
    return (
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text Content */}
          <div className="mb-10 md:mb-0 md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 leading-snug mb-6">
              Learn with effective <br />
              classroom based training <br />
              <span className="text-red-400">for real world success</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-amber-600">
              {/* Optional additional text */}
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/Images/Java and react.png"
              alt="Training Illustration"
              className="w-full max-w-[450px] md:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
