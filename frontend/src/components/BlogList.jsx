// Folder: frontend/src/components/BlogList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogList.css';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs').then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="bloglist-container">
      <h3>Drafts</h3>
      {blogs.filter(b => b.status === 'draft').map(blog => (
        <div className="blog-item draft" key={blog._id}>
          <Link to={`/edit/${blog._id}`}>{blog.title}</Link>
        </div>
      ))}
      <h3>Published</h3>
      {blogs.filter(b => b.status === 'published').map(blog => (
        <div className="blog-item published" key={blog._id}>
          <strong>{blog.title}</strong>
        </div>
      ))}
    </div>
  );
}
