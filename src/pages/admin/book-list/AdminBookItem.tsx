import type { Book } from '@/features/book/types/book';
import { CiImageOff } from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';
import AdminActionButtons from './AdminActionButtons';
import { useSearchParams } from 'react-router-dom';

interface AdminBookItemProps {
  book: Book;
}

const AdminBookItem = ({ book }: AdminBookItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCardClick = (bookId: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('action', 'preview');
    params.set('bookId', String(bookId));
    params.delete('status');
    setSearchParams(params);
  };
  return (
    <div className='shadow-soft rounded-2xl p-4 lg:p-5 flex justify-between items-center gap-4'>
      <div className='flex gap-3 lg:gap-4 items-center'>
        {book.coverImage ? (
          <div
            className='w-23 h-34.5 shrink-0 cursor-pointer'
            onClick={() => handleCardClick(book.id)}
          >
            <img
              src={book.coverImage}
              alt='book cover'
              className='size-full object-cover'
            />
          </div>
        ) : (
          <div className='w-23 h-34.5 shrink-0 border flex justify-center items-center'>
            <CiImageOff className='size-6 text-neutral-400' />
          </div>
        )}
        <div className='flex flex-col gap-0.5 lg:gap-1'>
          <p className='border rounded-sm px-2 w-fit text-sm font-bold lg:text-md'>
            {book.category.name}
          </p>
          <p
            className='font-bold text-sm lg:text-lg hover:underline cursor-pointer'
            onClick={() => handleCardClick(book.id)}
          >
            {book.title}
          </p>
          <p className='font-medium text-sm lg:text-md text-neutral-700'>
            {book.author.name}
          </p>
          <div className='flex gap-0.5 items-center'>
            <TiStarFullOutline className='fill-[#FFAB0D]' />
            {book.rating.toFixed(1)}
          </div>
        </div>
      </div>
      <AdminActionButtons bookId={book.id} />
    </div>
  );
};

export default AdminBookItem;
