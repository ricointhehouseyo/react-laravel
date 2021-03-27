import React, { useEffect, useState } from 'react';

import PostItem from "./PostItem";

import Api from '../Api';

const Home = () => {

	const [posts, setPosts] = useState(null);

	const renderPosts = () => {
		if (!posts) {
			return (
				<div className="text-center">
					Loading... Please wait
				</div>
			);
		}
		if (posts.length === 0) {
			return (
				<div className="text-center">
					There is no post to see...
				</div>
			);
		}
		return (
			<div className="row">
				{posts.map((post) => (
					<div className="col-md-4">
						<PostItem id={post.id} title={post.title} >
							{post.content}
						</PostItem>
					</div>
				))}
			</div>
		);

	};

	useEffect(() => {
		Api.getHome().then(res => {
			const result = res.data;
			setPosts(result);
		})
	}, []);

	return (
		<div>
			<div className="container">
				{renderPosts()}
			</div>
		</div>
	);
}

export default Home;