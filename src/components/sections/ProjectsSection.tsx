import { Code, Database, Layout, Monitor, Server, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      icon: <Monitor className="h-10 w-10 text-purple-500" />,
      description: "A full-featured e-commerce platform with product management, shopping cart, payment processing, and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#"
    },
    {
      title: "Mobile Banking App",
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      description: "A secure mobile banking application with transaction history, fund transfers, bill payments, and account management.",
      technologies: ["React Native", "Redux", "Firebase", "Biometric Authentication"],
      link: "#"
    },
    {
      title: "Content Management System",
      icon: <Layout className="h-10 w-10 text-pink-500" />,
      description: "A custom CMS for digital content creators with rich text editing, media management, and publishing workflows.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3"],
      link: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      icon: <Database className="h-10 w-10 text-green-500" />,
      description: "An interactive dashboard for visualizing business metrics and KPIs with real-time data updates and customizable views.",
      technologies: ["Vue.js", "D3.js", "Socket.io", "Express"],
      link: "#"
    },
    {
      title: "API Gateway Service",
      icon: <Server className="h-10 w-10 text-yellow-500" />,
      description: "A microservice gateway that handles authentication, rate limiting, and request routing for a distributed system.",
      technologies: ["Go", "Docker", "Kubernetes", "Redis"],
      link: "#"
    },
    {
      title: "Code Collaboration Tool",
      icon: <Code className="h-10 w-10 text-indigo-500" />,
      description: "A web-based platform for real-time code collaboration, with syntax highlighting, version control, and video chat.",
      technologies: ["TypeScript", "WebRTC", "Monaco Editor", "Git Integration"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore some of my most significant projects that showcase my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col"
            >
              <div className="mb-6 p-4 bg-gray-700/30 rounded-xl inline-block">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                >
                  View Project Details →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Interested in seeing more of my work or discussing a potential project?
          </p>
          <a 
            href="/contact" 
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-block"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
