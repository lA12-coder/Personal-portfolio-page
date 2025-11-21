import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const ResumeSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Geez Geeks Tech solutions",
      period: "2024 - Present",
      description:
        "Led the development of responsive web applications using React and TypeScript. Implemented modern UI/UX designs and improved application performance by 40%.",
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Up work",
      period: "2020 - 2022",
      description:
        "Designed and developed user interfaces for various clients across different industries. Created wireframes, prototypes, and implemented frontend solutions.",
    },
    {
      title: "Web Developer",
      company: "INSA (Information Network Security Administration)",
      period: "2024 - 2025",
      description:
        "Developed and maintained websites for small to medium businesses. Worked with React, Django, REST API, and various CMS platforms.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Adama Science and Technology University",
      period: "2023 - present",
      description:
        "Attending a comprehensive program focusing on software development, algorithms, and data structures. Engaged in various projects to apply theoretical knowledge in practical scenarios.",
    },
  ];

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Node.js", level: 50 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Figma", level: 80 },
    { name: "Django", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "Git & GitHub", level: 80 },
    { name: "Agile Methodologies", level: 75 },
    { name: "RESTfull APIs", level: 75 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "Adobe Illustrator", level: 70 },
      { name: "Docker", level: 90 },

  ];

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A summary of my education, work experience, and skills.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1kRAseGbHdd5ZtOgTQ6Te2q-SrGYPm4WQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                <Briefcase className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-blue-400 mb-3">{exp.company}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                <GraduationCap className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-purple-400 mb-3">{edu.institution}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <div className="flex items-center mb-8">
                <div className="bg-pink-500/10 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Certifications
                </h3>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-pink-500 mr-3"></span>
                    <span className="text-white">
                      Advanced Frontend Development - Udacity
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                    <span className="text-white">
                      UI/UX Design Professional - Udemy
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-white">
                      React Developer Certification - Udemy
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-white">
                      Backend development with Django - ALX
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Professional Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
