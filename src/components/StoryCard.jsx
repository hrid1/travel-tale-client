import { FacebookShareButton, FacebookIcon } from "react-share";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ story }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleShareClick = () => {
    if (!user) {
      navigate("/login");
    }
  };

  return (
    <div>
      <div
        key={story._id}
        className="bg-white shadow-lg rounded-lg p-4 h-full w-11/12 md:w-full mx-auto flex flex-col justify-between relative "
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
        <div className="flex-1">
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
          {user ? (
            <FacebookShareButton
              url={`${import.meta.env.VITE_API_URL}/story/${story._id}`}
              quote="hi dos5t"
              hashtag="#travel"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          ) : (
            <button onClick={handleShareClick}>
              <FacebookIcon size={32} round />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
