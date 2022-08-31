import React from 'react'
import sidebar from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	return (
		<aside className={sidebar.aside}>
			<nav className={sidebar.nav}>
				<ul className={sidebar.list}>
					<li className={sidebar.item}>
						<NavLink
							to='/profile'
							className={({ isActive }) =>
								isActive ? sidebar.active : sidebar.link
							}
						>
							Profile
						</NavLink>
					</li>
					<li className={sidebar.item}>
						<NavLink
							to='/dialogs'
							className={({ isActive }) =>
								isActive ? sidebar.active : sidebar.link
							}
						>
							Messages
						</NavLink>
					</li>
					<li className={sidebar.item}>
						<NavLink
							to='/news'
							className={({ isActive }) =>
								isActive ? sidebar.active : sidebar.link
							}
						>
							News
						</NavLink>
					</li>
					<li className={sidebar.item}>
						<NavLink
							to='/music'
							className={({ isActive }) =>
								isActive ? sidebar.active : sidebar.link
							}
						>
							Music
						</NavLink>
					</li>
					<li className={sidebar.item}>
						<NavLink
							to='/settings'
							className={({ isActive }) =>
								isActive ? sidebar.active : sidebar.link
							}
						>
							Settings
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
export default Sidebar
