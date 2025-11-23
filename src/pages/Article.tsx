import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Article = () => {
  const [likes, setLikes] = useState(47);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <article className="flex-1 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Badge className="bg-blue-100 text-blue-700 border-blue-300 border mb-4">
              ВАЗ 2101
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Настройка карбюратора ДААЗ: Пошаговая инструкция для новичков
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={18} className="text-orange-500" />
                <span>15 января 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={18} className="text-orange-500" />
                <span>10 мин чтения</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Eye" size={18} className="text-orange-500" />
                <span>2,345 просмотров</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <Button
                variant={isLiked ? "default" : "outline"}
                onClick={handleLike}
                className={isLiked 
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white" 
                  : "border-gray-300 text-gray-700 hover:border-orange-500"
                }
              >
                <Icon name="Heart" size={18} className="mr-2" />
                {likes}
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:border-orange-500">
                <Icon name="Share2" size={18} className="mr-2" />
                Поделиться
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:border-orange-500">
                <Icon name="Bookmark" size={18} className="mr-2" />
                Сохранить
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/7a9ab0bc-03e9-4c5c-a2eb-b07e933f2a28/files/e47bb975-9d44-43fc-bb14-77ba8a78c438.jpg"
              alt="Карбюратор ДААЗ"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Карбюратор ДААЗ — сердце топливной системы классических моделей ВАЗ. Правильная настройка 
              этого узла критически важна для стабильной работы двигателя, экономии топлива и динамики автомобиля.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mt-8 mb-4">
              🔧 Необходимые инструменты
            </h2>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <Icon name="CheckCircle2" size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Набор отверток (плоская и крестовая)</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="CheckCircle2" size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Ключи на 8, 10, 13 мм</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="CheckCircle2" size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Тахометр или мультиметр с функцией измерения оборотов</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="CheckCircle2" size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Аэрозоль для чистки карбюраторов</span>
              </li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size={24} className="text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Важно!</h3>
                  <p className="text-gray-700">
                    Перед началом работы убедитесь, что двигатель полностью остыл. Работа с горячим 
                    карбюратором может привести к ожогам и воспламенению паров топлива.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mt-8 mb-4">
              📋 Этапы настройки
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Шаг 1: Регулировка холостого хода
            </h3>
            <p className="text-gray-700 mb-4">
              Прогрейте двигатель до рабочей температуры (85-90°C). Найдите винты качества и количества 
              смеси на карбюраторе. Винт качества обычно находится под пломбой и имеет коническую форму.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Шаг 2: Настройка смеси
            </h3>
            <p className="text-gray-700 mb-4">
              Вращайте винт качества смеси по часовой стрелке до упора, затем выкрутите на 3-4 оборота. 
              Это базовая настройка, с которой мы начнем точную регулировку.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Шаг 3: Установка оборотов
            </h3>
            <p className="text-gray-700 mb-4">
              Винтом количества установите обороты холостого хода на уровне 900-950 об/мин. 
              Используйте тахометр для точного контроля.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Лайфхак от мастера</h3>
                  <p className="text-gray-700">
                    После настройки сделайте несколько резких нажатий на педаль газа. Двигатель должен 
                    набирать обороты без провалов и возвращаться к холостому ходу плавно, без 
                    троения или глушения.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mt-8 mb-4">
              ✅ Проверка результата
            </h2>
            <p className="text-gray-700 mb-4">
              Правильно настроенный карбюратор должен обеспечивать:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <span>Стабильные обороты холостого хода без вибраций</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <span>Уверенный отклик на педаль газа без провалов</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <span>Отсутствие черного дыма из выхлопной</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <span>Нормальный расход топлива (7-9 л/100 км в городе)</span>
              </li>
            </ul>

            <p className="text-gray-700 mt-6">
              Помните, что настройка карбюратора — это процесс, требующий терпения и внимательности. 
              Не спешите, и результат обязательно порадует вас стабильной работой двигателя!
            </p>
          </div>

          <div className="mt-12">
            <CommentSection />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article;