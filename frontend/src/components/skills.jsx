import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiGit, 
  SiPostman, 
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNotion,
  SiGithub,
  SiSwagger,
  SiFigma
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandVscode } from 'react-icons/tb';
import { VscVscode  } from 'react-icons/vsc';

const Skills = () => {
  const skills = [
    { name: 'mongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'HTML', icon: SiHtml5, color: 'text-orange-600' },
    { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
  ];

  const tools = [
    { name: 'Render', icon: TbBrandReactNative, color: 'text-purple-400' },
    { name: 'Notion', icon: SiNotion, color: 'text-white' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'GitHub', icon: SiGithub, color: 'text-white' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    { name: 'Swagger', icon: SiSwagger, color: 'text-green-400' },
    { name: 'VS Code', icon: VscVscode , color: 'text-blue-500' },
    { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
  ];

  return (
    <div className="skills-section w-full my-8 px-4">
      {/* Skills Section */}
      <div className="mb-10">
        <p className="text-gray-400 mb-6 text-base md:text-lg">
          [ <span className="text-white font-semibold">Understanding of...</span> ]
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-gray-700/80 px-3 py-1.5 md:px-3.5 md:py-2 rounded-md border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              <skill.icon className={`text-base md:text-lg ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-white font-semibold text-xs md:text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <p className="text-gray-400 mb-6 text-base md:text-lg">
          [ <span className="text-white font-semibold">Tools I use...</span> ]
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-gray-700/80 px-3 py-1.5 md:px-3.5 md:py-2 rounded-md border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              <tool.icon className={`text-base md:text-lg ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-white font-semibold text-xs md:text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
