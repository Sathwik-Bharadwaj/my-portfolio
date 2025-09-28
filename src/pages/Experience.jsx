import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, Award, Trophy } from "lucide-react";
import ScrollableCards from "../Components/ScrollableCards";
import award from "../assets/award.png";
const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  const experiences = [
    {
      title: "Application Development Associate",
      company: "Accenture Solutions Pvt Ltd",
      location: "Bangalore, India",
      duration: "Oct 2021 - Jan 2023",
      type: "Full-time",
      description:
        "Developed Selenium frameworks and Python automation scripts, improving test coverage by 40% and reducing manual effort by 70%. ",
      skills: [
        "Selenium",
        "Java",
        "Python",
        "Postman",
        "AWS S3",
        "Azure Deployment",
        "Agile",
        "Jira",
        "Docker",
        "Kubernetes",
      ],
      achievements: [
        "Acted as primary point of contact for a mission-critical web application, coordinating between development, QA, and business teams to ensure seamless communication and timely delivery of features. ",
        "Collaborated with cross-functional teams in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives to ensure continuous improvement and alignment with business goals.",
        "Managed QA, UAT, and production deployments, overseeing end-to-end testing cycles, release planning, and monitoring post-deployment performance in a high-pressure Agile environment. ",
        "Automated the UAT access permission process by developing Python scripts to parse CSV files and grant permissions, reducing manual effort by 70% and improving accuracy.",
        "Executed functional, non-functional, and regression testing, developing Selenium-based automated test suites to accelerate testing cycles and improve coverage by 40%. ",
        "Awarded ACE Level Recognition by Accenture leadership for contributions to key project milestones, defect reduction, and overall delivery quality. ",
        "Delivered knowledge transfer sessions and created onboarding documentation to upskill new team members, reducing training time by 30% and ensuring smooth project continuity. ",
      ],
    },
  ];

  const certifications = [
    {
      title: "Tech Expressway Program",
      issuer: "Accenture Solutions Pvt Ltd",
      year: "2021",
    },
    {
      title: "Certified Automation Practitioner (Level – Foundation)",
      issuer: "Accenture Solutions Pvt Ltd",
      year: "2022",
    },
    {
      title: "Certified Automation Engineer (Level – Specialist)",
      issuer: "Accenture Solutions Pvt Ltd",
      year: "2022",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <Briefcase className="w-10 h-10 text-blue-600" />
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through my professional growth and the impact I've made at
            each step
          </p>
        </div>

        <ScrollableCards
          items={experiences}
          current={currentExperience}
          setCurrent={setCurrentExperience}
          renderCard={(exp, index) => (
            <div className="bg-gray-50 p-8 rounded-lg border min-h-[600px] flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 flex-grow">{exp.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        />

        {/* Timeline View */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Career Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm">{exp.duration}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Awards Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-blue-600" />
            Awards & Recognition
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={award}
                      alt="Bravo Recognition Award from Accenture"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-8 h-8 text-yellow-500" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        Bravo Recognition
                      </h3>
                    </div>
                    <p className="text-blue-600 font-semibold mb-2">
                      Accenture Solutions Pvt Ltd
                    </p>
                    <p className="text-gray-600 text-sm mb-4">May 2022</p>
                    <p className="text-gray-700 mb-6">
                      Awarded Bravo Recognition by Accenture leadership for
                      contributions to key project milestones, defect reduction,
                      and overall delivery quality.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Excellence Award
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Leadership Recognition
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-blue-600" />
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">{cert.year}</p>
                  </div>
                </div>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-gray-600">Manual Effort Reduced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Test Coverage Improved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-600">Excellence Award</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
