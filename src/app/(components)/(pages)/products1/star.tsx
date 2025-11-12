interface StarRatingProps {
  rate: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rate }) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}

      {/* Half Star */}
      {hasHalfStar && <span className="text-yellow-400 text-lg">★</span>}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-lg">
          ★
        </span>
      ))}

      {/* Rating Number */}
      <span className="text-sm text-gray-600 ml-1">({rate})</span>
    </div>
  );
};

export default StarRating;
