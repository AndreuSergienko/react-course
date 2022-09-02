import React from 'react';
import profile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div className={profile.profile}>
			<div className={profile.img}>
				<img
					src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg'
					alt='bg         '
				/>
			</div>
			<ProfileInfo />
			<MyPosts
				posts={props.profilePage.postsData}
				dispatch={props.dispatch}
				newPostText={props.profilePage.newPostText}
			/>
		</div>
	);
};

export default Profile;
