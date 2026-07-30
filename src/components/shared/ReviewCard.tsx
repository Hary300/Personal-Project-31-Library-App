import type { Review } from '@/features/book/types/book';
import { useGetProfile } from '@/features/profile/hooks/useProfile';
import { formatDateTime } from '@/utils/formate-date';
import { CiImageOff } from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';
import { Skeleton } from '../ui/skeleton';
import { useDeleteMyReview } from '@/features/my-reviews/hooks/useMyReview';
import { Button } from '../ui/button';
import { GoTrash } from 'react-icons/go';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface ReviewCardProps {
  review: Review;
}
const ReviewCard = ({ review }: ReviewCardProps) => {
  const { data, isLoading } = useGetProfile();
  const { mutate, isPending } = useDeleteMyReview();
  const dateTime = formatDateTime(review.createdAt);
  const profilePhoto = data?.data.profile.profilePhoto;

  const handleDeleteReviewClick = (reviewId: number) => {
    mutate(reviewId);
  };
  return (
    <div className='flex flex-col p-4 rounded-2xl shadow-soft'>
      <div className='flex justify-between items-start'>
        <div className='flex gap-3 items-center mb-4 lg:mb-4.5'>
          {isLoading ? (
            <div className='size-14.5 lg:size-16 shrink-0 rounded-full border flex justify-center items-center overflow-hidden'>
              <Skeleton className='size-full' />
            </div>
          ) : profilePhoto ? (
            <div className='size-14.5 lg:size-16 shrink-0 rounded-full border flex justify-center items-center overflow-hidden'>
              <img src={profilePhoto} alt='avatar' />
            </div>
          ) : (
            <div className='size-14.5 lg:size-16 shrink-0 rounded-full border flex justify-center items-center'>
              <CiImageOff className='size-8 text-neutral-400' />
            </div>
          )}
          <div className='flex flex-col'>
            <p className='font-bold text-sm lg:text-lg'>{review.user.name}</p>
            <p className='font-medium lg:text-md'>{dateTime}</p>
          </div>
        </div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant='outline'
                className='size-8 flex justify-center items-center aspect-square shrink-0'
              >
                <GoTrash />
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure to delete this review?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className='px-4'>No</AlertDialogCancel>
                <AlertDialogAction
                  className='px-4'
                  onClick={() => handleDeleteReviewClick(review.id)}
                  disabled={isPending}
                >
                  {isPending ? 'Deleting...' : 'Delete'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className='flex'>
        {Array.from({ length: review.star }).map((_, index) => (
          <TiStarFullOutline key={index} className='fill-[#FFAB0D]' />
        ))}
      </div>

      <p className='font-semibold tex-sm lg:text-md'>{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
