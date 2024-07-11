import React from "react";
import Review from "@/data/Review"
import ReviewItem from "@/components/ReviewItem";

interface ReviewListProps {
	reviews: Array<Review>
}

const ReviewList: React.FC<ReviewListProps> = ({
	reviews
}) => {
	return (
		<ul>
			{reviews.map(review => (
				<ReviewItem
					key={review.id} 
					review={review}
				/>
			))}
		</ul>
	)
}

export default ReviewList;