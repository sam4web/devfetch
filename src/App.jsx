import Home from '@/pages/Home';
import Header from '@/components/Header';

const App = () => {
  return (
    <main className='max-w-screen-lg mx-auto h-screen w-full'>
      <div className='p-4 sm:px-7 sm:py-10 size-full'>
        <Header />
        <Home />
      </div>
    </main>
  );
};

export default App;
