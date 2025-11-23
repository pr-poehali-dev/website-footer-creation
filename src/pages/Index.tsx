import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center px-6">
          <h1 className="text-6xl font-montserrat font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            АвтоВАЗ
          </h1>
          <p className="text-2xl text-gray-700 font-light animate-fade-in">
            Будущее начинается здесь
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;