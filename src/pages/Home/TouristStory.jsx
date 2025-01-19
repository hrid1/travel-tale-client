import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Spiner from "../../components/Spiner";
import StoryCard from "../../components/StoryCard";

const TouristStory = () => {
  const axiosPublic = UseAxiosPublic();
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
    </div>
  );
};

export default TouristStory;
