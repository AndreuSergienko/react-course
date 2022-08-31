import React from 'react'
import pInfo from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={pInfo.self}>
			<div className={pInfo.avatar}>Avatar</div>
			<p className={pInfo.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex ab,
				fuga ullam quis eos rerum deserunt sunt laudantium minus, expedita
				labore? Omnis explicabo, rem quaerat veritatis soluta similique
				cupiditat
			</p>
		</div>
	)
}

export default ProfileInfo
