import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Lifehack {
  id: number;
  title: string;
  description: string;
  difficulty: 'Легко' | 'Средне' | 'Сложно';
  category: string;
  model: 'ВАЗ 2101' | 'ВАЗ 2107' | 'Общее';
  likes: number;
  isLiked?: boolean;
  icon: string;
}

const Lifehacks = () => {
  const [activeFilter, setActiveFilter] = useState<'Все' | 'ВАЗ 2101' | 'ВАЗ 2107' | 'Ремонт'>('Все');
  const [lifehacks, setLifehacks] = useState<Lifehack[]>([
    {
      id: 1,
      title: 'Быстрая чистка контактов трамблера',
      description: 'Используйте обычный ластик для очистки контактов трамблера от окислов. Это займет 2 минуты и избавит от проблем с зажиганием.',
      difficulty: 'Легко',
      category: 'Электрика',
      model: 'Общее',
      likes: 42,
      isLiked: false,
      icon: 'Zap'
    },
    {
      id: 2,
      title: 'Защита порогов монтажной пеной',
      description: 'Заполните внутренние полости порогов монтажной пеной через технологические отверстия. Это защитит от коррозии и улучшит шумоизоляцию.',
      difficulty: 'Средне',
      category: 'Кузов',
      model: 'ВАЗ 2101',
      likes: 38,
      isLiked: false,
      icon: 'Shield'
    },
    {
      id: 3,
      title: 'Улучшение освещения без замены фар',
      description: 'Отполируйте стекла фар зубной пастой и установите галогеновые лампы H4. Свет станет ярче на 40% при минимальных затратах.',
      difficulty: 'Легко',
      category: 'Свет',
      model: 'Общее',
      likes: 56,
      isLiked: false,
      icon: 'Lightbulb'
    },
    {
      id: 4,
      title: 'Борьба с течью радиатора в дороге',
      description: 'Если потек радиатор, добавьте в систему охлаждения 2 ложки горчичного порошка. Это временно заткнет небольшие трещины и позволит доехать до СТО.',
      difficulty: 'Легко',
      category: 'Охлаждение',
      model: 'Общее',
      likes: 67,
      isLiked: false,
      icon: 'Droplet'
    },
    {
      id: 5,
      title: 'Модернизация вентиляции салона',
      description: 'Установите дополнительный вентилятор от компьютера в воздуховод. Циркуляция воздуха улучшится, особенно летом.',
      difficulty: 'Средне',
      category: 'Салон',
      model: 'ВАЗ 2107',
      likes: 29,
      isLiked: false,
      icon: 'Wind'
    },
    {
      id: 6,
      title: 'Защита аккумулятора от холода',
      description: 'Оберните аккумулятор войлоком или пенофолом. Батарея будет медленнее остывать, что улучшит пуск двигателя зимой.',
      difficulty: 'Легко',
      category: 'Электрика',
      model: 'Общее',
      likes: 51,
      isLiked: false,
      icon: 'Battery'
    },
    {
      id: 7,
      title: 'Усиление рычагов подвески',
      description: 'Приварите косынки к рычагам передней подвески. Это увеличит их жесткость и срок службы, особенно на плохих дорогах.',
      difficulty: 'Сложно',
      category: 'Подвеска',
      model: 'ВАЗ 2101',
      likes: 34,
      isLiked: false,
      icon: 'Wrench'
    },
    {
      id: 8,
      title: 'Доработка замков дверей',
      description: 'Смажьте механизмы замков литолом и установите пластиковые втулки вместо металлических. Двери будут закрываться мягче и тише.',
      difficulty: 'Средне',
      category: 'Салон',
      model: 'ВАЗ 2107',
      likes: 23,
      isLiked: false,
      icon: 'Lock'
    },
    {
      id: 9,
      title: 'Экономия топлива простым способом',
      description: 'Проверьте давление в шинах — оно должно быть 1.9-2.0 атм. Правильное давление снижает расход топлива на 5-7%.',
      difficulty: 'Легко',
      category: 'Эксплуатация',
      model: 'Общее',
      likes: 89,
      isLiked: false,
      icon: 'Fuel'
    }
  ]);

  const handleLike = (id: number) => {
    setLifehacks(prevLifehacks =>
      prevLifehacks.map(lifehack => {
        if (lifehack.id === id) {
          return {
            ...lifehack,
            likes: lifehack.isLiked ? lifehack.likes - 1 : lifehack.likes + 1,
            isLiked: !lifehack.isLiked
          };
        }
        return lifehack;
      })
    );
  };

  const filteredLifehacks = activeFilter === 'Все' 
    ? lifehacks 
    : activeFilter === 'Ремонт'
    ? lifehacks.filter(item => ['Ремонт', 'Электрика', 'Подвеска'].includes(item.category))
    : lifehacks.filter(item => item.model === activeFilter);

  const difficultyColors = {
    'Легко': 'bg-green-100 text-green-700 border-green-300',
    'Средне': 'bg-yellow-100 text-yellow-700 border-yellow-300',
    'Сложно': 'bg-red-100 text-red-700 border-red-300'
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-orange-600 font-semibold mb-4">
              <Icon name="Lightbulb" size={20} />
              <span>Проверенные решения</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900">
              Лайфхаки для классики ВАЗ
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Практические советы от опытных владельцев. Простые решения сложных проблем.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900">
              Все лайфхаки ({filteredLifehacks.length})
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {(['Все', 'ВАЗ 2101', 'ВАЗ 2107', 'Ремонт'] as const).map((filter) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLifehacks.map((lifehack) => (
              <Card key={lifehack.id} className="p-6 hover:shadow-xl transition-all duration-300 hover-scale bg-white border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Icon name={lifehack.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={`${difficultyColors[lifehack.difficulty]} border text-xs`}>
                        {lifehack.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {lifehack.category}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {lifehack.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {lifehack.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Badge variant="secondary" className="text-xs font-normal">
                      {lifehack.model}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(lifehack.id)}
                      className={`${
                        lifehack.isLiked ? 'text-red-500' : 'text-gray-500'
                      } hover:text-red-500 transition-colors`}
                    >
                      <Icon name="Heart" size={18} className="mr-1" />
                      {lifehack.likes}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
              <Icon name="Plus" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-montserrat font-bold text-gray-900">
              Поделитесь своим опытом
            </h2>
            <p className="text-gray-600 text-lg">
              Знаете полезный лайфхак для классики ВАЗ? Расскажите о нём сообществу!
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg">
              <Icon name="Send" size={20} className="mr-2" />
              Предложить лайфхак
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lifehacks;
