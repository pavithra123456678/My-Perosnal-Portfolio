// src/components/Projects.js
import React, { useState, useEffect } from "react";

// Manually defined projects (you can keep these or remove them if all projects are on GitHub)
const manualProjects = [
  {
    title: "E-commerce Web App",
    description:
      "A full-featured e-commerce app with product listings, shopping cart, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/pavithra123456678/ecommerce-app",
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered app that generates images using OpenAI’s API based on user prompts.",
    technologies: ["React", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/pavithra123456678/ai-image-generator",
  },
];

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoadingRepos(true);
        // Fetch up to 6 most recently updated public repositories for the user 'pavithra123456678'
        const response = await fetch(
          "https://api.github.com/users/pavithra123456678/repos?sort=updated&per_page=6"
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();
        // Filter out forks if you only want to display your original projects
        const myRepos = data.filter((repo) => !repo.fork);
        setGithubRepos(myRepos);
      } catch (error) {
        console.error("Failed to fetch GitHub repositories:", error);
        setRepoError("Failed to load repositories. Please try again later.");
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800" id="projects"> {/* Added text-gray-800 for better default text color on light background */}
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      {/* Display Manually defined projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {manualProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      {/* GitHub Repositories Section */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 border-b border-gray-400 pb-2">
          My GitHub Repositories
        </h3>
        {loadingRepos ? (
          <p className="text-center text-lg">Loading repositories...</p>
        ) : repoError ? (
          <p className="text-center text-red-500">{repoError}</p>
        ) : githubRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-semibold text-blue-900 mb-2">{repo.name}</h4>
                <p className="text-gray-700 text-sm mb-3">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>
                    {repo.language && (
                      <span className="inline-block px-2 py-1 rounded-full bg-gray-200 text-gray-700 mr-2">
                        {repo.language}
                      </span>
                    )}
                    Updated: {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No public repositories found or something went wrong.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;