import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project1.jpg",
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1.com",
      featured: true
    },
    {
      id: 2,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project2.jpg",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com",
      featured: true
    },
     {
      id: 3,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project2.jpg",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com",
      featured: true
    },
     {
      id: 4,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project2.jpg",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com",
      featured: true
    }, {
      id: 5,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project2.jpg",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com",
      featured: true
    }, {
      id: 6,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project2.jpg",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com",
      featured: true
    }
  ];

  return (
    <div className="projects-section w-full my-8 px-4">
      {/* Projects Header */}
      <div className='flex items-center ' >
        <span className='flex items-center gap-1'>
          <span className='text-xl text-gray-400'>[</span>
          <p className="text-white font-semibold text-sm md:text-base">Some things I've built</p>
          <span className='text-xl text-gray-400'>]</span>
        </span>
      </div>

      <div className="space-y-10 md:space-y-12">
        {(showAll ? projects : projects.slice(0, 5)).map((project, index) => (
          <div 
            key={project.id}
            className={`flex flex-col lg:flex-row gap-6 md:gap-8 items-center ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl overflow-hidden border border-gray-700/30 aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
              <div>
                <p className="text-purple-400 text-xs md:text-sm font-medium mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white text-sm font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-white text-sm font-medium rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {projects.length > 5 && (
        <div className="flex justify-end mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white text-xs font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
          >
            {showAll ? 'Show Less' : `Show All (${projects.length})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
