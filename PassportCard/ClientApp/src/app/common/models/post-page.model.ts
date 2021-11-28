import { Post } from "./post.model";

export interface PostPage{
    posts: Post[];
    postCount: number;
}