import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap, take,debounceTime } from 'rxjs/operators';
import { PostService } from '../common/services/post.service';
import { deletePost, deletePostFailure, deletePostSuccess, loadPosts, loadPostsFailure, loadPostsSuccess } from './post.actions';



@Injectable()
export class PostEffects {

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(

            ofType(loadPosts),
            switchMap((action) =>
                this.postService.getPosts(action.page,action.searchInput)
                    .pipe(debounceTime(500),
                    map(data => loadPostsSuccess({ pagedPosts: data })),
                        catchError(error => of(loadPostsFailure({ error })))))

        );
    });

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(

            ofType(deletePost),
            switchMap((action) =>
                this.postService.deletePost(action.postId)
                    .pipe(
                    map(_ => deletePostSuccess()),
                        catchError(error => of(deletePostFailure({ error })))))

        );
    });



    constructor(private actions$: Actions, private postService: PostService) { }

}
