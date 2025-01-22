import React from "react";

const AboutDeveloper = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-orange-700 min-h-screen p-8 text-white">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10 text-gray-900">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold">Hridoy SHIL</h1>
          <p className="text-2xl mt-2 text-gray-600">Front-End Developer</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* About Me Section */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">About Me</h2>
            <p className="text-gray-700">
              I am a passionate web developer with experience in building responsive and user-friendly applications. I enjoy solving problems and creating features that improve user experiences. My goal is to work in a team where I can learn, grow, and contribute to meaningful projects using modern tools and technologies.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              <li><strong>Frontend:</strong> JavaScript, React.js, React Router, Axios, Tailwind CSS, Bootstrap</li>
              <li><strong>Backend:</strong> Firebase, Node.js, Express, MongoDB, JWT, Stripe</li>
              <li><strong>Tools:</strong> VS Code, Git, GitHub, Postman</li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Projects</h2>
          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-green-600">Artifact Atlas (Artifact Collection Guides)</h3>
              <p className="text-gray-700 mt-2">
                Developed a web application where users can explore, view, and add artifacts in a card-based layout. 
                Implemented Firebase Authentication for secure user login and registration. Created a "Liked Artifacts" feature, 
                allowing users to view their liked artifacts on a dedicated route. Designed a responsive user interface optimized for both mobile and desktop devices.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  GitHub
                </a>
                <span className="mx-4">|</span>
                <a
                  href="https://artifact-live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-green-600">VisaEase (Visa Application System)</h3>
              <p className="text-gray-700 mt-2">
                Developed VisaEase, a platform to simplify visa applications with a dynamic and responsive interface. Implemented secure authentication 
                using Firebase for login, registration, and user-specific dashboards. Added visa tracking and CRUD functionalities for managing, updating, 
                and deleting records in real-time. Designed a responsive user interface optimized for all devices, enhancing user experience.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  GitHub
                </a>
                <span className="mx-4">|</span>
                <a
                  href="https://visa-live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-10 bg-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Education</h2>
          <p className="text-gray-700">
            <strong>BSc in Computer Science Engineering</strong><br />
            University Of Global Village, 2021-2024
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-600">Email: <span className="text-green-500">hridoyshil1@gmail.com</span></p>
          <p className="text-lg text-gray-600">Phone: <span className="text-green-500">+8801756523893</span></p>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
