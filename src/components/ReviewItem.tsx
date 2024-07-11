import React from "react";
import Review from "@/data/Review"
import StarRating from "@/components/StarRating"

interface ReviewItemProps {
	review: Review
}

const ReviewItem: React.FC<ReviewItemProps> = ({review}) => {
	return (
		<div className='py-6'>
			<StarRating rating={review.rating} />
			<p className='prose'>{review.review}</p>
			<p className='font-semibold'>{review.author}</p>
		</div>
	)
}

export default ReviewItem;