import { createAction, props } from '@ngrx/store';
import { PostPage } from '../common/models/post-page.model';
import { Post } from '../common/models/post.model';

export const loadPosts = createAction(
  '[Post] Load Posts',
  props<{page: number,searchInput: string}>()
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ pagedPosts: PostPage }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{postId: number}>()
);

export const deletePostSuccess = createAction(
  '[Post] Delete Post Success',
);

export const deletePostFailure = createAction(
  '[Post] Delete Post Failure',
  props<{ error: any }>()
);


