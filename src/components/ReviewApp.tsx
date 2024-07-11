import {useState, useEffect} from "react";
import Review from "@/data/Review";
import StarForm from "@/components/StarForm";
import ReviewList from "@/components/ReviewList"

const ReviewApp = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    // TODO: Add a loading state and corresponding visual
    const loadReviews = async() => {
      const response = await fetch("http://localhost:3000/api/reviews")
      const data = await response.json();
      setReviews(data);
    };
    loadReviews();
  },[])

  const addReview = (review: Review) => {
    setReviews([...reviews, review]);
  }
  
  return (
    <div>
      <ReviewList reviews={reviews}/>
      <StarForm onSuccess={addReview}/>
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;
