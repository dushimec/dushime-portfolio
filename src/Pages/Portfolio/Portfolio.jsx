"use client";

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaStar,
  FaCodeBranch,
  FaCalendarAlt,
} from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("all"); // "all" or "live"

  // Define live projects statically with logo URLs
  const liveProjects = [
    {
      name: "OLDFOXTOURS",
      url: "https://oldfoxtours.com",
      description: "A tourism platform where I handled the entire backend, Redux integration, and dashboard design with full functionality. I also handled the DevOps deployment for both backend (Render) and frontend (Netlify).",
      language: "JavaScript",
      tags: ["backend", "redux", "dashboard"],
      updated_at: "2025-03-25T00:00:00Z",
      isLive: true,
      logo: "https://oldfoxtours.com/assets/logo-CcAoAWD-.jpg", // Replace with actual logo URL
      backendDeployment: "Render",
      frontendDeployment: "Netlify",
    },
    {
      name: "KARKELLY",
      url: "https://karkelly.rw",
      description: "A project similar to Old Fox Tours, with full backend development, Redux integration, and dashboard functionality. I also handled the DevOps deployment for both backend (Render) and frontend (Netlify).",
      language: "JavaScript",
      tags: ["backend", "redux", "dashboard"],
      updated_at: "2025-03-25T00:00:00Z",
      isLive: true,
      logo: "data:image/png;base64,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", // Replace with actual logo URL
    },
    {
      name: "ISUZUME",
      url: "https://isuzume.rw",
      description: "Implemented payment integration using Flutterwave and developed backend functionality for this project.",
      language: "JavaScript",
      tags: ["backend", "flutterwave", "payment"],
      updated_at: "2025-03-25T00:00:00Z",
      isLive: true,
      logo: "https://www.isuzume.rw/static/media/isuzume-official-logo.ebf1fb8ef1de35922f53.png",
    },
    {
      name: "TRAUMAHELPRWANDA",
      url: "https://thr.org.rw",
      description: "A platform where I worked on the backend and Redux integration with full functionality. I also handled the DevOps deployment for both backend (Render) and frontend (Netlify).",
      language: "JavaScript",
      tags: ["backend", "redux", "functionality"],
      updated_at: "2025-03-25T00:00:00Z",
      isLive: true,
      logo: "https://thr.org.rw/assets/logo-tD9r3Hdz.png", 
    },
    {
  name: "CoRoute",
  url: "https://www.coroute.ca/",
  description: "A Canadian intercity carpooling platform where I implemented backend APIs for authentication, booking management, driver dashboards, payment integration, and real-time notifications.",
  language: "JavaScript",
  tags: ["backend", "payments", "API", "dashboard"],
  updated_at: "2025-10-31T00:00:00Z",
  isLive: true,
  logo: "https://www.coroute.ca/assets/logo.png", 
  backendDeployment: "AWS (PM2)",
  frontendDeployment: "AWS",
}

  ];

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users/dushimec/repos?per_page=100");

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        const githubProjects = data
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            name: repo.name,
            html_url: repo.html_url,
            homepage: repo.homepage,
            description: repo.description,
            language: repo.language,
            tags: [],
            updated_at: repo.updated_at,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            isLive: false,
            logo: null, // GitHub projects won't have logos by default
          }));

        const allProjects = [...liveProjects, ...githubProjects];
        setProjects(allProjects);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub repositories:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Java: "#b07219",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Swift: "#ffac45",
      Kotlin: "#F18E33",
      Dart: "#00B4AB",
      C: "#555555",
      "C++": "#f34b7d",
      "C#": "#178600",
    };
    return colors[language] || "#4ecdc4";
  };

  const extractTags = (project) => {
    if (project.isLive) return project.tags;

    const tags = [];
    const nameAndDesc = `${project.name} ${project.description || ""}`.toLowerCase();
    const technologies = [
      "javascript",
      "typescript",
      "react",
      "node",
      "express",
      "mongodb",
      "postgresql",
      "mysql",
      "firebase",
      "redux",
      "tailwind",
      "css",
      "html",
      "api",
      "graphql",
      "rest",
      "socket.io",
      "websocket",
    ];

    technologies.forEach((tech) => {
      if (nameAndDesc.includes(tech) && tags.length < 3) {
        tags.push(tech);
      }
    });

    if (tags.length === 0) {
      tags.push(project.language || "Project");
    }

    return tags;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const ProjectCard = ({ project }) => {
    const tags = extractTags(project);
    const languageColor = getLanguageColor(project.language);

    return (
      <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border transform hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-36 bg-teal-dark">
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="flex items-center space-x-3">
              {project.logo && (
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="w-10 h-10 object-contain"
                />
              )}
              <h3 className="text-lg md:text-xl font-bold text-foreground text-center line-clamp-2">
                {project.name.replace(/-/g, " ").replace(/_/g, " ")}
              </h3>
            </div>
          </div>
          {!project.isLive && (
            <div className="absolute top-3 right-3 flex space-x-2">
              {project.stargazers_count > 0 && (
                <span className="bg-teal bg-opacity-80 text-foreground rounded-full px-2 py-1 text-xs flex items-center">
                  <FaStar className="mr-1" /> {project.stargazers_count}
                </span>
              )}
              {project.forks_count > 0 && (
                <span className="bg-teal bg-opacity-80 text-foreground rounded-full px-2 py-1 text-xs flex items-center">
                  <FaCodeBranch className="mr-1" /> {project.forks_count}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="p-5 flex-grow flex flex-col">
          <div className="mb-3 flex items-center text-xs text-muted-foreground">
            <FaCalendarAlt className="mr-1" /> Updated: {formatDate(project.updated_at)}
          </div>

          <p className="text-sm text-foreground mb-4 flex-grow line-clamp-3">
            {project.description || "No description available"}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.language && (
              <span
                className="px-2 py-1 rounded-full text-xs font-medium text-background"
                style={{ backgroundColor: languageColor }}
              >
                {project.language}
              </span>
            )}
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-input text-foreground rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-border">
            {project.isLive ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal hover:text-teal-light flex items-center transition-colors"
              >
                <FaExternalLinkAlt className="mr-1" /> Visit Site
              </a>
            ) : (
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal hover:text-teal-light flex items-center transition-colors"
              >
                <FaGithub className="mr-1" /> View Code
              </a>
            )}
            {!project.isLive && project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal hover:text-teal-light flex items-center transition-colors"
              >
                <FaExternalLinkAlt className="mr-1" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const displayedProjects = viewMode === "all" ? projects : projects.filter((project) => project.isLive);

  if (loading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-border"></div>
            <div className="absolute inset-0 rounded-full border-4 border-teal border-t-transparent animate-spin"></div>
          </div>
          <p className="text-foreground font-medium">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-card border-l-4 border-red-500 p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-red-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h2 className="text-lg font-bold text-foreground">Error Loading Projects</h2>
              <p className="text-muted-foreground mt-1">{error}</p>
              <p className="mt-3 text-muted-foreground">Please try again later or check your GitHub configuration.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-foreground">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center text-teal-light">
          My Portfolio
        </h1>
        <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
          Showcasing {projects.length} projects, including live websites and GitHub repositories, highlighting my skills across various technologies and domains.
        </p>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setViewMode("all")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === "all"
                ? "bg-teal text-foreground"
                : "bg-input text-muted-foreground hover:bg-teal hover:text-foreground"
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setViewMode("live")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === "live"
                ? "bg-teal text-foreground"
                : "bg-input text-muted-foreground hover:bg-teal hover:text-foreground"
            }`}
          >
            Live Projects ({liveProjects.length})
          </button>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6 pb-2 border-b-2 border-teal">
            <div className="p-2 bg-teal-dark rounded-lg mr-3">
              <FaCode className="text-2xl text-foreground" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-teal-light">
              {viewMode === "all" ? "All Projects" : "Live Projects"}
            </h2>
            <span className="ml-3 px-2 py-1 bg-input text-foreground rounded-full text-xs font-medium">
              {displayedProjects.length} projects
            </span>
          </div>

          {displayedProjects.length === 0 ? (
            <p className="text-muted-foreground italic">No projects to display in this view.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {displayedProjects.map((project, index) => (
                <ProjectCard key={project.name + index} project={project} />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16 bg-card py-10 px-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-teal-light">Want to see more?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore my GitHub profile for additional projects, contributions, and code samples.
          </p>
          <a
            href="https://github.com/dushimec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal text-foreground font-medium rounded-md hover:bg-teal-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal transition-all duration-300"
          >
            <FaGithub className="mr-2" /> Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
