import React from "react";
import { Link } from "react-router-dom";
import { Eye, Download, ArrowRight } from "lucide-react";
import profilePic from "../assets/me.png";
import resume from "../assets/Sathwik_Resume_October_2025.pdf";

const Home = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hello, I'm <span className="text-blue-600">Sathwik</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              QA Engineer transitioning to Data Science with 15 months of
              experience at Accenture Technology. Master's in IT (Data Science
              specialization). Expert in test automation, Python scripting, and
              machine learning applications. Proven track record of process
              optimization and quality improvement in Agile environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </a>
              <a
                href={resume}
                download="Sathwik_Resume.pdf"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
              >
                <Download className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Navigation */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/experience"
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                <div className="text-2xl font-bold text-blue-600">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </Link>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="w-64 h-64 rounded-full mx-auto flex items-center justify-center overflow-hidden">
              <img
                src={profilePic}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
