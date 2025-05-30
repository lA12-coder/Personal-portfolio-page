import { ArrowDown, ChevronRight, Code, Layers, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-200 border border-purple-500/20">
              <span className="mr-1">✨</span> Welcome to my portfolio web-page
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Crafting Digital Experiences
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            I am a Fullstack web developer and a{" "}
            <span>
              <b>Software Enginerring student</b>
            </span>{" "}
            with a passion for creating beautiful, functional, and user-centered
            digital experiences. I design and build cutting-edge websites and
            applications with a focus on exceptional user experience and modern
            aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
              <a href="#portfolio">View My Work</a>

              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium border border-white/10 hover:bg-white/20 transition-all duration-300">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Clean Code",
      description: "Writing clean, maintainable code that follows best practices and industry standards."
    },
    {
      icon: <Layers className="h-8 w-8 text-blue-500" />,
      title: "Modern Design",
      description: "Creating visually stunning interfaces with attention to detail and user experience."
    },
    {
      icon: <Zap className="h-8 w-8 text-pink-500" />,
      title: "Fast Performance",
      description: "Optimizing for speed and efficiency to deliver lightning-fast digital experiences."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            What I Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized in creating exceptional digital experiences through a combination of design and development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="mb-6 p-3 inline-block bg-gray-700/50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
};

export default LandingPage;
