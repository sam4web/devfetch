const Skeleton = () => {
  return (
    <section className='grid gap-5 sm:gap-7'>
      <div className='grid grid-cols-3 gap-5 sm:gap-7'>
        <div className='skel h-64'></div>
        <div className='skel h-64 col-span-2'></div>
      </div>
      <div className='skel h-[560px]'></div>
    </section>
  );
};

export default Skeleton;
