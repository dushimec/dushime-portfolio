import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaServer, FaCode } from "react-icons/fa";
import profile from '../../images/chriss.png'

const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>DUSHIME Christian - Full-Stack Developer</title>
        <meta
          name="description"
          content="DUSHIME Christian is a Full-Stack Developer specializing in backend solutions and cross-platform mobile apps. Explore my portfolio and contact me for scalable web and mobile applications."
        />
        <meta
          name="keywords"
          content="DUSHIME Christian, Full-Stack Developer, backend solutions, Flutter, web development, mobile development, portfolio, scalable applications"
        />
      </Helmet>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-light text-center md:text-left">
              DUSHIME Christian
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground text-center md:text-left">
              Full-Stack Developer Specializing in Backend & Flutter Mobile Apps
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md text-center md:text-left">
              I'm a **Full-Stack Developer** focused on **Node.js, TypeScript, and MongoDB**, building scalable backend systems, modern web apps with React, and cross-platform mobile apps with Flutter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full">
              <Link
                to="/portfolio"
                className="flex items-center justify-center px-6 py-3 bg-teal text-foreground font-semibold rounded-md hover:bg-teal-light transition-all duration-300 w-full sm:w-auto"
              >
                <FaCode className="mr-2" /> View Portfolio
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 bg-transparent border border-teal text-teal font-semibold rounded-md hover:bg-teal hover:text-foreground transition-all duration-300 w-full sm:w-auto"
              >
                <FaServer className="mr-2" /> Contact Me
              </Link>
            </div>
          </div>

          {/* Right: Profile Photo with Circling Dots */}
          <div className="relative flex justify-center md:w-1/2">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Profile Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg border-4 border-teal-dark z-10">
                <div className="w-full h-full bg-teal-dark flex items-center justify-center text-foreground opacity-50">
                  <img src={profile} alt="DUSHIME Christian" className="w-full h-full object-cover " />
                </div>
              </div>

              {/* Circling Dots Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[calc(100%+2rem)] h-[calc(100%+2rem)] relative animate-spin-slow">
                  <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-teal-light rounded-full top-0 left-1/2 -translate-x-1/2"></span>
                  <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-teal rounded-full bottom-0 left-1/2 -translate-x-1/2"></span>
                  <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-teal-dark rounded-full top-1/2 left-0 -translate-y-1/2"></span>
                  <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-teal-light rounded-full top-1/2 right-0 -translate-y-1/2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-semibold text-teal-light">Experienced Backend Developer</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              I deliver high-performance backend systems using Node.js and Express.js, ensuring seamless integration with databases and third-party services.
            </p>
          </div>
          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-semibold text-teal-light">Frontend & Mobile Expertise</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              I create dynamic web interfaces with React.js and Redux, and cross-platform mobile apps using Flutter for seamless user experiences.
            </p>
          </div>
          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-semibold text-teal-light">Comprehensive Solutions</h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              From backend APIs to mobile and web applications, I deliver scalable, reliable, and efficient full-stack solutions for diverse projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
