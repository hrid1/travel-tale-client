import React, { useState, useEffect } from "react";

const TourGuideProfile = () => {
  // Mock tour guide data
  const guide = {
    _id: "678c1011da6342f043021ff2",
    name: "Rafi",
    image: "https://i.ibb.co/dD4pr1s/person2.png",
    email: "rafi@gmail.com",
    role: "guide",
    info: {
      title: "Aliquam dolor irure",
      reason:
        "Distinctively administrate business resources vis-a-vis ethical niches. Competently monetize premium infrastructures with leading-edge users. Interactively incentivize holistic metrics.",
      cvLink: "https://www.topysox.us",
    },
  };

  const [stories, setStories] = useState([]);

  // Mock stories data (Replace with API call to fetch stories by this guide)
  useEffect(() => {
    const fetchStories = async () => {
      const mockStories = [
        {
          id: "1",
          title: "Mountain Adventure",
          description:
            "Exploring the scenic mountains with a group of adventurous travelers.",
        },
        {
          id: "2",
          title: "Cultural Tour",
          description: "Guiding travelers through historical landmarks.",
        },
      ];
      setStories(mockStories);
    };
    fetchStories();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Profile Section */}
        <div className="flex flex-col justify-center items-center space-x-6 mb-6">
          <img
            src={guide.image}
            alt={guide.name}
            className="w-48 h-48 rounded-lg shadow-lg"
          />
          <div className="text-center mt-2">
            <h2 className="text-2xl font-bold text-cyan-600">{guide.name}</h2>
            <p className="text-gray-600">{guide.email}</p>
            <p className="text-sm text-cyan-500 font-semibold capitalize">
              {guide.role}
            </p>
          </div>
        </div>

        {/* Guide Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">About</h3>
          <p className="text-gray-600 mt-2">{guide.info.reason}</p>
        </div>

    

        {/* Stories Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Stories Added
          </h3>
          {stories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <h4 className="text-md font-bold text-cyan-600 mb-2">
                    {story.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{story.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No stories added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
