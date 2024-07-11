import {useState, useEffect} from "react";
import Review from "@/data/Review";
import StarForm from "@/components/StarForm";
import ReviewList from "@/components/ReviewList"

const ReviewApp = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    const loadReviews = async() => {
      const response = await fetch("http://localhost:3000/api/reviews")
      const data = await response.json();
      console.log(data)
      setReviews(data);
    };
    loadReviews();
  },[])

  const addReview = (review: Review) => {
    setReviews([...reviews, review]);
  }
  
  return (
    <div>
      <h2>Current Reviews</h2>
      <ReviewList reviews={reviews}/>
      <h2>Submit a New Review</h2>
      <StarForm onSuccess={addReview}/>
    </div>
  );
};

ReviewApp.displayName = "ReviewApp";
export default ReviewApp;
