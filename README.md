# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Full Stack Blog Editor App

## 🚀 Tech Stack
- Frontend: React (Vite)
- Backend: Node.js + Express
- Database: MongoDB Atlas (Cloud)

## 💡 Features
- Create, edit, save, and publish blogs
- Separate lists for drafts and published posts

## 📦 Folder Structure

Full Stack Blog Editor Application

 This is a full-stack blog editor app built as part of an internship assignment. It allows users to create, edit, save as draft,
 and publish blog posts. The app features auto-save functionality and separate listings for drafts and published posts.
 The backend is connected to **MongoDB Atlas** for cloud-based data storage.

Tech Stack

 **Frontend**:  - React.js (Vite)- Axios- React Router DOM- CSS Modules
 **Backend**:  - Node.js  - Express.js  - MongoDB Atlas  - Mongoose  - COR


Folder Structure
 blog-editor-app/
 frontend/         # React frontend
    src/
        components/
           BlogEditor.jsx
           BlogList.jsx
           BlogEditor.css
           BlogList.css
        pages/
           Home.jsx
           EditBlog.jsx
        App.jsx, main.jsx
 backend/          # Express backend
    models/
       Blog.js
    controllers/
       blogController.js
    routes/
       blogRoutes.js
    config/
       db.js
    server.js
 README.md


Setup Instructions

 1. Clone the Repository
 git clone https://github.com/YOUR_USERNAME/blog-editor-app.git
 cd blog-editor-app--

2. Backend Setup

 cd backend
 npm install
 MongoDB Atlas Connection
 Edit `backend/config/db.js` and replace with your actual MongoDB Atlas URI:
 mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/blog-editor?retryWrites=true&w=
 majority');
 Run the Backend
 npm start
 The backend will run at: `http://localhost:5000`

 3. Frontend Setup

 cd frontend
 npm install
 npm run dev
 The frontend will run at: `http://localhost:5173

Features Implemented- [x] Blog Editor Page (Title, Content, Tags)- [x] Save as Draft- [x] Publish Blog- [x] Auto-save (every 30s or after 5s inactivity)- [x] Display list of blogs (Drafts & Published)- [x] Edit and update existing drafts/posts- [x] MongoDB Atlas integration

Screenshots / Demo Video (Optional)
 > Add images or Loom video link here if available.

Author
 **Suresh Madigundlu**  
GitHub: [github.com/sureshmadigundlu](https://github.com/sureshmadigundlu
