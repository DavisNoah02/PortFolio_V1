import { RevealOnScroll } from "../RevealOnScroll";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and scalable web applications using modern technologies.",
      icon: "🌐",
    },
    {
      title: "IT Consulting",
      description: "Providing expert advice and solutions to improve your IT infrastructure.",
      icon: "💼",
    },
    {
      title: "Technical Writing",
      description: "Creating clear and concise technical documentation and tutorials.",
      icon: "✍️",
    },
    {
      title: "SEO Optimization",
      description: "Improving your website's visibility and ranking on search engines.",
      icon: "🔍",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};