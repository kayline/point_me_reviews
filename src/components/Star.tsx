type StarProps = {
  marked: boolean;
  starId: number;
  dynamic: boolean;
  onHover: (rating: number) => void;
  onHoverEnd: () => void;
  onStarClick: (rating: number) => void;
};

const Star = ({ marked, starId, dynamic, onHover, onHoverEnd, onStarClick }: StarProps) => {
  const onMouseEnter = () => {
    if(dynamic) {
      onHover(starId);
    };
  }

  const onMouseLeave = () => {
    if(dynamic) {
      onHoverEnd();
    }
  }

  const onClick = () => {
    if(dynamic) {
      onStarClick(starId);
    }
  }

  return (
    <span
      data-star-id={starId}
      className="text-3xl cursor-pointer"
      role="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

Star.displayName = "Star";
export default Star;
