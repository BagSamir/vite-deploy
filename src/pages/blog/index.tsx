import { PostContainer } from '../../entities/posts'
import { Routes, Route } from 'react-router-dom'
import { PostPage } from '../post'

export const HomePage = () => {
	return (
		<div>
			<Routes>
				<Route path='*' element={<PostContainer />} />
				<Route path='/post/:id' element={<PostPage />} />
			</Routes>
		</div>
	)
}