const UserReviews = ({ reviews }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-secondary-600">نظرات کاربران</h2>
      <div className="mt-4 space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-secondary-100 p-4 rounded-lg">
            <p className="text-sm text-secondary-600">{review.comment}</p>
            <p className="text-xs text-secondary-500 mt-2">— {review.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
