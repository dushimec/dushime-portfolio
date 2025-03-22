"use client";

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaRunning,
  FaServer,
  FaMobileAlt,
  FaStar,
  FaCodeBranch,
  FaCalendarAlt,
} from "react-icons/fa";

const Portfolio = () => {
  const [repos, setRepos] = useState({
    fitness: [],
    backend: [],
    frontend: [],
    other: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users/dushimec/repos?per_page=100");

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        const categorizedRepos = {
          fitness: [],
          backend: [],
          frontend: [],
          other: [],
        };

        data.forEach((repo) => {
          if (repo.fork) return;

          const lowerDescription = (repo.description || "").toLowerCase();
          const lowerName = repo.name.toLowerCase();

          if (
            lowerName.includes("fitness") ||
            lowerName.includes("workout") ||
            lowerName.includes("health") ||
            lowerName.includes("exercise") ||
            lowerName.includes("nutrition") ||
            lowerDescription.includes("fitness") ||
            lowerDescription.includes("workout")
          ) {
            categorizedRepos.fitness.push(repo);
          } else if (
            lowerName.includes("api") ||
            lowerName.includes("server") ||
            lowerName.includes("backend") ||
            lowerName.includes("node") ||
            lowerName.includes("express") ||
            lowerDescription.includes("api") ||
            lowerDescription.includes("server") ||
            lowerDescription.includes("backend")
          ) {
            categorizedRepos.backend.push(repo);
          } else if (
            lowerName.includes("ui") ||
            lowerName.includes("frontend") ||
            lowerName.includes("react") ||
            lowerName.includes("web") ||
            lowerDescription.includes("ui") ||
            lowerDescription.includes("frontend") ||
            lowerDescription.includes("react")
          ) {
            categorizedRepos.frontend.push(repo);
          } else {
            categorizedRepos.other.push(repo);
          }
        });

        setRepos(categorizedRepos);
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
    return colors[language] || "#4ecdc4"; // Default to teal-light for unknown languages
  };

  const extractTags = (repo) => {
    const tags = [];
    const nameAndDesc = `${repo.name} ${repo.description || ""}`.toLowerCase();
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

    if (repo.topics && repo.topics.length > 0) {
      return repo.topics.slice(0, 3);
    }

    technologies.forEach((tech) => {
      if (nameAndDesc.includes(tech) && tags.length < 3) {
        tags.push(tech);
      }
    });

    if (tags.length === 0) {
      tags.push(repo.language || "Project");
    }

    return tags;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const ProjectCard = ({ repo }) => {
    const tags = extractTags(repo);
    const languageColor = getLanguageColor(repo.language);

    return (
      <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border transform hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-36 bg-teal-dark">
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h3 className="text-lg md:text-xl font-bold text-foreground text-center line-clamp-2">
              {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
            </h3>
          </div>
          <div className="absolute top-3 right-3 flex space-x-2">
            {repo.stargazers_count > 0 && (
              <span className="bg-teal bg-opacity-80 text-foreground rounded-full px-2 py-1 text-xs flex items-center">
                <FaStar className="mr-1" /> {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="bg-teal bg-opacity-80 text-foreground rounded-full px-2 py-1 text-xs flex items-center">
                <FaCodeBranch className="mr-1" /> {repo.forks_count}
              </span>
            )}
          </div>
        </div>

        <div className="p-5 flex-grow flex flex-col">
          <div className="mb-3 flex items-center text-xs text-muted-foreground">
            <FaCalendarAlt className="mr-1" /> Updated: {formatDate(repo.updated_at)}
          </div>

          <p className="text-sm text-foreground mb-4 flex-grow line-clamp-3">
            {repo.description || "No description available"}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {repo.language && (
              <span
                className="px-2 py-1 rounded-full text-xs font-medium text-background"
                style={{ backgroundColor: languageColor }}
              >
                {repo.language}
              </span>
            )}
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-input text-foreground rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-border">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-teal hover:text-teal-light flex items-center transition-colors"
            >
              <FaGithub className="mr-1" /> View Code
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
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

  const ProjectSection = ({ title, projects, icon, emptyMessage }) => {
    if (projects.length === 0 && !loading) return null;

    return (
      <div className="mb-12">
        <div className="flex items-center mb-6 pb-2 border-b-2 border-teal">
          <div className="p-2 bg-teal-dark rounded-lg mr-3">{icon}</div>
          <h2 className="text-xl md:text-2xl font-bold text-teal-light">{title}</h2>
          <span className="ml-3 px-2 py-1 bg-input text-foreground rounded-full text-xs font-medium">
            {projects.length} projects
          </span>
        </div>

        {projects.length === 0 ? (
          <p className="text-muted-foreground italic">{emptyMessage}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-border"></div>
            <div className="absolute inset-0 rounded-full border-4 border-teal border-t-transparent animate-spin"></div>
          </div>
          <p className="text-foreground font-medium">Loading GitHub repositories...</p>
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
              <h2 className="text-lg font-bold text-foreground">Error Loading Repositories</h2>
              <p className="text-muted-foreground mt-1">{error}</p>
              <p className="mt-3 text-muted-foreground">Please try again later or check your GitHub configuration.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalRepos = Object.values(repos).flat().length;

  return (
    <div className="bg-background min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-foreground">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center text-teal-light">
          My GitHub Portfolio
        </h1>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Showcasing {totalRepos} repositories from my GitHub profile, highlighting my skills across various
          technologies and domains.
        </p>

        <ProjectSection
          title="Fitness Projects"
          projects={repos.fitness}
          icon={<FaRunning className="text-2xl text-foreground" />}
          emptyMessage="No fitness projects found"
        />
        <ProjectSection
          title="Backend Projects"
          projects={repos.backend}
          icon={<FaServer className="text-2xl text-foreground" />}
          emptyMessage="No backend projects found"
        />
        <ProjectSection
          title="Frontend Projects"
          projects={repos.frontend}
          icon={<FaCode className="text-2xl text-foreground" />}
          emptyMessage="No frontend projects found"
        />
        {repos.other.length > 0 && (
          <ProjectSection
            title="Other Projects"
            projects={repos.other}
            icon={<FaMobileAlt className="text-2xl text-foreground" />}
            emptyMessage="No other projects found"
          />
        )}

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