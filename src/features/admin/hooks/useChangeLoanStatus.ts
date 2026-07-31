import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeLoanStatus } from '../service/loanAdmin.service';
import { toast } from 'sonner';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/types';

export const useChangeLoanStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeLoanStatus,
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: ['admin', 'borrowed-books'],
      });
      queryClient.invalidateQueries({
        queryKey: ['loan', result.data.loan.id],
      });
      toast.success(result.message);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message ?? 'Something went wrong');
    },
  });
};
