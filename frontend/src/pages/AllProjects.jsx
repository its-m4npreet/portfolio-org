import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProjects = () => {
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
      title: "Example Project 3",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project3.jpg",
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.com",
      featured: true
    },
    {
      id: 4,
      title: "Example Project 4",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project4.jpg",
      githubLink: "https://github.com/yourusername/project4",
      liveLink: "https://project4.com",
      featured: true
    },
    {
      id: 5,
      title: "Example Project 5",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project5.jpg",
      githubLink: "https://github.com/yourusername/project5",
      liveLink: "https://project5.com",
      featured: true
    },
    {
      id: 6,
      title: "Example Project 6",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project6.jpg",
      githubLink: "https://github.com/yourusername/project6",
      liveLink: "https://project6.com",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen w-full px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white text-sm font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
        >
          <FaArrowLeft className="text-sm" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className='flex items-center justify-center mb-10'>
        <span className='flex items-center gap-1'>
          <span className='text-xl text-gray-400'>[</span>
          <p className="text-white font-semibold text-base md:text-lg">All Projects</p>
          <span className='text-xl text-gray-400'>]</span>
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="flex flex-col gap-4"
          >
            {/* Project Image */}
            <div className="w-full">
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
            <div className="space-y-3">
              <div>
                <p className="text-purple-400 text-xs font-medium mb-1">Featured Project</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700/80 text-white text-xs font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 text-white text-xs font-medium rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
