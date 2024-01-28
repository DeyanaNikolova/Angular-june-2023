import { User } from "./User";
export interface Theme{
subscribers: string[];
posts: string[];
_id: string;
themeName: string;
user: User;
created_at: string;
updatedAt: string;
__v: number;
}
