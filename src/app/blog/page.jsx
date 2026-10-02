import Link from "next/link";
import React from "react";

export const metadata = {
  title: 'All Blogs',
  description: '...',
}

const BlogPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {blogs.map((blog) => (
        <div key={blog.id} className="card bg-info shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>{blog.body}</p>
            <div className="card-actions justify-end">
              <Link href={`/blog/${blog.id}`}>
                {" "}
                <button className="btn btn-primary">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
