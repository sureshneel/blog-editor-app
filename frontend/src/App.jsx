import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditBlog from './pages/EditBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<EditBlog />} />
    </Routes>
  );
}

export default App;
