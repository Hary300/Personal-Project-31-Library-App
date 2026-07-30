import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMyReview, deleteMyReview } from '../service/my-review.service';
import { toast } from 'sonner';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/types';

export const useAddMyReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addMyReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books', 'reviews'],
      });
      toast.success('Review added successfully');
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message ?? 'Something went wrong');
    },
  });
};

export const useDeleteMyReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMyReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books', 'reviews'],
      });
      toast.success('Review deleted successfully');
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message ?? 'Something went wrong');
    },
  });
};
