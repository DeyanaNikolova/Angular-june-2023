import { UserId } from './User-id';

export interface Post{
likes: [];
_id: string;
text: string;
userId: UserId;
themeId: ThemeId;
created_at: string;
updatedAt: string;
__v: number;
}

interface ThemeId  {
    subscribers: string[];
    posts: string[];
    _id: string;
    themeName: string;
    userId: string;
    created_at: string;
    updatedAt: string;
    __v: number;
}
  
   
