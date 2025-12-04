import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

const Footer = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Get visitor count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      // New visitor
      const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
      localStorage.setItem('visitorCount', newCount);
      localStorage.setItem('hasVisited', 'true');
      setVisitors(newCount);
    } else {
      // Returning visitor
      setVisitors(storedCount ? parseInt(storedCount) : 0);
    }
  }, []);

  return (
    <footer className="w-full mt-16 mb-8 px-4">
      <div className="border-t border-gray-700/50 pt-8 flex items-center justify-center gap-4">
        {/* Copyright */}
        <div className="flex justify-center items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Manpreet. All rights reserved.</p>
        </div>

         {/* Visitor Counter */}
         <div className="flex justify-center items-center gap-2 ">
          <FaEye className="text-gray-400 text-lg" />
          <span className="text-gray-400 text-sm flex justify-center items-center">
            <span className="font-semibold text-white">{visitors}</span>{visitors !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
