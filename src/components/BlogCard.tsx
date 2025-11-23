import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  model: '2101' | '2107' | 'Общее';
}

const BlogCard = ({ title, excerpt, image, category, date, readTime, model }: BlogCardProps) => {
  const modelColors = {
    '2101': 'bg-blue-100 text-blue-700 border-blue-300',
    '2107': 'bg-red-100 text-red-700 border-red-300',
    'Общее': 'bg-purple-100 text-purple-700 border-purple-300'
  };

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover-scale border border-gray-100">
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${modelColors[model]} border`}>
            {model}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Icon name="Tag" size={16} className="text-orange-500" />
            <span>{category}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={16} />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-montserrat font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <div className="pt-4 flex items-center justify-between">
          <a 
            href="#" 
            className="text-orange-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all story-link"
          >
            <span>Читать далее</span>
            <Icon name="ArrowRight" size={18} />
          </a>
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <Icon name="Heart" size={20} />
            </button>
            <button className="text-gray-400 hover:text-blue-500 transition-colors">
              <Icon name="Share2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
