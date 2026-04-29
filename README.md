# 🚀 Mini SaaS Task Management System

A full-stack production-ready Task Management application with secure authentication and multi-user functionality. Each user can create, manage, and track their own tasks independently.

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes

### 📝 Task Management

* Create tasks
* View only personal tasks
* Update task status (Pending → Completed)
* Delete tasks
* Multi-user isolation (no shared/global tasks)

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* JWT Authentication

### Frontend

* React.js
* Tailwind CSS
* Axios

---

## 📁 Project Structure

```
task-manager-saas/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/task-manager-saas.git
cd task-manager-saas
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
DB_URI=your_postgresql_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/auth/signup | Register user |
| POST   | /api/auth/login  | Login user    |

### Task Routes (Protected)

| Method | Endpoint       | Description            |
| ------ | -------------- | ---------------------- |
| GET    | /api/tasks     | Get all user tasks     |
| POST   | /api/tasks     | Create task            |
| PUT    | /api/tasks/:id | Mark task as completed |
| DELETE | /api/tasks/:id | Delete task            |

---

## 🔐 Security Features

* Password hashing (bcrypt)
* JWT authentication
* Protected API routes
* User-specific data access
* Input validation
* Centralized error handling

---

## 🧠 Architecture

Frontend (React) → Backend (Express API) → PostgreSQL Database

---

## 🚀 Future Improvements

* Task due dates & reminders
* Task categories / tags
* Drag-and-drop UI
* Team collaboration
* Email notifications
* Refresh token system

---

## 🌐 Deployment

* Backend: Render / Railway
* Frontend: Vercel / Netlify
* Database: PostgreSQL (Supabase / Neon)

---

## 👨‍💻 Author

Your Name

---

## 📄 License

This project is licensed under the MIT License.
