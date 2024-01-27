import { Theme } from "./Theme";
import { UserId } from "./UserId";

export interface Post{
likes: number[];
_id: string;
text: string;
userId: UserId;
themeId: Theme;
created_at: string;
updatedAt: string;
__v: number;
}


