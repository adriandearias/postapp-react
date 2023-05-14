import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import '../../styles/Home.css';

function Home() {
    const [posts, setPosts] = useState([]);
    const randomUserId = Math.floor(Math.random() * 1000) + 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));
    }, []);

    const deletePost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPosts(posts.filter((post) => post.id !== id));
            })
            .catch((error) => console.error(error));
    };

    const createPost = (post) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts([...posts, data]);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <Menu />
            <div className="container">
                <h1>Post List</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <p>Usuario: {post.userId}</p>
                            <Button onClick={() => deletePost(post.id)}>Eliminar</Button>
                        </li>
                    ))}
                </ul>
                <Button onClick={() => createPost({ title: 'New test post', body: 'Post Content body', userId: randomUserId })}>Create post</Button>
            </div>
        </div>
    );
}

export default Home;
