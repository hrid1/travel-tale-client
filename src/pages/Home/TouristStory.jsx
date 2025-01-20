import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Spiner from "../../components/Spiner";
import StoryCard from "../../components/StoryCard";
import { useNavigate } from "react-router-dom";

const TouristStory = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const { data: stories, isLoading } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-stories?limit=true");
      return data;
    },
  });
  if (isLoading) return <Spiner />;
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center">Tourist Story</h2>
        <p></p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {stories?.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </section>

      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          onClick={() => navigate("/community")}
          className="btn bg-green-500 text-white"
        >
          Show Story
        </button>
        <button
          onClick={() => navigate("dashboard/add-stories")}
          className="btn bg-green-500 text-white"
        >
          Add Story
        </button>
      </div>
    </div>
  );
};

export default TouristStory;
