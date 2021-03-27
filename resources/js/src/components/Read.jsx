import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Api from '../Api';

const Read = () => {
	const { id } = useParams();
	const [post, setPost] = useState({
		title: 'Loading Post...',
		created_at: '',
		updated_at: '',
		content: ''
	});

	useEffect(() => {
		Api.getPost(id).then((res) => {
			setPost(res.data);
		}).catch(() => {
			setPost({ title: 'Article not found' });
		});
	}, []);



	return (
		<div className="container">
			<h2>{post.title}</h2>
			<small>{post.created_at}</small>
			<p>{post.content}</p>
		</div>
	);
}

export default Read;