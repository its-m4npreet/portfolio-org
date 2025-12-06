import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { trackVisitor } from '../utils/visitorTracking';

const Footer = () => {
  const [visitors, setVisitors] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initVisitorTracking = async () => {
      try {
        const count = await trackVisitor();
        setVisitors(count);
      } catch (error) {
        console.error('Failed to track visitor:', error);
      } finally {
        setLoading(false);
      }
    };

    initVisitorTracking();
  }, []);

  return (
    <footer className="w-full mt-16 mb-8 px-4">
      <div className="border-t border-gray-700/50 pt-4 flex items-center justify-center gap-4">
        {/* Copyright */}
        <div className="flex justify-center items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Manpreet. All rights reserved.</p>
        </div>

         {/* Visitor Counter */}
         <div className="flex justify-center items-center gap-2 ">
          <FaEye className="text-gray-400 text-lg" />
          <span className="text-gray-400 text-sm flex justify-center items-center gap-2">
            <span className="font-semibold text-white">
              {loading ? '...' : visitors }
            </span>
            {!loading && (visitors !== 1 ? ' visitors' : '')}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
