import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
	return (
		<div className={post.post}>
			<img
				src='https://images-platform.99static.com/ZIQJlG7ieRUoRw1A2vSkp5XU81g=/9x79:489x559/500x500/top/smart/99designs-contests-attachments/98/98243/attachment_98243294'
				alt='post-img'
			/>
			<div className={post.description}>
				<p>
					Post <span>{props.post}</span>
				</p>
				<span>likes: {props.likes}</span>
			</div>
		</div>
	);
};

export default Post;
