import Home from '@/pages/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const App = () => {
  return (
    <main className='max-w-screen-lg mx-auto size-full min-h-screen'>
      <div className='p-4 sm:px-7 sm:py-10 size-full space-y-4 sm:space-y-8'>
        <Header />
        <div>
          <Home />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default App;
