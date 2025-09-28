import React from "react";
import { Code, Users, Award, Target } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Atlassian Forge UI",
      ],
    },
    { category: "Programming", items: ["Python", "SQL", "C", "Java", "C++"] },
    {
      category: "Database",
      items: ["MySQL", "MongoDB", "PostgreSQL", "ArangoDB", "BigQuery"],
    },
    {
      category: "Data Science",
      items: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "EDA",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Vercel", "Postman", "Jira", "Confluence"],
    },
    {
      category: "QA & Automation",
      items: [
        "Selenium",
        "Postman for API testing",
        "Python Automation",
        "Test Case Design",
        "Bug Tracking and Reporting with Jira",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating meaningful digital
            experiences. When I'm not coding, you'll find me behind a camera
            capturing the world around me.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                My journey in technology began early, when I chose Computer
                Science in my 11th and 12th grades. That’s where I was first
                introduced to C++ programming, data structures, and web
                development with HTML and CSS.
              </p>
              <p>
                During my undergraduate studies in Computer Science and
                Engineering, I deepened my knowledge of programming with C++, C,
                Java, Python, and C#, applying data structures across these
                languages. I also explored JavaScript, PHP for backend
                development, and MySQL for database management, while continuing
                to build frontend skills with HTML.
              </p>
              <p>
                In my final year, I discovered my passion for data science and
                AI. For my capstone project, Storytelling Using Lifelogging, I
                built a system that generated textual stories from sequences of
                captioned images. I used VGG16 for feature extraction, LSTMs for
                text generation, and Tkinter for the GUI. This project sparked
                my long-term interest in machine learning and deep learning.
              </p>
              <p>
                After graduation, I joined Accenture as a Quality Assurance
                Engineer, where I worked for 15 months. I served as the point of
                contact for one application, handled both manual and automation
                testing, and used Selenium for test automation. I also built a
                Python script to automate permission setups and send reports
                once access was granted. My contributions earned me the
                Accenture Ace Award for achieving key project milestones.
              </p>
              <p>
                Even while working in QA, I knew I wanted to move toward a
                career in data science. This led me to pursue postgraduate
                studies at UNSW, where I worked on projects such as:{" "}
                <b>Gym Pose Estimation</b>, <b>Automatic Quiz Generator</b>{" "}
                (using the OpenAI API), and{" "}
                <b>Participation in the BerryJam Competition</b>, where we
                trained models with very limited image data. These experiences
                have shaped me into someone who can adapt quickly, balance
                multiple tasks, and continuously learn and deliver results.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Code className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Clean Code Advocate
                </h3>
                <p className="text-gray-600">
                  I believe in writing code that's not just functional, but
                  readable and maintainable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Team Player</h3>
                <p className="text-gray-600">
                  Collaboration and knowledge sharing are at the heart of
                  everything I do.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Goal-Oriented</h3>
                <p className="text-gray-600">
                  I focus on delivering solutions that meet both user needs and
                  business objectives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Continuous Learner
                </h3>
                <p className="text-gray-600">
                  Technology evolves rapidly, and I'm always learning new tools
                  and techniques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-white px-3 py-1 rounded text-sm text-gray-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
