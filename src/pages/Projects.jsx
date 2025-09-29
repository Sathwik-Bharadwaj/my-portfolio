import React, { useState } from "react";
import { ExternalLink, Github, Code, Calendar, Award } from "lucide-react";
import ScrollableCards from "../Components/ScrollableCards";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills.",
      tech: ["React", "Tailwind CSS", "Vite", "EmailJs", "Vercel"],
      features: [
        "Responsive design with Tailwind CSS",
        "Interactive project showcase with detailed descriptions",
        "Contact form integrated with EmailJs for direct communication",
      ],
      category: "Full Stack",
      year: "2025",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920",
      link: "#",
      github: "https://github.com/Sathwik-Bharadwaj/my-portfolio",
    },
    {
      title: "Gym Pose Detection",
      description:
        "A video-based gym pose classification system leveraging 3D CNNs and Time-based CNNs to recognize and evaluate workout movements with high accuracy.",
      tech: [
        "Python",
        "TensorFlow",
        "3D CNN",
        "Time-based CNN",
        "OpenCV",
        "Computer Vision",
      ],
      features: [
        "Developed video-based pose classification using advanced 3D and Time-based CNNs",
        "Preprocessed video datasets with frame extraction and normalization techniques",
        "Applied data augmentation strategies for improved model generalization",
        "Achieved accurate classification enabling fitness tracking applications",
        "Potential use cases in posture correction and smart training assistants",
        "Real-time movement analysis and feedback system",
      ],
      category: "Machine Learning",
      year: "2023",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      link: "#",
      github: "https://github.com/Sathwik-Bharadwaj/GymPose-Estimation",
    },
    {
      title: "Automatic Quiz Generator",
      description:
        "A full-stack Atlassian Forge app that integrates with Confluence to automatically generate quizzes using LangChain and OpenAI API with customizable constraints.",
      tech: [
        "Node.js",
        "Atlassian Forge",
        "LangChain",
        "OpenAI API",
        "MongoDB Atlas",
        "Docker",
        "Render",
      ],
      features: [
        "Built full-stack Atlassian Forge app with Confluence integration",
        "Implemented LangChain + OpenAI API for intelligent quiz generation",
        "Frontend constraint definition for customized quiz parameters",
        "MongoDB Atlas integration for scalable data storage",
        "Containerized backend using Docker for consistent deployment",
        "Cloud deployment on Render for scalability and reliability",
      ],
      category: "Full Stack",
      year: "2024",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=500&h=300&fit=crop",
      link: "#",
      github: "https://github.com/Sathwik-Bharadwaj/Automatic-QuizGenerator",
    },
    {
      title: "Berryjam Contest 2024",
      description:
        "An advanced image classifier built with limited data using ensemble methods and multiple ML models to achieve high accuracy with just 5 positive/negative samples per class.",
      tech: [
        "Python",
        "VGG16",
        "ResNet",
        "Inception",
        "SVM",
        "Random Forest",
        "Ensemble Learning",
      ],
      features: [
        "Built image classifier with minimal training data (5 samples per class)",
        "Implemented data augmentation techniques for low-data scenarios",
        "Utilized multiple models: VGG16, ResNet, Inception, SVM, Random Forest",
        "Applied ensemble learning with majority voting for improved accuracy",
        "Created adaptable classification pipeline for various use cases",
        "Optimized for scenarios with limited labeled training data",
      ],
      category: "Machine Learning",
      year: "2024",
      status: "Competition",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      link: "#",
      github: "https://github.com/Sathwik-Bharadwaj/BerryJam",
    },
    {
      title: "Story Telling Using Lifelogging",
      description:
        "A deep learning model combining VGG16 and LSTM to generate contextual sentences and coherent stories from sequences of captioned images for automated storytelling.",
      tech: [
        "Python",
        "VGG16",
        "LSTM",
        "TensorFlow",
        "CNN",
        "Deep Learning",
        "NLP",
      ],
      features: [
        "Implemented VGG16 + LSTM architecture for story generation",
        "Generated contextual sentences from image sequences",
        "Processed image datasets with spatial feature extraction using CNNs",
        "Captured temporal dependencies with LSTM networks",
        "Created coherent storytelling from visual input sequences",
        "Applications in assistive technologies and digital media",
      ],
      category: "AI/ML",
      year: "2021",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      link: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Machine Learning", "Full Stack", "AI/ML"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <Code className="w-10 h-10 text-blue-600" />
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of innovative projects showcasing my expertise in
            machine learning, full-stack development, and AI applications
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        {/* <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'Competition'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-xs leading-relaxed">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-blue-600 mt-2">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Detailed Project Showcase */}
        <div className="mb-16">
          {/* <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Project
          </h2> */}
          <ScrollableCards
            items={projects}
            current={currentProject}
            setCurrent={setCurrentProject}
            renderCard={(project, index) => (
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        All Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      {/* <a
                        href={project.link}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a> */}
                      {/* <a
                        href={project.github}
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a> */}
                      {project.github === "#" ? (
                        <button
                          disabled
                          className="border border-gray-300 text-gray-400 px-4 py-2 rounded-lg flex items-center gap-2 text-sm cursor-not-allowed bg-gray-100"
                        >
                          <Github className="w-4 h-4" />
                          Private
                        </button>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        {/* Project Stats */}
        <div className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Project Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">ML/AI Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-600">Competition Entry</div>
            </div>
          </div>
        </div>

        {/* Technical Expertise Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">
                Deep expertise in CNN, LSTM, ensemble methods, and computer
                vision applications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Full Stack Development
              </h3>
              <p className="text-gray-600 text-sm">
                End-to-end application development with modern frameworks and
                cloud deployment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI Innovation</h3>
              <p className="text-gray-600 text-sm">
                Creative applications of AI in storytelling, fitness, and
                automated content generation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
