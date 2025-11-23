import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<'Все' | '2101' | '2107' | 'Ремонт'>('Все');

  const blogPosts = [
    {
      title: 'История легендарной "Копейки": ВАЗ 2101',
      excerpt: 'Рассказываем о том, как создавалась первая модель Волжского автозавода, которая стала символом эпохи и покорила сердца миллионов автолюбителей по всему миру.',
      image: 'https://cdn.poehali.dev/projects/7a9ab0bc-03e9-4c5c-a2eb-b07e933f2a28/files/7bb0c174-faeb-4fda-846f-23c1bfc6ad93.jpg',
      category: 'История',
      date: '15 янв',
      readTime: '5 мин',
      model: '2101' as const
    },
    {
      title: 'ВАЗ 2107: Последняя классика с комфортом',
      excerpt: 'Узнайте все о самой популярной модификации классического семейства ВАЗ. От технических характеристик до секретов обслуживания.',
      image: 'https://cdn.poehali.dev/projects/7a9ab0bc-03e9-4c5c-a2eb-b07e933f2a28/files/7a6d3e11-dfa4-40c2-b345-829f0fac8193.jpg',
      category: 'Обзор',
      date: '12 янв',
      readTime: '7 мин',
      model: '2107' as const
    },
    {
      title: 'Настройка карбюратора: Пошаговая инструкция',
      excerpt: 'Подробное руководство по регулировке карбюратора ДААЗ на классических моделях ВАЗ. Все тонкости и нюансы от опытных механиков.',
      image: 'https://cdn.poehali.dev/projects/7a9ab0bc-03e9-4c5c-a2eb-b07e933f2a28/files/e47bb975-9d44-43fc-bb14-77ba8a78c438.jpg',
      category: 'Ремонт',
      date: '10 янв',
      readTime: '10 мин',
      model: 'Общее' as const
    },
    {
      title: 'Тюнинг подвески: Делаем классику комфортнее',
      excerpt: 'Современные решения для улучшения управляемости и комфорта классических моделей ВАЗ. Обзор амортизаторов, пружин и стабилизаторов.',
      image: 'https://cdn.poehali.dev/projects/7a9ab0bc-03e9-4c5c-a2eb-b07e933f2a28/files/7bb0c174-faeb-4fda-846f-23c1bfc6ad93.jpg',
      category: 'Тюнинг',
      date: '8 янв',
      readTime: '6 мин',
      model: '2101' as const
    },
    {
      title: 'Электрика "семёрки": Типичные неисправности',
      excerpt: 'Разбираем самые частые проблемы электрооборудования ВАЗ 2107 и способы их устранения своими руками.',
      image: 'https://cdn.poehali.dev/projects/7a9ab0bc-03e9-4c5c-a2eb-b07e933f2a28/files/7a6d3e11-dfa4-40c2-b345-829f0fac8193.jpg',
      category: 'Ремонт',
      date: '5 янв',
      readTime: '8 мин',
      model: '2107' as const
    },
    {
      title: 'Реставрация салона: От старого к новому',
      excerpt: 'Как вернуть салону классического ВАЗ заводской вид. Обзор материалов, инструментов и пошаговый процесс восстановления.',
      image: 'https://cdn.poehali.dev/projects/7a9ab0bc-03e9-4c5c-a2eb-b07e933f2a28/files/e47bb975-9d44-43fc-bb14-77ba8a78c438.jpg',
      category: 'Реставрация',
      date: '2 янв',
      readTime: '12 мин',
      model: 'Общее' as const
    }
  ];

  const filteredPosts = activeFilter === 'Все' 
    ? blogPosts 
    : activeFilter === 'Ремонт'
    ? blogPosts.filter(post => post.category === 'Ремонт')
    : blogPosts.filter(post => post.model === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 text-orange-600 font-semibold mb-4">
              <Icon name="Sparkles" size={20} />
              <span>Блог о легендарных автомобилях</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-gray-900 animate-fade-in">
              Классика ВАЗ
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
              История, ремонт и тюнинг легендарных 2101 и 2107. Всё о народных автомобилях от энтузиастов для энтузиастов.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать статьи
              </Button>
              <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
                <Icon name="Users" size={20} className="mr-2" />
                О сообществе
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900">
              Последние статьи
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {(['Все', '2101', '2107', 'Ремонт'] as const).map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600'
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={index} className="animate-fade-in">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-600 to-red-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Icon name="Mail" size={48} className="text-white mx-auto" />
            <h2 className="text-4xl font-montserrat font-bold text-white">
              Подпишитесь на рассылку
            </h2>
            <p className="text-xl text-orange-100">
              Получайте новые статьи, советы по ремонту и эксклюзивные материалы прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 font-semibold">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;