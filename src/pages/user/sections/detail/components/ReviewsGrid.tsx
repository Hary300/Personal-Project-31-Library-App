import LoadMoreButton from '@/components/shared/LoadMoreButton';
import ReviewCard from '@/components/shared/ReviewCard';
import { useGetBookReviews } from '@/features/book/hooks/useBook';
import { useParams } from 'react-router-dom';

const ReviewsGrid = () => {
  const { id } = useParams();
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetBookReviews({ id: Number(id) });

  if (error) return <p>{error.message}</p>;
  const reviews = data?.pages.flatMap((page) => page.data.reviews) ?? [];

  if (isLoading) return;
  return (
    <div className='relative pb-14.5 lg:pb-16.5'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <LoadMoreButton
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      />
    </div>
  );
};

export default ReviewsGrid;
