// Folder: frontend/src/components/BlogEditor.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogEditor.css';

export default function BlogEditor({ blogId }) {
  const [blog, setBlog] = useState({ title: '', content: '', tags: '' });
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    if (blogId) {
      axios.get(`http://localhost:5000/api/blogs/${blogId}`).then(res => {
        const b = res.data;
        setBlog({ title: b.title, content: b.content, tags: b.tags?.join(', ') });
      });
    }
  }, [blogId]);

  const autoSave = () => {
    axios.post('http://localhost:5000/api/blogs/save-draft', { ...blog, id: blogId });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));

    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(setTimeout(autoSave, 5000));
  };

  const saveDraft = () => axios.post('http://localhost:5000/api/blogs/save-draft', { ...blog, id: blogId });
  const publish = () => axios.post('http://localhost:5000/api/blogs/publish', { ...blog, id: blogId });

  return (
    <div className="editor-container">
      <input className="editor-title" name="title" value={blog.title} onChange={handleChange} placeholder="Title" />
      <textarea className="editor-content" name="content" value={blog.content} onChange={handleChange} placeholder="Write your blog here..." />
      <input className="editor-tags" name="tags" value={blog.tags} onChange={handleChange} placeholder="Tags (comma separated)" />
      <div className="editor-buttons">
        <button className="btn draft" onClick={saveDraft}>Save Draft</button>
        <button className="btn publish" onClick={publish}>Publish</button>
      </div>
    </div>
  );
}
