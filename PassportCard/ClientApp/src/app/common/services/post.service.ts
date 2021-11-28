import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostPage } from "../models/post-page.model";
import { Post } from "../models/post.model";

@Injectable({providedIn: "root"})
export class PostService{
    constructor(private httpClient: HttpClient){

    }

    public getPosts(page:number = 0,searchInput:string = ''): Observable<PostPage>{
        return this.httpClient.get<PostPage>('api/Post?page=' + page + "&searchInput=" + searchInput);
    }

    public deletePost(postId: number): Observable<any>{
        return this.httpClient.delete<PostPage>('api/Post?postId=' + postId);
    }
}