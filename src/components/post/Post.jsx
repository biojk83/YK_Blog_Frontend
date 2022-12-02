import React from 'react';
import './post.css';
import {Link} from 'react-router-dom';

export default function Post({post}) {
    const PF = "http://yk-blog-backend.onrender.com/images/"
    return(
        <div className="post">
            {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
            <div className="postInfo">
                <div className="postCats">
                    <div className="postCat">music</div>
                    <div className="postCat">Life</div>
                </div>
                <Link to={`/post/${post._id}`}>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <span className="postDate">{post.createdAt}</span>
                <p className="postDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}