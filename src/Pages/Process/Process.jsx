const Process = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-teal-light">
          How I Work
        </h1>

        <div className="relative space-y-12 md:space-y-0">
          {/* Vertical Line for Timeline on Medium+ Screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-dark h-full"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-lg font-bold text-background z-10 shadow-lg">
              1
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg w-full md:w-5/12 md:ml-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-teal-light">Consultation & Planning</h2>
              <p className="text-sm md:text-base">
                I start by consulting with you to understand your requirements, goals, and vision. After gathering the
                necessary insights, I craft a detailed roadmap to guide the project’s development.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-lg font-bold text-background z-10 shadow-lg">
              2
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg w-full md:w-5/12 md:mr-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-teal-light">System Design & Architecture</h2>
              <p className="text-sm md:text-base">
                With requirements in hand, I design a robust system architecture for both backend and frontend,
                including API structures, database schemas, and UI/UX wireframes.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-lg font-bold text-background z-10 shadow-lg">
              3
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg w-full md:w-5/12 md:ml-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-teal-light">Development</h2>
              <p className="text-sm md:text-base">
                I dive into coding, building the backend with databases and APIs, while crafting responsive,
                user-friendly frontend interfaces, often using <span className="font-semibold text-teal">Redux</span>{" "}
                for state management.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-lg font-bold text-background z-10 shadow-lg">
              4
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg w-full md:w-5/12 md:mr-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-teal-light">Testing & Optimization</h2>
              <p className="text-sm md:text-base">
                I conduct thorough testing—unit, integration, and load tests—to ensure stability, performance, and a
                seamless user experience, optimizing as needed.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-lg font-bold text-background z-10 shadow-lg">
              5
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg w-full md:w-5/12 md:ml-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-teal-light">Deployment & Maintenance</h2>
              <p className="text-sm md:text-base">
                I deploy the app using platforms like <span className="font-semibold text-teal">AWS</span>,{" "}
                <span className="font-semibold text-teal">Heroku</span>, or{" "}
                <span className="font-semibold text-teal">DigitalOcean</span>, offering ongoing maintenance to keep it
                running smoothly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-card py-10 px-6 rounded-xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-light">
            Let’s Build Your Next Web Application Together
          </h2>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dushimec515@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-teal text-foreground font-semibold rounded-md hover:bg-teal-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Process;