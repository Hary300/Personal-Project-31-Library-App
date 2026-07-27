import type { Book, RecommendedBook } from '@/features/book/types/book';
import type { BookDataCard } from './BookCard';
import BookCard from './BookCard';

interface BooksGridProps {
  books: Book[] | RecommendedBook[];
}

const BooksGrid = ({ books }: BooksGridProps) => {
  return (
    <div className='grid gap-4 lg:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {books.map((book) => {
        const bookDataCard: BookDataCard = {
          coverImage: book.coverImage,
          authorName: book.author.name,
          id: book.id,
          rating: book.rating,
          title: book.title,
        };
        return <BookCard key={book.id} bookDataCard={bookDataCard} />;
      })}
    </div>
  );
};

export default BooksGrid;
