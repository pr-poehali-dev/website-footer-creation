import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Car" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-montserrat font-bold text-gray-900">Классика ВАЗ</h1>
              <p className="text-xs text-gray-500">2101 • 2107</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium story-link">
              Главная
            </a>
            <a href="/lifehacks" className="text-gray-700 hover:text-orange-600 transition-colors font-medium story-link">
              Лайфхаки
            </a>
            <a href="/article" className="text-gray-700 hover:text-orange-600 transition-colors font-medium story-link">
              Статьи
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium story-link">
              О нас
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-orange-600">
              <Icon name="Search" size={20} />
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              Подписаться
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <a href="/" className="block text-gray-700 hover:text-orange-600 transition-colors py-2">
              Главная
            </a>
            <a href="/lifehacks" className="block text-gray-700 hover:text-orange-600 transition-colors py-2">
              Лайфхаки
            </a>
            <a href="/article" className="block text-gray-700 hover:text-orange-600 transition-colors py-2">
              Статьи
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-600 transition-colors py-2">
              О нас
            </a>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              Подписаться
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;