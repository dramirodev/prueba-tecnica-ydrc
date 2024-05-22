import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from '../store/post/reducer';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',

        }),
    })
});

export const {useGetPostsQuery} = postApi;
