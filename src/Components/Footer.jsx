import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Sathwik Bharadwaj Udupi</h3>
            <p className="text-gray-400">
              Data Scientist & Photography Enthusiast
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Sathwik-Bharadwaj/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sathwik-bharadwaj/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:u.sathwik1@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Sathwik Bharadwaj Udupi. All rights reserved. Built with
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
