import React from 'react'
import profile from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
	return (
		<div className={profile.profile}>
			<div className={profile.img}>
				<img
					src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg'
					alt='bg         '
				/>
			</div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
}

export default Profile
