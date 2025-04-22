import { RevealOnScroll } from "../RevealOnScroll";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building custom, responsive and scalable web applicationswebsite development using modern technologies and frameworks.",
      icon: "🌐",
      link: "#web-development",
    },
    {
      title: "IT Consulting",
      description: "Providing expert advice and solutions to improve your IT , including network architecture, cybersecurity, and cloud computing.",
      icon: "💼",
      link: "#it-consulting",
    },
    {
      title: "Digital Marketing",
      description: "Developing and executing comprehensive digital marketing strategies to help businesses reach and engage with their target audience",
      icon:  "📈",
      link: "#technical-writing",
    },
    {
      title: "SEO Optimization",
      description: "Improving your website's visibility and ranking on search engines through expert search engine optimization techniques..",
      icon: "🔍",
      link: "#seo-optimization",
    },
  ];

  return (
    <section
      id="services"
      className="flex items-center justify-center  bg-gradient-custom min-h-screen"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center py-10">
            Services I Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 text-center bg-gray-900 shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/80 transition-all flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm text-justify flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <a
                    href={`https://wa.me/+254729239023?text=Hi%20Noah%2C%20I%27m%20interested%20in%20a%20project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-teal-900 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};