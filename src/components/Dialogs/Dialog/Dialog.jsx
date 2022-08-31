import React from 'react'
import { NavLink } from 'react-router-dom'
import dialog from './Dialog.module.css'

const Dialog = (props) => {
	return (
		<div className={dialog.dialog}>
			<NavLink to={`/dialogs/${props.id}`}>{props.userName}</NavLink>
		</div>
	)
}

export default Dialog
