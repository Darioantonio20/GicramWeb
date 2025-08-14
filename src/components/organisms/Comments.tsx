import React, { useState, useEffect } from 'react';
import { Text, Button } from '../atoms';
import { MessageCircle, Send, User, Calendar, ThumbsUp, Reply } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies: Comment[];
  isLiked: boolean;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  // Cargar comentarios del localStorage al iniciar
  useEffect(() => {
    const savedComments = localStorage.getItem('gicram-comments');
    if (savedComments) {
      const parsedComments = JSON.parse(savedComments);
      // Convertir las fechas de string a Date
      const commentsWithDates = parsedComments.map((comment: any) => ({
        ...comment,
        timestamp: new Date(comment.timestamp),
        replies: comment.replies.map((reply: any) => ({
          ...reply,
          timestamp: new Date(reply.timestamp)
        }))
      }));
      setComments(commentsWithDates);
    }
  }, []);

  // Guardar comentarios en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('gicram-comments', JSON.stringify(comments));
  }, [comments]);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleSubmitComment = () => {
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: generateId(),
      author: authorName,
      content: newComment.trim(),
      timestamp: new Date(),
      likes: 0,
      replies: [],
      isLiked: false
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
    setShowNameInput(false);
  };

  const handleReply = (commentId: string) => {
    if (!replyContent.trim() || !authorName.trim()) return;

    const reply: Comment = {
      id: generateId(),
      author: authorName,
      content: replyContent.trim(),
      timestamp: new Date(),
      likes: 0,
      replies: [],
      isLiked: false
    };

    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply]
        };
      }
      return comment;
    }));

    setReplyContent('');
    setReplyingTo(null);
  };

  const handleLike = (commentId: string, isReply = false, parentId?: string) => {
    setComments(prev => prev.map(comment => {
      if (isReply && parentId === comment.id) {
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
      } else if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked
        };
      }
      return comment;
    }));
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Hace unos minutos';
    if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
    
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const CommentItem: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => (
    <div className={`${isReply ? 'ml-8 border-l-2 border-gicram-primary/20 pl-4' : ''} mb-4`}>
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gicram-primary to-gicram-primary-light rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <Text variant="body" color="gray" className="font-semibold text-gicram-secondary">
                {comment.author}
              </Text>
              <div className="flex items-center space-x-1 text-gray-400">
                <Calendar className="w-3 h-3" />
                <Text variant="xs" color="gray" className="text-xs">
                  {formatDate(comment.timestamp)}
                </Text>
              </div>
            </div>
            
            <Text variant="body" color="gray" className="text-gray-700 mb-3">
              {comment.content}
            </Text>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleLike(comment.id, isReply)}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                  comment.isLiked 
                    ? 'text-gicram-primary bg-gicram-primary/10' 
                    : 'text-gray-500 hover:text-gicram-primary hover:bg-gicram-primary/5'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                <span>{comment.likes}</span>
              </button>

              {!isReply && (
                <button
                  onClick={() => setReplyingTo(comment.id)}
                  className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm text-gray-500 hover:text-gicram-primary hover:bg-gicram-primary/5 transition-colors duration-200"
                >
                  <Reply className="w-4 h-4" />
                  <span>Responder</span>
                </button>
              )}
            </div>

            {/* Formulario de respuesta */}
            {replyingTo === comment.id && !isReply && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Escribe tu respuesta..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gicram-primary focus:border-transparent"
                  />
                  <Button
                    onClick={() => handleReply(comment.id)}
                    disabled={!replyContent.trim()}
                    className="px-4 py-2 bg-gicram-primary text-white rounded-lg hover:bg-gicram-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Respuestas */}
            {comment.replies.length > 0 && (
              <div className="mt-4 space-y-3">
                {comment.replies.map(reply => (
                  <CommentItem key={reply.id} comment={reply} isReply={true} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="comments" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gicram-tertiary via-white to-gicram-tertiary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <MessageCircle className="w-8 h-8 text-gicram-primary" />
            <Text variant="h2" color="gray" className="text-4xl sm:text-5xl font-bold text-gicram-secondary">
              CANAL DE COMENTARIOS
            </Text>
          </div>
          <Text variant="body" color="gray" className="text-lg text-gicram-secondary-light max-w-2xl mx-auto">
            Comparte tu opinión, pregunta o experiencia con GICRAM. Tu voz es importante para nosotros.
          </Text>
        </div>

        {/* Formulario de comentario */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8">
          {!showNameInput ? (
            <div className="text-center">
              <Button
                onClick={() => setShowNameInput(true)}
                className="px-8 py-3 bg-gradient-to-r from-gicram-primary to-gicram-primary-light text-white rounded-xl font-semibold hover:from-gicram-primary-dark hover:to-gicram-primary transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Escribir un comentario
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Escribe tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gicram-primary focus:border-transparent"
                  maxLength={50}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tu comentario
                </label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Comparte tu opinión, pregunta o experiencia..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gicram-primary focus:border-transparent resize-none"
                  maxLength={500}
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {newComment.length}/500
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim() || !authorName.trim()}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gicram-primary to-gicram-primary-light text-white rounded-lg font-semibold hover:from-gicram-primary-dark hover:to-gicram-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Publicar comentario
                </Button>
                <Button
                  onClick={() => {
                    setShowNameInput(false);
                    setNewComment('');
                    setAuthorName('');
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Lista de comentarios */}
        <div className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <Text variant="h4" color="gray" className="text-xl font-semibold text-gray-500 mb-2">
                No hay comentarios aún
              </Text>
              <Text variant="body" color="gray" className="text-gray-400">
                Sé el primero en compartir tu opinión sobre GICRAM
              </Text>
            </div>
          ) : (
            comments.map(comment => (
              <CommentItem key={comment.id} comment={comment} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
