import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

// Import images
import blogZone from '../assets/blogZone.png';
import rixnTweaks from '../assets/rixn-tweaks.png';
import eshoply from '../assets/eshoply.png';
import criticScore from '../assets/criticScore.png';
import landingPage from '../assets/landingPage.png';
import shorrtly from '../assets/shorrtly.png';

const AllProjects = () => {
   
  // Map image names to imports
  const imageMap = {
    'blogZone.png': blogZone,
    'rixn-tweaks.png': rixnTweaks,
    'eshoply.png': eshoply,
    'criticScore.png': criticScore,
    'landingPage.png': landingPage,
    'shorrtly.png':shorrtly
  };
  
  const projects = projectsData.map(project => ({
    ...project,
    image: imageMap[project.image]
  }));

  return (
    <div className="min-h-screen w-full px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-gray-1000/80 text-white text-sm font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
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
                <div className="absolute  rounded-xl group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative  rounded-xl overflow-hidden border border-gray-700/30 aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-3">
              <div>
                 <p className="text-gray-400 text-xs md:text-sm">{project.type}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-gray-300 hover:text-white text-sm rounded-md border border-[#333] hover:border-[#444] transition-colors"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white text-sm rounded-md border border-[#333] hover:border-white/20 transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
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
