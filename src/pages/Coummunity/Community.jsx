import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Spiner from "../../components/Spiner";
import { FacebookShareButton, FacebookIcon } from "react-share";

const Community = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-stories");
      return data;
    },
  });
  if (isLoading) return <Spiner />;
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Community Stories</h1>
      <p className="text-lg text-center mb-8">
        Discover amazing stories shared by our community members.
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 ">
        {stories?.map((story) => (
          <div
            key={story._id}
            className="bg-white shadow-lg rounded-lg p-4 w-11/12 md:w-full mx-auto flex flex-col justify-between relative"
          >
            {/* Story Images */}
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-2">
                {story?.images?.slice(0, 2).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Story Image ${index}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Story Details */}
            <div>
              <h3 className="text-lg font-bold text-cyan-600 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {story.description.slice(0, 100)}
              </p>
              <p className="text-gray-500 text-xs">By: {story.owner}</p>
            </div>

            {/* Share Button */}
            <div className="mt-4 right-2.5 bottom-2 absolute">
              <FacebookShareButton
                url={`http://localhost:5173/story/${story._id}`}
                quote={story.title}
                hashtag="#travel"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Community;
