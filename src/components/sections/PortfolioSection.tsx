import { ExternalLink } from "lucide-react";
import { useState } from "react";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = [
    {
      title: "E-Commerce Website",
      category: "Web Development",
      image: "/ecomerce.png", // Set to actual image path in public folder
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Travel Blog Platform",
      category: "Full Stack",
      image: "/blogwebsite.jpg",
      description:
        "A content management system for travel bloggers with media management and SEO optimization.",
      tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    },
    {
      title:
        "Ethiopoian University Student's colaboration and learning platform",
      category: "UI/UX Design",
      image: "/studyhub2.png", // Set to actual image path in public folder
      description:
        "A collaborative platform for Ethiopian university students to share resources, collaborate on projects, and enhance their learning experience.",
      tags: ["Figma"],
    },
    // {
    //   title: "AI Content Generator",
    //   category: "Machine Learning",
    //   image: "placeholder", // Replace with actual image path
    //   description:
    //     "A tool that leverages AI to generate marketing content based on brand guidelines and target audience.",
    //   tags: ["Python", "TensorFlow", "NLP", "API Development"],
    // },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore a selection of my recent projects showcasing my skills and
            expertise.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full border transition-colors duration-300 ${
                selectedCategory === cat
                  ? "bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20"
                  : "bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-800">
                    <span className="text-lg font-medium">{project.title}</span>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-300">
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            onClick={() => setSelectedCategory("All")}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
