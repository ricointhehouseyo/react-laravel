import React from 'react';
import { Link } from "react-router-dom";

const PostItem = ({ id, title, children }) => {
	return (
		<div className="card">
			<div className="card-body">
				<strong className="card-title">{title}</strong>
				<p>{children.slice(0, 100)}...</p>
				<Link to={"/post/" + id} >Read More</Link>
			</div>
		</div>
	);
}

export default PostItem;