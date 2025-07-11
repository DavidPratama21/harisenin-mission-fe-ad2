import { useState, useEffect } from "react";
import Star from "../atoms/Star";
const Stars_rating = ({
    rating = 0,
    onRatingChange = null,
    showText = true,
    displayOnly = false,
    amountRated,
}) => {
    const [hover, setHover] = useState(null);
    const [currentRating, setCurrentRating] = useState(Math.round(rating));

    useEffect(() => {
        setCurrentRating(Math.round(rating));
    }, [rating]);

    const handleRating = (newRating) => {
        if (displayOnly) return;

        setCurrentRating(newRating);
        if (onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div
            className={`inline-flex items-center gap-1 ${
                displayOnly ? "cursor-default!" : ""
            }`}
        >
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                const isSelected = starValue <= currentRating;
                const isHovered = starValue <= hover;
                return (
                    <span
                        key={index}
                        className={`cursor-pointer transition-all text-dark-secondary hover:transform hover:scale-110 text-base ${
                            isSelected ? "text-warning-default" : ""
                        } ${
                            isHovered && !displayOnly ? "text-yellow-400" : ""
                        }`}
                        onClick={() => handleRating(starValue)}
                        onMouseEnter={() => !displayOnly && setHover(starValue)}
                        onMouseLeave={() => !displayOnly && setHover(null)}
                        aria-label={`${starValue} star${
                            starValue !== 1 ? "s" : ""
                        }`}
                        role={displayOnly ? "img" : "button"}
                        tabIndex={displayOnly ? -1 : 0}
                    >
                        {
                            isSelected ? (
                                // "★"
                                <Star color="#FCE91B" />
                            ) : (
                                <Star color="#9D9EA1" />
                            )
                            // "☆"
                        }
                    </span>
                );
            })}
            {showText && (
                <span className="ml-2 font-medium text-xs text-dark-secondary">
                    {currentRating} ({amountRated})
                </span>
            )}
        </div>
    );
};

export default Stars_rating;
