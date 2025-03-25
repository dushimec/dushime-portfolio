const Skills = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center text-teal-light">
          Skills & Expertise
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Backend Development */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-light">Backend Development</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <span className="font-semibold text-teal">Node.js</span> – Scalable, high-performance backend apps with Express.js.
              </li>
              <li>
                <span className="font-semibold text-teal">API Design</span> – RESTful APIs, GraphQL, and Microservices.
              </li>
              <li>
                <span className="font-semibold text-teal">Database Management</span>:
                <ul className="mt-2 space-y-2 pl-5 text-sm">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span> <span className="font-semibold text-teal">MongoDB</span> – NoSQL with Mongoose for fast storage & retrieval.
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span> <span className="font-semibold text-teal">MySQL</span> – Structured relational DBs with SQL expertise.
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span> <span className="font-semibold text-teal">Redis</span> – Caching for performance optimization.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-teal">Authentication & Security</span> – JWT, OAuth, OWASP best practices.
              </li>
              <li>
                <span className="font-semibold text-teal">Web Security</span> – Secure APIs and data handling.
              </li>
            </ul>
          </div>

          {/* Frontend Development */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-light">Frontend Development</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <span className="font-semibold text-teal">React.js</span> – Component-based UIs with TypeScript.
              </li>
              <li>
                <span className="font-semibold text-teal">Redux</span> – Complex state management.
              </li>
              <li>
                <span className="font-semibold text-teal">HTML5, CSS3</span> – Responsive, modern designs.
              </li>
              <li>
                <span className="font-semibold text-teal">Tailwind CSS</span> – Rapid, utility-first styling.
              </li>
              <li>
                <span className="font-semibold text-teal">JavaScript (ES6+)</span> – Clean, modular code with TypeScript.
              </li>
            </ul>
          </div>

          {/* DevOps & Infrastructure */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-light">DevOps & Infrastructure</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <span className="font-semibold text-teal">Docker</span> – Containerization for consistent deployments.
              </li>
              <li>
                <span className="font-semibold text-teal">Kubernetes</span> – Scalable orchestration.
              </li>
              <li>
                <span className="font-semibold text-teal">Cloud Platforms</span> – AWS, Azure, Google Cloud, Vercel, Netlify.
              </li>
              <li>
                <span className="font-semibold text-teal">CI/CD</span> – Pipelines with GitHub Actions, GitLab, PM2.
              </li>
              <li>
                <span className="font-semibold text-teal">NGINX</span> – Reverse proxy & load balancing.
              </li>
            </ul>
          </div>

          {/* Version Control & Collaboration */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-light">Version Control & Collaboration</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <span className="font-semibold text-teal">Git</span> – Collaboration via GitHub, GitLab, Bitbucket.
              </li>
              <li>
                <span className="font-semibold text-teal">Agile Development</span> – Scrum, Kanban, and best practices.
              </li>
              <li>
                <span className="font-semibold text-teal">Team Collaboration</span> – Effective communication and issue tracking.
              </li>
            </ul>
          </div>

          {/* Other Skills */}
          <div className="bg-card p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-light">Other Skills</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <span className="font-semibold text-teal">Testing</span> – Unit testing, TDD with Jest, Mocha, Chai.
              </li>
              <li>
                <span className="font-semibold text-teal">Scalability</span> – Architecting performant, scalable systems.
              </li>
              <li>
                <span className="font-semibold text-teal">Problem Solving</span> – Analytical skills for complex issues.
              </li>
              <li>
                <span className="font-semibold text-teal">Documentation</span> – Clean code and clear technical docs.
              </li>
              <li>
                <span className="font-semibold text-teal">Soft Skills</span> – Leadership, adaptability, time management.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;