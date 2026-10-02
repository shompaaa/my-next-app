import React from 'react';

export const metadata = {
  title: `Blog Details`,
  description: '...',
}

const BlogDetailsPage = async({params}) => {
    const {blogId} =await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const blog = await res.json()
    return (
        <div>
            <h1>This is blog details page</h1>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
        </div>
    );
};

export default BlogDetailsPage;