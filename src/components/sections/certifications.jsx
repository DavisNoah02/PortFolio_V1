import { FaCheckCircle } from "react-icons/fa";
import certificates from "../../data/certifications";

// const certificates = [
//     {
//         title: "AWS Certified Cloud Practitioner",
//         issuer: "Amazon Web Services",
//         date: "April 24, 2024 EDT",
//         credentialUrl: "https://www.credly.com/badges/d92bbcc0-9575-47b5-bc25-ccfceb2fc494/linked_in_profile",
//         image: "aws_ccp.png",
//         description: "Fundamental knowledge of AWS Cloud and global infrastructure."
//     },
//   {
//     title: "Essential AI skills",
//     issuer: "ALX_Sand Kenya",
//     date: "July 8, 2024 EDT",
//     credentialUrl: "https://intranet.alxswe.com/certificates/R82sr3ehnG",
//     image: "aice.png",
//   },
//   {
//     title: "Professional Skills in Workspace",
//     issuer: "ALX_Sand Kenya",
//     date: "April 15, 2025 EDT",
//     credentialUrl: "https://intranet.alxswe.com/certificates/YM256BJf8e",
//     image: "pf.png",
//   },
//   {
//     title: "International Computer Driving Licence",
//     issuer: "ICDL Africa",
//     date: "Sep 15, 2021 EDT",
//     credentialUrl: "https://profile.icdlafrica.org/3b665a06-d2ed-4792-b211-3ea60639f7dc#acc.A7aRX0tF",
//     image: "icdl.png",
//   },
  
// ];

export const Certifications = () => (
  <section id="certifications" className="min-h-screen py-5   flex items-center justify-center bg-gradient-custom ">
    <div className="max-w-6xl w-full mx-auto px-4">
    {/* <h4 className="text-xl  mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
       CERTIFICATIONS
      </h4> */}
      <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">
       Browse my Achievements
      </h2>
      {/* divider/accent */}
       <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
       
      <p className="text-gray-300 mb-6 text-center">
      Certifications and awards that showcase my journey of continuous learning and expertise in the tech field
            </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certificates.map((cert, idx) => (
          <div
          key={idx}
          className="bg-gradient-custom rounded-xl shadow-lg flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-3 hover:shadow-4xl  
            focus-within:-translate-y-3 focus-within:shadow-2xl focus-within:border-cyan-400
            sm:hover:-translate-y-3 sm:focus-within:-translate-y-3
            "
          tabIndex={0}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="h-30 object-contain rounded mb-4 "
            />
            <h3 className="text-lg font-bold text-center mb-2">{cert.title}</h3>
            <p className="text-gray-400 text-center mb-4 text-sm">Earned {cert.date}</p>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-700 to-green-900 hover:animate-pulse text-green-200  font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              <FaCheckCircle className="mr-2 text-blue-400" />
              Verify
            </a>
          </div>
        ))}
      </div>
      
    </div>
  </section>
);