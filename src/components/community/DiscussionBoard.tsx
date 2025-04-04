
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data - in a real app this would come from an API
const discussions = [
  {
    id: 1,
    author: 'Jenny H.',
    avatar: 'JH',
    title: 'Tips for managing period cramps naturally?',
    content: 'I\'ve been struggling with severe cramps lately and would prefer to avoid medication if possible. Has anyone found natural remedies that actually work?',
    likes: 24,
    comments: 8,
    tags: ['Period Pain', 'Natural Remedies']
  },
  {
    id: 2,
    author: 'Anonymous',
    avatar: '??',
    title: 'Irregular cycles after stopping birth control',
    content: 'I stopped taking birth control 3 months ago and my cycles have been really unpredictable. Is this normal? When did yours regulate?',
    likes: 15,
    comments: 12,
    tags: ['Birth Control', 'Irregular Cycles']
  },
  {
    id: 3,
    author: 'Michelle T.',
    avatar: 'MT',
    title: 'Best menstrual cup for beginners?',
    content: 'Thinking about switching to a menstrual cup but not sure where to start. Any recommendations for first-timers?',
    likes: 32,
    comments: 21,
    tags: ['Menstrual Products', 'Eco-Friendly']
  }
];

const DiscussionBoard = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-title">Community Discussions</h2>
        <Button className="bg-empowerpurple hover:bg-empowerpurple-dark">
          <MessageSquare size={16} className="mr-2" /> New Post
        </Button>
      </div>
      
      {discussions.map((discussion) => (
        <DiscussionCard key={discussion.id} discussion={discussion} />
      ))}
    </div>
  );
};

type DiscussionCardProps = {
  discussion: {
    id: number;
    author: string;
    avatar: string;
    title: string;
    content: string;
    likes: number;
    comments: number;
    tags: string[];
  };
};

const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  return (
    <Card className="card-hover">
      <CardContent className="pt-6">
        <div className="flex gap-3 mb-3">
          <Avatar>
            <AvatarFallback className={`${
              discussion.author === 'Anonymous' 
                ? 'bg-gray-200 text-gray-600' 
                : 'bg-empowerpurple-light text-empowerpurple-dark'
            }`}>
              {discussion.avatar}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <h3 className="font-medium">{discussion.title}</h3>
            <p className="text-sm text-muted-foreground">Posted by {discussion.author}</p>
          </div>
        </div>
        
        <p className="text-sm mb-3">{discussion.content}</p>
        
        <div className="flex flex-wrap gap-2">
          {discussion.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              #{tag.replace(' ', '')}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0 flex justify-between border-t mt-3">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-empowerpink">
          <Heart size={16} className="mr-1" /> {discussion.likes}
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageSquare size={16} className="mr-1" /> {discussion.comments}
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share2 size={16} className="mr-1" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiscussionBoard;
