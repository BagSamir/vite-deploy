import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export interface IPost {
	userId: number,
	id: number,
	title: string,
	body: string
}

type TPostResponse = IPost[]

export const postApi = createApi({
	reducerPath: 'post',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: build => ({
		fetchAllPosts: build.query<TPostResponse, { limit: number, start: number }>({
			query: ({ limit = 5, start = 0 }) => ({
				url: '/posts',
				params:
				{
					_limit: limit,
					_start: start,
				}
			})
		}),
		fetchPostById: build.query<IPost, number>({
			query: (id: number = 1) => ({
				url: `/posts/${id}`,
			})
		})
	})
})

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postApi