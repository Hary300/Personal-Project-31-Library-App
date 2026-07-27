import Container from '@/components/layouts/Container';
import HorizontalLine from '@/components/shared/HorizontalLine';
import Detail from './sections/detail/Detail';
import Reviews from './sections/detail/Reviews';
import RelatedBooks from './sections/detail/RelatedBooks';

const UserDetailBookPage = () => {
  return (
    <Container className='lg:gap-16'>
      <Detail />
      <HorizontalLine />
      <Reviews />
      <HorizontalLine />
      <RelatedBooks />
    </Container>
  );
};

export default UserDetailBookPage;
