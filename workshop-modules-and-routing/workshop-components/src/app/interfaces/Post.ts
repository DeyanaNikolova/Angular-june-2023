import { Theme } from "./Theme";
import { User } from "./User";

export interface Post{
likes: number[];
_id: string;
text: string;
user: User;
themeId: Theme;
created_at: string;
updatedAt: string;
__v: number;
}


