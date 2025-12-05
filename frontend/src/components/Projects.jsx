import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

// Import images
import blogZone from '../assets/blogZone.png';
import rixnTweaks from '../assets/rixn-tweaks.png';
import eshoply from '../assets/eshoply.png';
import criticScore from '../assets/criticScore.png';
import landingPage from '../assets/landingPage.png';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Map image names to imports
  const imageMap = {
    'blogZone.png': blogZone,
    'rixn-tweaks.png': rixnTweaks,
    'eshoply.png': eshoply,
    'criticScore.png': criticScore,
    'landingPage.png': landingPage
  };
  
  const projects = projectsData.map(project => ({
    ...project,
    image: imageMap[project.image]
  }));

  return (
    <div className="projects-section w-full my-5 px-4">
      {/* Projects Header */}
      <div className='flex items-center mb-3' >
        <span className='flex items-center gap-1'>
          <span className='text-xl text-gray-400'>[</span>
          <p className="text-white font-semibold text-sm md:text-base">Some things I've built</p>
          <span className='text-xl text-gray-400'>]</span>
        </span>
      </div>

      <div className="space-y-10 md:space-y-12">
        {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
          <div 
            key={project.id}
            className={`flex flex-col lg:flex-row gap-6 md:gap-8 items-center ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute rounded-xl blur-lg"></div>
                <div className="relative  rounded-xl overflow-hidden border border-gray-700/30 aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  
                    <p className="text-gray-400 text-xs md:text-sm">{project.type}</p>
                  
                 
                </div>
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

      {/* Show More/Less Button */}
      {projects.length > 3 && (
        <div className="flex justify-end mt-10">
          <Link
            to="/projects"
            className="px-5 py-2 bg-transparent hover:bg-[#070707ce] text-gray-300 hover:text-white text-sm rounded-md border border-[#333] hover:border-[#444] transition-colors"
          >
            Show All ({projects.length})
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
