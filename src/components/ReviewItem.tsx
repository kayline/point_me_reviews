import React from "react";
import Review from "@/data/Review"
import StarRating from "@/components/StarRating"

interface ReviewItemProps {
	review: Review
}

const ReviewItem: React.FC<ReviewItemProps> = ({review}) => {
	return (
		<div>
			<StarRating rating={review.rating} />
			<p>{review.review}</p>
			<p>{review.author}</p>
		</div>
	)
}

export default ReviewItem;