import BlogEditor from '../components/BlogEditor';
import { useParams } from 'react-router-dom';

export default function EditBlog() {
  const { id } = useParams();
  return <BlogEditor blogId={id} />;
}
