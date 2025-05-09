import { FaCode, FaServer, FaRocket } from "react-icons/fa";
import profile from '../../images/chriss.png';

const About = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-teal-light">
          About Me
        </h1>

        {/* Introduction */}
        <div className="grid gap-8 md:grid-cols-2 items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-teal-light">Who I Am</h2>
            <p className="text-sm md:text-base">
              I’m DUSHIME Christian, a Backend development, based in
              Kigali, Rwanda. I'm specializing in JavaScript, with experience in other technologies like React, Node.js, and Express.js. I love exploring new technologies and am always looking for ways to grow and improve my skills. I also enjoy sharing my knowledge with others and helping them kick-start their journey in the tech industry.
            </p>
            <p className="text-sm md:text-base">
              My expertise lies in crafting efficient APIs, managing databases, and optimizing performance, though I
              also enjoy creating responsive frontends. I’m driven by a love for solving complex problems and bringing
              ideas to life through code.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg bg-teal-dark">
              <img src={profile} alt="DUSHIME Christian" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* My Approach */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-teal-light">My Approach</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <FaServer className="w-10 h-10 mx-auto mb-4 text-teal" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Backend Mastery</h3>
              <p className="text-sm text-muted-foreground">
                I design and build secure, scalable backend systems with a focus on performance and reliability.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <FaRocket className="w-10 h-10 mx-auto mb-4 text-teal" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Efficiency Driven</h3>
              <p className="text-sm text-muted-foreground">
                I optimize server-side logic and databases to ensure applications run smoothly under any load.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
              <FaCode className="w-10 h-10 mx-auto mb-4 text-teal" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Full-Stack Versatility</h3>
              <p className="text-sm text-muted-foreground">
                While backend is my forte, I deliver cohesive frontends to complete the user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-teal-light">Experience</h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">Backend Developer at TeckVilla</h3>
              <p className="text-sm text-muted-foreground italic">Current Role</p>
              <p className="text-sm text-muted-foreground mt-2">
                Developing and maintaining scalable backend systems, designing APIs, and ensuring optimal database
                performance for innovative tech solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">Full-Stack Developer</h3>
              <p className="text-sm text-muted-foreground">
                Worked on end-to-end development of web applications, integrating frontends with robust backend
                architectures for seamless user experiences.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">Software Developer</h3>
              <p className="text-sm text-muted-foreground">
                Contributed to building efficient server-side logic and collaborated on projects requiring both
                technical depth and creative problem-solving.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-teal-light">Fun Facts</h2>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-teal mr-2">•</span>
              I’m a coffee enthusiast—backend debugging is better with a strong cup!
            </li>
            <li className="flex items-start">
              <span className="text-teal mr-2">•</span>
              I enjoy mentoring aspiring developers in Rwanda’s growing tech scene.
            </li>
            <li className="flex items-start">
              <span className="text-teal mr-2">•</span>
              Outside coding, I’m either hiking or lost in a sci-fi novel.
            </li>
            <li className="flex items-start">
              <span className="text-teal mr-2">•</span>
              <a
                href="https://wa.me/250789356233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-light hover:underline"
              >
                Phone: +250 789 356 233
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card py-10 px-6 rounded-xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-light">Let’s Connect</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Got a backend challenge or full-stack project in mind? Let’s talk!
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dushimec515@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-teal text-foreground font-semibold rounded-md hover:bg-teal-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
