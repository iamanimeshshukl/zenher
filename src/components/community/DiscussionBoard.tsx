import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageSquare, Heart, Share2, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

// Mock data - in a real app this would come from an API
const discussions = [
  {
    id: 1,
    author: 'Jenny H.',
    avatar: 'JH',
    avatarSrc: '/avatars/jenny.jpg',
    title: 'Tips for managing period cramps naturally?',
    content: 'I’ve been struggling with severe cramps lately and would prefer to avoid medication if possible. Has anyone found natural remedies that actually work?',
    likes: 24,
    comments: 8,
    tags: ['Period Pain', 'Natural Remedies'],
    timestamp: '2h ago',
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 2,
    author: 'Anonymous',
    avatar: '??',
    avatarSrc: null,
    title: 'Irregular cycles after stopping birth control',
    content: 'I stopped taking birth control 3 months ago and my cycles have been really unpredictable. Is this normal? When did yours regulate?',
    likes: 15,
    comments: 12,
    tags: ['Birth Control', 'Irregular Cycles'],
    timestamp: '5h ago',
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 3,
    author: 'Michelle T.',
    avatar: 'MT',
    avatarSrc: '/avatars/michelle.jpg',
    title: 'Best menstrual cup for beginners?',
    content: 'Thinking about switching to a menstrual cup but not sure where to start. Any recommendations for first-timers?',
    likes: 32,
    comments: 21,
    tags: ['Menstrual Products', 'Eco-Friendly'],
    timestamp: '1d ago',
    isLiked: false,
    isBookmarked: false,
  },
];

interface Discussion {
  id: number;
  author: string;
  avatar: string;
  avatarSrc: string | null;
  title: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
  timestamp: string;
  isLiked: boolean;
  isBookmarked: boolean;
}

const DiscussionBoard = ({ filter = 'all' }: { filter?: string }) => {
  // Filter discussions based on the filter prop (e.g., trending, recent)
  const filteredDiscussions = discussions.filter((discussion) => {
    if (filter === 'all' || filter === 'recent') return true;
    if (filter === 'trending') return discussion.likes > 20;
    return discussion.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <div className="space-y-6">
    

      {filteredDiscussions.length === 0 ? (
        <p className="text-gray-500 text-center">No discussions found for this filter.</p>
      ) : (
        filteredDiscussions.map((discussion) => (
          <DiscussionCard key={discussion.id} discussion={discussion} />
        ))
      )}
    </div>
  );
};

const DiscussionCard = ({ discussion }: { discussion: Discussion }) => {
  const [liked, setLiked] = React.useState(discussion.isLiked);
  const [bookmarked, setBookmarked] = React.useState(discussion.isBookmarked);
  const [likeCount, setLikeCount] = React.useState(discussion.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <Avatar className="h-10 w-10">
          {discussion.avatarSrc ? (
            <AvatarImage src={discussion.avatarSrc} alt={discussion.author} />
          ) : (
            <AvatarFallback
              className={`${
                discussion.author === 'Anonymous'
                  ? 'bg-gray-200 text-gray-600'
                  : 'bg-empowerpurple/10 text-empowerpurple'
              }`}
            >
              {discussion.avatar}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-900">{discussion.author}</span>
              <span className="text-xs text-gray-500 ml-2">{discussion.timestamp}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setBookmarked(!bookmarked)}>
                  {bookmarked ? 'Remove Bookmark' : 'Bookmark'}
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mt-1">{discussion.title}</h3>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-700 leading-relaxed">{discussion.content}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {discussion.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-empowerpink/10 text-empowerpink hover:bg-empowerpink/20 cursor-pointer text-xs"
            >
              #{tag.replace(' ', '')}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t border-gray-200 pt-3">
        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="sm"
            className={`${
              liked ? 'text-empowerpink' : 'text-gray-600'
            } hover:text-empowerpink`}
            onClick={handleLike}
          >
            <Heart size={16} className="mr-1" fill={liked ? 'currentColor' : 'none'} /> {likeCount}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-empowerpurple">
            <MessageSquare size={16} className="mr-1" /> {discussion.comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-empowerpurple">
            <Share2 size={16} className="mr-1" /> Share
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`${bookmarked ? 'text-empowerpurple' : 'text-gray-600'} hover:text-empowerpurple`}
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark size={16} fill={bookmarked ? 'currentColor' : 'none'} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiscussionBoard;