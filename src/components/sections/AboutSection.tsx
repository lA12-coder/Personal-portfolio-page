import { Award, BookOpen } from "lucide-react";
import profilepic from "../../assets/img/My Photo.png";

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
            <div className="flex justify-center aspect-square rounded-2xl overflow-hidden ">
              <div className="flex justify-center  h-full w-full rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600"></div>

                <img
                  src={profilepic}
                  alt="Profile"
                  className="w-[550px] h-[690px] rounded-[50px]"
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
              <span>
                Professional FullStack Web-Developer and Graphics Designer
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white">
              Passionate about creating impactful digital solutions and stunning
              design products.
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I am a dedicated software developer with a strong passion for
              creating beautiful, functional, and user-centered digital
              experiences. With expertise in modern frontend frameworks and a
              keen eye for design, I strive to build applications that not only
              look great but also provide exceptional user experiences.
              <br />
              <br />
              Apart from my work as a software developer, I have a great passion
              for graphics designing. I design logos, YouTube thumbnails, book
              covers, and social media posts, Fliers and Posters for business
              combining creativity with technical skills to deliver visually
              appealing and effective designs.
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
                    Software Engineering Student at ASTU
                  </p>
                  <p className="text-gray-400 text-sm">
                    Backend Web Development graduate from ALX Africa
                  </p>
                  <p className="text-gray-400 text-sm">
                    Frontend web development - Coursera (Meta)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <a
                  href="https://drive.google.com/uc?export=download&id=1kRAseGbHdd5ZtOgTQ6Te2q-SrGYPm4WQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
