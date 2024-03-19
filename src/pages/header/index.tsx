import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'

const menu = [
	{
		to: '/',
		title: 'Home'
	},
	{
		to: '/blog',
		title: 'Blog'
	}
]

export const Header = () => {
	return (
		<div className={styles.headers}>
			{menu.map((elem) => (
				<NavLink className={styles.menuNav}
					key={elem.to}
					to={elem.to}
				>{elem.title}</NavLink>
			))}
		</div>
	)
}