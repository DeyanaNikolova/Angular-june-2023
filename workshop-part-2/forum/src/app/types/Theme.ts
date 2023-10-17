import { Post } from "./Post";
import { UserId } from "./User-id";

export interface Theme{
    subscribers: string[];
    posts:any;     // string[] | Post[];
    _id: string;
    themeName: string;
    userId: UserId;
    created_at: string;
    updatedAt: string;
    __v: number;
}


  
