import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover-scale">
                <Icon name="Car" size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                АвтоВАЗ
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Лидер российского автопрома. Создаём автомобили, которые меняют жизнь к лучшему.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'Facebook', href: '#' },
                { icon: 'Instagram', href: '#' },
                { icon: 'Twitter', href: '#' },
                { icon: 'Youtube', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover-scale group"
                >
                  <Icon name={social.icon} size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="Car" size={20} className="mr-2 text-blue-400" />
              Автомобили
            </h4>
            <ul className="space-y-3">
              {['LADA Vesta', 'LADA Granta', 'LADA Niva', 'LADA Largus', 'Новинки'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group story-link">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="Wrench" size={20} className="mr-2 text-purple-400" />
              Сервис
            </h4>
            <ul className="space-y-3">
              {['Техобслуживание', 'Запчасти', 'Гарантия', 'Дилеры', 'Поддержка'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group story-link">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="Phone" size={20} className="mr-2 text-pink-400" />
              Контакты
            </h4>
            <div className="space-y-4">
              <a href="tel:88002500600" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                  <Icon name="Phone" size={18} />
                </div>
                <span className="story-link">8 800 250-06-00</span>
              </a>
              
              <a href="mailto:info@lada.ru" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                  <Icon name="Mail" size={18} />
                </div>
                <span className="story-link">info@lada.ru</span>
              </a>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} />
                </div>
                <span className="text-sm leading-relaxed">
                  445024, Самарская обл.,<br />
                  г. Тольятти, ул. Фрунзе, 1
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 АвтоВАЗ. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Политика конфиденциальности', 'Условия использования', 'Cookie'].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 story-link"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
