import React from 'react';
import myposts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let newPost = React.createRef();

	const createNewPost = () => {
		props.dispatch({
			type: 'ADD-POST',
		});
	};

	const onPostChange = () => {
		let postMessage = newPost.current.value;
		props.dispatch({
			type: 'CHANGE-NEW-POST-TEXT',
			message: postMessage,
		});
	};

	return (
		<div className={myposts.postsWrapper}>
			<h3 className={myposts.title}>My posts</h3>
			<form className={myposts.form}>
				<input
					type="text"
					placeholder="your news..."
					className={myposts.input}
					ref={newPost}
					value={props.newPostText}
					onChange={onPostChange}
				/>
				<button
					type="button"
					onClick={createNewPost}
					className={myposts.btnSend}
				>
					Add post
				</button>
			</form>
			<div className={myposts.posts}>
				{props.posts.map((post) => {
					return <Post post={post.post} likes={post.likes} />;
				})}
			</div>
		</div>
	);
};

export default MyPosts;
