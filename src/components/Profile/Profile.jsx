import React from 'react'
import profile from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
	return (
		<div className={profile.profile}>
			<div className={profile.img}>IMAGE</div>
			<ProfileInfo />
			<MyPosts
				posts={props.profilePage.postsData}
				newPostText={props.profilePage.newPostText}
				addPost={props.addPost}
				changeNewPostText={props.changeNewPostText}
			/>
		</div>
	)
}

export default Profile
