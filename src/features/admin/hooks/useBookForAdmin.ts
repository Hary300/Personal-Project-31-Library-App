import { useInfiniteQuery } from '@tanstack/react-query';
import {
  getAllBooksForAdmin,
  type GetAllBooksForAdminParams,
} from '../service/userAdmin.service';

export const useGetAllBooksForAdmin = (
  params: Omit<GetAllBooksForAdminParams, 'page'>
) => {
  return useInfiniteQuery({
    queryKey: ['admin', 'books', params],
    queryFn: ({ pageParam }) =>
      getAllBooksForAdmin({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
  });
};
