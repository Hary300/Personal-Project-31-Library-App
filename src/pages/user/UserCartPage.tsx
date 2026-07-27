import Container from '@/components/layouts/Container';
import EmptyState from '@/components/shared/EmptyState';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  useDeleteOneItemFromCart,
  useGetMyCart,
} from '@/features/cart/hooks/useCart';
import { GoTrash } from 'react-icons/go';

const UserCartPage = () => {
  const { data, isLoading, error } = useGetMyCart();
  const { mutate } = useDeleteOneItemFromCart();
  if (isLoading) return;
  if (error) return <p>{error.message}</p>;
  const books = data?.data.items ?? [];

  const handleDeleteClick = (itemId: number) => {
    mutate(itemId);
  };
  return (
    <Container>
      <section id='cart' className='relative flex flex-col gap-5 lg:gap-10'>
        <h2 className='font-bold text-display-xs lg:text-display-lg'>
          My Cart
        </h2>
        {books.length > 0 ? (
          <div className='flex flex-col gap-4 lg:gap-6 divide-y'>
            {books.map((book) => (
              <div key={book.book.title} className='flex justify-between'>
                <div key={book.id} className='flex gap-4 pb-4 lg:pb-6'>
                  <Checkbox id={book.book.title} />
                  <label
                    htmlFor={book.book.title}
                    className='flex gap-3 lg:gap-4 items-center'
                  >
                    <div className='w-17.5 h-26.5 shrink-0'>
                      <img
                        src={book.book.coverImage}
                        alt='book cover'
                        className='size-full object-cover'
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='border rounded-sm flex justify-center items-center font-bold text-sm w-fit px-2'>
                        {book.book.category.name}
                      </div>
                      <p className='font-bold text-md lg:text-lg'>
                        {book.book.title}
                      </p>
                      <p className='font-medium text-neutral-700 text-sm lg:text-md'>
                        {book.book.author.name}
                      </p>
                    </div>
                  </label>
                </div>
                <Button
                  variant='outline'
                  className='size-8 flex justify-center items-center aspect-square shrink-0'
                  onClick={() => handleDeleteClick(book.id)}
                >
                  <GoTrash />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState className='h-50' />
        )}
      </section>
    </Container>
  );
};

export default UserCartPage;
