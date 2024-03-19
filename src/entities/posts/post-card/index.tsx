import { IPost } from '../model'
import styles from '../post.module.scss'
import { Link } from 'react-router-dom'


export interface IPostItemProps {
	post: IPost
}

export const PostItem: React.FC<IPostItemProps> = ({ post }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.post_id}>№ {post.id}</div>
				<div className={styles.post_title}>Title: {post.title}</div>
				<div className={styles.post_text}>
					Text: {post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}
				</div>
				<div className={styles.post_link_div}>
					<Link className={styles.post_link} to={`post/${post.id}`}>Перейти</Link>
				</div>

			</div>
		</>
	);
};