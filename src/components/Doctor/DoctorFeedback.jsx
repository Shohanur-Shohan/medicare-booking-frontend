import { useState } from "react";
import {
  Rating,
  Star,
  ThinStar,
  RoundedStar,
  ThinRoundedStar,
  StickerStar,
} from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

function DoctorFeedback() {
  const [rating, setRating] = useState(null);

  const includedShapesStyles = [ThinRoundedStar].map((itemShapes) => ({
    itemShapes,
    activeFillColor: "#f59e0b",
    inactiveFillColor: "#ffedd5",
  }));

  const sumbitFeedback = (rate) => {
    if (rating !== null) {
      setRating(rate);
      console.log(rating);
    }
  };

  return (
    <div className="mb-[50px]">
      <div className="mt-2">
        <h3 className="mb-2 text-[16px] font-semibold leading-6 text-headingColor">
          How would you rate the overall experience?
        </h3>
        <div>
          <div>
            {includedShapesStyles.map((itemStyles, index) => (
              <Rating
                key={`shape_${index}`}
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
                itemStyles={itemStyles}
              />
            ))}
          </div>
        </div>
        <div className="mt-[20px]">
          <h3 className="mb-4 text-[16px] font-semibold leading-6 text-headingColor">
            Share your feedback or suggestions
          </h3>
          <textarea
            rows={5}
            placeholder="Write your message"
            className="w-full resize-none rounded-md border border-solid border-[#0066ff34] px-3 py-3 outline-primaryColor focus:outline"
            defaultValue={""}
          />
        </div>
        <button className="btn mt-5" onClick={() => sumbitFeedback()}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default DoctorFeedback;
