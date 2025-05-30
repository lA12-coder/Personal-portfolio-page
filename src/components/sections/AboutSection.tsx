import { User, Award, BookOpen } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for
            creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 p-1">
              <div className="bg-gray-800 h-full w-full rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600"></div>

                <img
                  src="public\portfolio image2.jpg"
                  alt="Profile"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              <span>Professional FullStack Web-Developer</span>
            </div>

            <h3 className="text-3xl font-bold text-white">
              Passionate about creating impactful digital solutions
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I am a dedicated web developer with a strong passion for creating
              beautiful, functional, and user-centered digital experiences. With
              expertise in modern frontend frameworks and a keen eye for design,
              I strive to build applications that not only look great but also
              provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-md">
                  <Award className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Experience</h4>
                  <p className="text-gray-400 text-sm">1+ Years</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-md">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Education</h4>
                  <p className="text-gray-400 text-sm">
                    Computer Science Degree
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <a href="https://drive.google.com/uc?export=download&id=1yo3AFFN9qRU7uoAxSYQCMm9cXa81m2c2" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            My Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "UI/UX Design",
              "Django",
              "MysqL",
              "Figma",
              "RESTful APIs",
              "Git & GitHub",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
