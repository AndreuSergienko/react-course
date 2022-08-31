import React from 'react'
import post from './Post.module.css'

const Post = (props) => {
   return (
      <div className={post.post}>
         <img
            src='https://www.spletnik.ru/img/__post/7d/7d04e287d8f6398676d6e700c835aa21_423.jpg'
            alt='post-img'
         />
         <p>
            Post <span>{props.post}</span>
         </p>
         <span>likes: {props.likes}</span>
      </div>
   )
}

export default Post
