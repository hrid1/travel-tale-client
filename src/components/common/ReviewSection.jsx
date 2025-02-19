import { FaStar } from "react-icons/fa";
import reviewsData from "../../data/reviews.json";
import Marquee from "react-fast-marquee";

const ReviewSection = () => {
  return (
    <div className="relative bg-white p-4 md:p-12">
      <div className="text-center my-6">
        <h2 className="text-center mb-4 font-bold text-3xl">Tourist Reviews</h2>
        <p>There are showing some review of our Customar.</p>
      </div>

      <Marquee pauseOnHover={true} gradient={true}>
        {reviewsData.map((review, idx) => (
          <div key={idx} className="rounded-lg p-4 mx-4">
            <div className="card  w-96 shadow-xl bg-orange-50">
              <div className="card-body">
                <h2 className="card-title">{review.title}</h2>
                <p>{review.description}</p>
                <div className="card-actions justify-between items-center">
                  <div>
                    <p className="font-bold text-sm">{review.author}</p>
                  </div>
                  <button className="btn btn-sm">
                    <FaStar className="text-orange-500" /> {review.rating}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ReviewSection;
