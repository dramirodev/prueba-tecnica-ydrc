import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postApi} from "../../api/post.ts";

export type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export type PostsState = {
    posts: Post[]
}

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [] as Post[]
    },
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload)
        },

        deletePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        savePost: (state, action: PayloadAction<{ body: string, id: number }>) => {
            const {body, id} = action.payload
            state.posts = state.posts.map(post => post.id === id ? {...post, body} : post)
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(postApi.endpoints.getPosts.matchFulfilled, (state, action) => {
            state.posts = action.payload
        })
    },
    selectors: {
        postsSelector: (state: PostsState) => state.posts
    }
});

export const {addPost, deletePost, savePost} = postSlice.actions;
export const {postsSelector} = postSlice.selectors;

export default postSlice.reducer;
