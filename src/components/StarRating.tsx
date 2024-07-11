import Star from "@/components/Star";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({rating}) => {
  return (
    <section className="flex flex-col items-center">
      <div>
        <Star starId={1} marked={1 <= rating ? true : false} dynamic={false}/>
        <Star starId={2} marked={2 <= rating ? true : false} dynamic={false}/>
        <Star starId={3} marked={3 <= rating ? true : false} dynamic={false}/>
        <Star starId={4} marked={4 <= rating ? true : false} dynamic={false}/>
        <Star starId={5} marked={5 <= rating ? true : false} dynamic={false}/>
      </div>
    </section>
  );
};

StarRating.displayName = "StarRating";
export default StarRating;
