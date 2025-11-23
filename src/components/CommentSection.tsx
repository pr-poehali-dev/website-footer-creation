import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  text: string;
  date: string;
  likes: number;
  replies: Comment[];
  isLiked?: boolean;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Александр М.',
      avatar: 'АМ',
      text: 'Отличная статья! Всё понятно и по делу. Вчера настроил карбюратор по этой инструкции — машина поехала совсем по-другому. Спасибо!',
      date: '2 дня назад',
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 11,
          author: 'Дмитрий К.',
          avatar: 'ДК',
          text: 'А какой расход был до настройки и какой стал? Интересно сравнить с моим результатом.',
          date: '1 день назад',
          likes: 3,
          isLiked: false,
          replies: []
        }
      ]
    },
    {
      id: 2,
      author: 'Игорь В.',
      avatar: 'ИВ',
      text: 'Подскажите, а можно ли настраивать карбюратор без тахометра? Или обязательно нужен прибор?',
      date: '1 день назад',
      likes: 5,
      isLiked: false,
      replies: [
        {
          id: 21,
          author: 'Сергей П.',
          avatar: 'СП',
          text: 'Можно и на слух, но с тахометром точнее будет. Я первый раз без прибора делал — получилось, но пришлось повозиться.',
          date: '12 часов назад',
          likes: 8,
          isLiked: false,
          replies: []
        }
      ]
    },
    {
      id: 3,
      author: 'Михаил Т.',
      avatar: 'МТ',
      text: 'У меня после настройки двигатель стал троить на холостых. В чём может быть проблема?',
      date: '8 часов назад',
      likes: 2,
      isLiked: false,
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleLike = (commentId: number, parentId?: number) => {
    setComments(prevComments => 
      prevComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          };
        }
        if (parentId && comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked
                };
              }
              return reply;
            })
          };
        }
        return comment;
      })
    );
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now(),
      author: 'Вы',
      avatar: 'ВЫ',
      text: newComment,
      date: 'только что',
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleAddReply = (parentId: number) => {
    if (!replyText.trim()) return;

    const reply: Comment = {
      id: Date.now(),
      author: 'Вы',
      avatar: 'ВЫ',
      text: replyText,
      date: 'только что',
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply]
          };
        }
        return comment;
      })
    );

    setReplyText('');
    setReplyingTo(null);
  };

  const CommentItem = ({ comment, parentId }: { comment: Comment; parentId?: number }) => (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Avatar className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 text-white flex-shrink-0">
          <AvatarFallback className="bg-transparent font-semibold">{comment.avatar}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{comment.author}</h4>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{comment.text}</p>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <button
              onClick={() => handleLike(comment.id, parentId)}
              className={`flex items-center space-x-1 transition-colors ${
                comment.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Icon name="Heart" size={16} />
              <span>{comment.likes}</span>
            </button>
            
            <button
              onClick={() => setReplyingTo(comment.id)}
              className="flex items-center space-x-1 text-gray-500 hover:text-orange-600 transition-colors"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Ответить</span>
            </button>
          </div>

          {replyingTo === comment.id && (
            <div className="mt-4 space-y-3 animate-fade-in">
              <Textarea
                placeholder="Напишите ответ..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <div className="flex space-x-2">
                <Button
                  onClick={() => handleAddReply(parentId || comment.id)}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                >
                  Отправить
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setReplyingTo(null);
                    setReplyText('');
                  }}
                >
                  Отмена
                </Button>
              </div>
            </div>
          )}

          {comment.replies.length > 0 && (
            <div className="ml-8 space-y-4 mt-4 border-l-2 border-gray-200 pl-6">
              {comment.replies.map(reply => (
                <CommentItem key={reply.id} comment={reply} parentId={comment.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6 flex items-center">
        <Icon name="MessageSquare" size={28} className="mr-3 text-orange-500" />
        Комментарии ({comments.length})
      </h2>

      <div className="mb-8 space-y-4">
        <Textarea
          placeholder="Поделитесь своим опытом или задайте вопрос..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[120px] resize-none text-base"
        />
        <Button
          onClick={handleAddComment}
          disabled={!newComment.trim()}
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
        >
          <Icon name="Send" size={18} className="mr-2" />
          Отправить комментарий
        </Button>
      </div>

      <div className="space-y-6">
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">Пока нет комментариев</p>
          <p className="text-sm">Будьте первым, кто оставит комментарий!</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
