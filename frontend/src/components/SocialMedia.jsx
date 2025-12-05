import { FaGithub, FaLinkedin,  FaInstagram } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/its-m4npreet',
      color: 'text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/manpreet',
    //   color: 'text-blue-500',
    },
    {
      name: 'Twitter',
      icon: FaXTwitter,
      url: 'https://x.com/m4npreet006',
    //   color: 'text-sky-400',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/m4npreet006',
    //   color: 'text-pink-500',
    },
    {
      name: 'Email',
      icon: CgMail ,
      url: 'mailto:manpreetji234567890@gmail.com',
    }
  ];

  return (
    <section className="w-full  px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Connect With Me
          </h2>
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-transparent backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 border border-white/10 transition-all duration-300 hover:scale-105"
              >
                <Icon className={`text-xl transition-transform duration-300 group-hover:scale-110 ${social.color}`} />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
