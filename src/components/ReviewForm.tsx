import {useState, useEffect} from "react"
import Star from "@/components/Star";

interface StarFormProps {
  onSuccess: (review: Review) => void
}

const ReviewForm = ({onSuccess}) => {
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
  const createReview = async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newReviewData = {
      rating: currentRating,
      author: 'Default Author', //TODO: store/fetch author from app-level state
      review: formData.get('review')
    }
    const postOptions = {
      method: form.method,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newReviewData),
    };

    const response = await fetch('http://localhost:3000/api/review', postOptions);
    const newReview = await response.json();
    e.target.reset()
    setAllowHover(true);
    setCurrentRating(0);
    onSuccess(newReview);
  }

  return (
    <section className="flex flex-col items-center">
      <h2>Submit a New Review</h2>
      <form method='post' onSubmit={createReview} className="flex flex-col items-center">
        <div>
          <Star starId={1} marked={1 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
          <Star starId={2} marked={2 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
          <Star starId={3} marked={3 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
          <Star starId={4} marked={4 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
          <Star starId={5} marked={5 <= currentRating ? true : false} dynamic={true} onHover={updateRating} onHoverEnd={resetRating} onStarClick={setRating}/>
        </div>
        <textarea className='border-2 border-indigo-500' name='review' />
        <button
          type="submit"
          className="mt-10 h-10 px-6 font-semibold rounded-md bg-indigo-500 hover:bg-indigo-600 text-white"
        >Submit review </button>
      </form>
    </section>
  );
};

export default ReviewForm;
