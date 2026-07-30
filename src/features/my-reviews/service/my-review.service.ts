import { api } from '@/lib/axios';

interface AddMyReviewPayload {
  bookId: number;
  star: number;
  comment: string;
}

export const addMyReview = async (payload: AddMyReviewPayload) => {
  const { data } = await api.post('/reviews', payload);
  return data;
};

export const deleteMyReview = async (reviewId: number) => {
  const { data } = await api.delete(`/reviews/${reviewId}`);
  return data;
};
