# 🧠 JobGenie – AI Resume Screener

JobGenie is a full-stack resume optimization tool that provides AI-style feedback based on a job description. Users can paste their resume and job description to receive a match score, improvement suggestions, and mock interview questions. Submissions are stored in a MongoDB database.

---

## 🚀 Live Demo

- **Frontend (Vercel)**:  
  [https://jobgenie-client.vercel.app](https://jobgenie-client.vercel.app)

- **Backend API (Render)**:  
  [https://jobgenie-server.onrender.com](https://jobgenie-server.onrender.com)

---

## ⚙️ Technologies Used

- React (Frontend)
- Axios
- Express.js (Backend)
- Node.js
- MongoDB Atlas
- Mongoose
- Render (Backend Deployment)
- Vercel (Frontend Deployment)

---

## 🧑‍💻 Installation / Setup

### 📁 Clone the Repositories

```bash
git clone https://github.com/Mustak-Eman/jobgenie-client.git
git clone https://github.com/Mustak-Eman/jobgenie-server.git

🔧 Frontend Setup
bash
Copy
Edit
cd jobgenie-client
npm install
npm start
Runs on: http://localhost:3000

🔧 Backend Setup
bash
Copy
Edit
cd jobgenie-server
npm install
Create a .env file in the backend folder with:

env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string_here
Then run:

bash
Copy
Edit
node index.js
Runs on: http://localhost:5000

📡 API Endpoints
Method	Route	Description
GET	/	Backend health check
POST	/analyze	Accepts resume & jobDesc, returns feedback
GET	/submissions	Returns recent saved submissions

👤 Team Members
Mustak Ahmed Eman

💬 Reflections
This project helped me understand how to build and deploy a full-stack application using modern web tools. I practiced API design, MongoDB integration, and using deployment platforms like Vercel and Render. The biggest learning was how to securely connect the frontend and backend across the internet and store user-submitted data.

🤖 AI Tools Used
ChatGPT – Used to assist with backend routing, MongoDB integration, error handling, and documentation (README).
