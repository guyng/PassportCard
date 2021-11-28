import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postFeatureKey, PostState } from './post.reducer';

export const selectProductState = createFeatureSelector<PostState>(
  postFeatureKey
);

export const getPosts = createSelector(
    selectProductState,
    (state: PostState) => state.posts
)
export const getLoadingPosts = createSelector(
  selectProductState,
  (state: PostState) => state.loading
)

export const getMaxPostsLoaded = createSelector(
  selectProductState,
  (state: PostState) => state.maxPostsLoaded
)