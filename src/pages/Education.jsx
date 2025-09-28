import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree:
        "Master of Information Technology (Specialization in Data Science and Engineering)",
      school: "University of New South Wales",
      location: "Sydney, Australia",
      duration: "2023 - 2025",
      gpa: "74/100",
      description:
        "Advanced studies in Machine Learning and Data Engineering. Developed skills in Python, SQL, and big data technologies. Completed projects on predictive analytics, Computer Vision, and big data processing.",
      achievements: [
        "Berry-Jam Contest (Jul 2024): Achieved 11th place in a low-data image classification challenge using augmentation and ensemble.",
      ],
      coursework: [
        "Machine Learning and Data Mining",
        "Neural Networks and Deep Learning",
        "Big Data Management",
        "Database Systems Implementation",
        "Computer Vision",
      ],
    },
    {
      degree: "Bachelor of Computer Science and Engineering",
      school: "Mangalore Institute of Technology and Engineering",
      location: "Moodabidri, Karnataka, India",
      duration: "2017 - 2021",
      gpa: "8.45/10.0",
      description:
        "Specialized in Software Engineering and Data Structures. Participated in hackathons.",
      achievements: [
        "NMAMIT CIRCUIT – 02 (Jun 2021): Secured 2nd Place in Online Code Hackathon conducted by Computer Society NMAMIT Nitte in collaboration with HackerEarth Hub. ",
      ],
      coursework: [
        "Data Structures",
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Networks",
        "Operating Systems",
        "IoT",
        "Data Mining and Data Warehousing",
        "NLP",
        "Unix and Shell Programming",
        "Big Data Analytics",
      ],
    },
  ];

  const certifications = [
    {
      title: "React Training",
      issuer: "Internshala",
      year: "2021",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      year: "2020",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            Education & Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional development through continuous
            learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Academic Background
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="font-semibold text-green-600">
                        GPA/WAM: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{edu.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-600 text-sm mb-2">{cert.year}</p>
                {/* <p className="text-gray-500 text-xs">ID: {cert.id}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
