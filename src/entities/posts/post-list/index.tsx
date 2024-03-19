import { useState, useEffect } from 'react';
import { useFetchAllPostsQuery } from '../model';
import { PostItem } from '../post-card'
import { useInView } from "react-intersection-observer";

export const PostContainer = () => {
	const [currentPostStart, setCurrentPostStart] = useState(0)
	const { data: posts, isLoading } = useFetchAllPostsQuery({ limit: 7, start: currentPostStart })
	// const [isMyFetching, setIsFetchingDown] = useState(false)
	// const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)

	const { ref: firstCard, inView: inViewFirstCard } = useInView({
		threshold: 0.5
	})

	const { ref: lastCard, inView: inViewLastCard } = useInView({
		threshold: 0.5
	})

	useEffect(() => {
		if (inViewFirstCard) {
			setCurrentPostStart(prev => prev > 0 ? prev - 1 : prev);
			// setIsFetchingDown(false)
		}
	}, [inViewFirstCard])

	useEffect(() => {
		if (inViewLastCard) {
			setCurrentPostStart(prev => prev + 1);
			// setIsFetchingDown(false)
		}
	}, [inViewLastCard]);

	// useEffect(() => {
	// 	document.addEventListener('scroll', scrollHandler)
	// 	return () => {
	// 		document.removeEventListener('scroll', scrollHandler)
	// 	}
	// }, [])

	// const scrollHandler = (e: any): void => {
	// 	console.log(e.target.documentElement.scrollTop)
	// 	if (e.target.documentElement.scrollTop < 100) {
	// 		setIsMyFetchingUp(true)
	// 	}
	// 	if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 100) {
	// 		setIsFetchingDown(true)
	// 		window.scrollTo(0, (e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
	// 	}
	// }

	return (
		<div>
			<div>
				{posts?.map((post, index, arr) => (
					index === 0 ? (
						<div key={post.id} ref={firstCard}>
							<PostItem post={post} />
						</div>
					) : index === arr.length - 1 ? (
						<div key={post.id} ref={lastCard}>
							<PostItem post={post} />
						</div>
					) : (
						<div key={post.id}>
							<PostItem post={post} />
						</div>
					)
				))}
			</div>
			{isLoading && <div>Загрузка данных...</div>}
		</div>
	);
};