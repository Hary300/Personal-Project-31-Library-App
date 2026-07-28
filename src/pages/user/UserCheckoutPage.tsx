import Container from '@/components/layouts/Container';

const UserCheckoutPage = () => {
  return (
    <Container>
      <section id='checkout' className='relative flex flex-col gap-5 lg:gap-10'>
        <h2 className='font-bold text-display-xs lg:text-display-lg'>
          Checkout
        </h2>
      </section>
    </Container>
  );
};

export default UserCheckoutPage;
