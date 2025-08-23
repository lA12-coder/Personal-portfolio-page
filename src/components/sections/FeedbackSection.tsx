import { useState } from "react";
import { Star, MessageSquare, Quote } from "lucide-react";

const FeedbackSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    rating: 0,
    feedback: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "placeholder", // Replace with actual image path
      rating: 5,
      text: "Working with Lidet was an absolute pleasure. He delivered our website ahead of schedule and exceeded all our expectations. The attention to detail and understanding of our brand was impressive.",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, Innovate Co.",
      image: "placeholder", // Replace with actual image path
      rating: 5,
      text: "The portfolio website created for our company has significantly increased our conversion rates. The modern design and intuitive user experience have received countless compliments from our clients.",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, Design Studio",
      image: "placeholder", // Replace with actual image path
      rating: 5,
      text: "I've worked with many developers, but few have the combination of technical skill and design sensibility that this professional brings. They transformed our concept into a beautiful, functional reality.",
    },
    {
      name: "David Wilson",
      position: "Product Manager, SaaS Platform",
      image: "placeholder", // Replace with actual image path
      rating: 5,
      text: "The attention to detail and commitment to quality is unmatched. Our web application not only looks stunning but performs exceptionally well. I highly recommend their services for any digital project.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRating = (rating: number) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    try {
      // Compose feedback message with company and rating
      const feedbackMessage = `Company/Position: ${form.company}\nRating: ${form.rating}/5\n\n${form.feedback}`;
      // Use the same EmailJS template as ContactSection
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: feedbackMessage,
        to_email: "lidetadmassu217@outlook.com",
      };
      // Dynamically import emailjs to avoid issues if not used elsewhere
      const emailjs = await import("@emailjs/browser");
      const result = await emailjs.send(
        "service_anlabpi",
        "template_feqc99u",
        templateParams,
        "LVLZAU7yRWUgjLTmv"
      );
      if (result.status === 200) {
        setSuccess(true);
        setForm({ name: "", email: "", company: "", rating: 0, feedback: "" });
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Client Feedback
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center mb-6">
                {/* Testimonial Quote Icon */}
                <div className="mr-4">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <Quote className="h-6 w-6 text-purple-500" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

              {/* Client Info */}
              <div className="flex items-center">
                {/* Client Avatar */}
                <div className="h-12 w-12 rounded-full bg-gray-700 mr-4 flex items-center justify-center text-gray-500">
                  {/* Placeholder for client image */}
                  <MessageSquare className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Leave Your Feedback
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Company / Position
                </label>
                <input
                  type="text"
                  id="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Company Inc. / CEO"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className={`bg-gray-700/50 border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        form.rating >= rating ? "bg-yellow-500/20" : ""
                      }`}
                      onClick={() => handleRating(rating)}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          form.rating >= rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  value={form.feedback}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Share your experience working with me..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                {submitting ? "Submitting..." : "Submit Feedback"}
              </button>
            </form>
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
            Thank you for your feedback! Your message has been sent.
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackSection;
