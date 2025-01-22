import faqimg from "../../assets/tourFaq.webp";
import TitleInfo from "../../components/common/TitleInfo";
const FaqSection = () => {
  return (
    <div>
      <TitleInfo
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common queries about our services."
      ></TitleInfo>

      <section className="flex items-center justify-around gap-6">
        <div className="w-full md:w-1/2 p-5 rounded-md">
          <img
            className="w-full h-full overflow-hidden rounded-md"
            src={faqimg}
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 space-y-2.5">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is Travel Tale?
            </div>
            <div className="collapse-content">
              <p>
                Travel Tale is your ultimate companion for exploring the world,
                offering curated travel guides, destination tips, and
                personalized trip planning services.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I book a trip?
            </div>
            <div className="collapse-content">
              <p>
                You can easily book your trip by visiting our "Trips" section,
                selecting your preferred destination, and following the guided
                booking process.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you offer group travel discounts?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer special discounts for group travel packages.
                Contact our support team for more details and eligibility
                criteria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
