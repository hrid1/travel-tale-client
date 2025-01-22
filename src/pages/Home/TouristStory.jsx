import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Spiner from "../../components/Spiner";
import StoryCard from "../../components/StoryCard";
import { useLocation, useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import TitleInfo from "../../components/common/TitleInfo";

const TouristStory = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const [role] = useRole();
  console.log(role);
  const { data: stories, isLoading } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-stories?limit=true");
      return data;
    },
  });

  const handleAddStory = () => {
    if (role === "tourist") {
      navigate("/dashboard/tourist-add-stories");
    } else if (role === "guide") {
      navigate("/dashboard/guide-add-stories");
    } else {
      navigate("/login");
    }
  };

  if (isLoading) return <Spiner />;
  return (
    <div className="container mx-auto p-4">
      <TitleInfo
        title="Tourist Story"
        subtitle="Experience the World, One Destination at a Time."
      ></TitleInfo>

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
          onClick={handleAddStory}
          className="btn bg-green-500 text-white"
        >
          Add Story
        </button>
      </div>
    </div>
  );
};

export default TouristStory;
