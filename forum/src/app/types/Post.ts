import { UserId } from './User-id';
import { Theme } from './Theme';

export interface Post{
likes: [];
_id: string;
text: string;
userId: UserId;
themeId: Theme;
created_at: string;
updatedAt: string;
__v: number;
}


   
