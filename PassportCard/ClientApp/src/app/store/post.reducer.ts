import { Action, createReducer, on } from '@ngrx/store';
import { Post } from '../common/models/post.model';
import { deletePost, deletePostFailure, deletePostSuccess, loadPosts, loadPostsFailure, loadPostsSuccess } from './post.actions';

export const postFeatureKey = 'post';

export interface PostState {
    posts: Post[];
    maxPostsLoaded: boolean;
    loading: boolean;
    loaded: boolean;
}

export const initialState: PostState = {
    posts: [],
    maxPostsLoaded: false,
    loading: false,
    loaded: false
};


export const PostReducers = createReducer(
    initialState,

    on(loadPosts, (state, { searchInput }) => {
        return ({
            ...state,
            posts: searchInput? [] : state.posts,
            loading: true,
            loaded: false
        })
    }
    ),
    on(loadPostsSuccess, (state, { pagedPosts }) => {
        debugger;
        let posts = JSON.parse(JSON.stringify(state.posts)) as Post[];
        posts = posts.concat(pagedPosts.posts) as Post[];
        return ({
            ...state,
            posts,
            maxPostsLoaded: posts.length >= pagedPosts.postCount,
            loading: false,
            loaded: true
        })
    }),
    on(loadPostsFailure, state =>
    ({
        ...state,
        loading: false,
        loaded: false
    })),

    on(deletePost, (state, { postId }) => {
        let posts = JSON.parse(JSON.stringify(state.posts)) as Post[];
        let newPosts = posts.filter(p => p.id !== postId);
        debugger;
        return ({
            ...state,
            posts: newPosts,
            loading: true,
            loaded: false
        })
    }
    ),
    on(deletePostSuccess, (state) => {
        debugger;
        return ({
            ...state,
            loading: false,
            loaded: true
        })
    }),
    on(deletePostFailure, state =>
    ({
        ...state,
        loading: false,
        loaded: false
    })),

);

