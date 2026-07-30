import BackButton from './BackButton';

const Add = () => {
  return (
    <section id='add-book'>
      <div className='flex flex-col gap-4 lg:gap-6'>
        <BackButton>Add Book</BackButton>
      </div>
    </section>
  );
};

export default Add;
