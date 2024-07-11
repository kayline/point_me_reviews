import {useState, useEffect} from "react"
import Star from "@/components/Star";

interface StarFormProps {
  onSuccess: (review: Review) => void
}

const StarForm = ({onSuccess}) => {
  const [currentRating, setCurrentRating] = useState(0)
  const [allowHover, setAllowHover] = useState(true)
  const updateRating = (newRating: number) => {
    if(allowHover) {
      setCurrentRating(newRating);      
    }
  }
  const resetRating = () => {
    if(allowHover) {
      setCurrentRating(0);
    }
  }
  const setRating = (newRating: number) => {
    setAllowHover(false);
    setCurrentRating(newRating);
  }
  const createReview = async() => {
    const newReviewData = {
      rating: currentRating,
      review: 'Some default text',
      author: 'Default Author'
    };
    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newReviewData),
    };

    const response = await fetch('http://localhost:3000/api/review', postOptions);
    const newReview = await response.json();
    onSuccess(newReview);
  }

  return (
    <section className="flex flex-col items-center">
      <div>
        <Star starId={1} marked={1 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
        <Star starId={2} marked={2 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
        <Star starId={3} marked={3 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
        <Star starId={4} marked={4 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
        <Star starId={5} marked={5 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
      </div>
      <input
        type="submit"
        className="mt-10 h-10 px-6 font-semibold rounded-md bg-black text-white"
        value="Submit review"
        onClick={createReview}
      />
    </section>
  );
};

StarForm.displayName = "StarForm";
export default StarForm;
