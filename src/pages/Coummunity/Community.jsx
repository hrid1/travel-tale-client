import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Spiner from "../../components/Spiner";
import { FacebookShareButton, FacebookIcon } from "react-share";
import StoryCard from "../../components/StoryCard";

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
      <section className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 my-6">
        {stories?.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </section>
    </div>
  );
};

export default Community;
