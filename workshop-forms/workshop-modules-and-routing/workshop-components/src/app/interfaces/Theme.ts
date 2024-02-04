import { Post } from "./Post";
import { User } from "./User";

export interface Theme{
subscribers: string[];
posts: any; // string[] | Post[];
_id: string;
themeName: string;
userId: User;
created_at: string;
updatedAt: string;
__v: number;
}
