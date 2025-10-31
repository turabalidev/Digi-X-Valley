// src/components/admin/venues/StarRating.jsx
import React from 'react';

const StarRating = ({ rating = 4.5 }) => {
  // Always show 5 full stars (the design uses ★ for every star)
  const fullStars = '★★★★★';

  return (
    <div className="flex items-center gap-2">
      <span className="text-yellow-400 text-lg leading-none">
        {fullStars}
      </span>
      <span className="text-sm text-gray-600">({rating})</span>
    </div>
  );
};

export default StarRating;