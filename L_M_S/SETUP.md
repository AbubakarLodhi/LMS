# 🚀 Quick Start Guide - LMS Academy

## Step-by-Step Setup Instructions

### Prerequisites
- Node.js v14+ installed
- MongoDB installed locally OR MongoDB Atlas account
- Git installed
- A code editor (VS Code recommended)

---

## ⚙️ Backend Setup

### 1. Install Node.js Dependencies
```bash
cd Backend
npm install
```

### 2. Configure MongoDB
**Option A: Local MongoDB**
- Install MongoDB from https://www.mongodb.com/try/download/community
- Run MongoDB service
- MongoDB URI: `mongodb://localhost:27017/lms`

**Option B: MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get connection string
- Add to `.env` file

### 3. Start Backend Server
```bash
cd Backend
npm run dev
```

**Expected Output:**
```
Server running on port 5000
MongoDB connected successfully
```

Access API at: `http://localhost:5000/api`

---

## 🎨 Frontend Setup

### 1. Install React Dependencies
```bash
cd Frontend
npm install
```

### 2. Start React Development Server
```bash
npm start
```

**Browser will automatically open:**
- Home page: `http://localhost:3000`

---

## 🧪 Testing CRUD Operations

### 1. Create a Course (Admin Panel)
- Go to `http://localhost:3000/admin/courses`
- Click "New Course"
- Fill in the form:
  - Title: "JavaScript Basics"
  - Instructor: "John Doe"
  - Duration: "8 weeks"
  - Price: "49.99"
  - Level: "Beginner"
  - Description: "Learn JavaScript fundamentals"
- Click "Add Course"

### 2. View Courses
- Click "Courses" in navbar
- See all created courses
- Search and filter courses

### 3. View Course Details
- Click "View" on any course card
- See course information and lessons

### 4. Add Lessons (Admin)
- Go to `http://localhost:3000/admin/course/{courseId}`
- Click "Add Lesson"
- Fill lesson details
- Click "Add Lesson"

### 5. Update Course
- Go to Admin Courses
- Click "Edit" on a course
- Modify details
- Click "Update Course"

### 6. Delete Course
- Go to Admin Courses
- Click "Delete" on a course
- Confirm deletion

---

## 📁 File Structure Overview

```
Backend/
├── models/
│   ├── Course.js        → Course data structure
│   └── Lesson.js        → Lesson data structure
├── routes/
│   ├── courses.js       → Course CRUD endpoints
│   └── lessons.js       → Lesson CRUD endpoints
├── server.js            → Main server file
├── package.json         → Dependencies
└── .env                 → Configuration

Frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.js    → Navigation bar
│   │   └── CourseCard.js → Course card component
│   ├── pages/
│   │   ├── Home.js      → Home page
│   │   ├── CourseList.js → Courses page
│   │   └── CourseDetail.js → Course detail page
│   ├── services/
│   │   └── api.js       → API calls
│   ├── styles/          → CSS files
│   └── App.js           → Main app component
├── public/
│   └── index.html       → HTML template
└── package.json         → Dependencies
```

---

## 🔧 Troubleshooting

### Issue: MongoDB Connection Error
**Solution:**
- Check if MongoDB is running
- Verify MONGODB_URI in `.env`
- Restart MongoDB service

### Issue: Port 5000/3000 Already in Use
**Solution:**
```bash
# Find process using port
lsof -i :5000

# Kill process (Mac/Linux)
kill -9 <PID>

# Or change port in .env for backend
PORT=5001
```

### Issue: CORS Error
**Solution:**
- Backend already has CORS enabled
- Ensure frontend proxy is set in `package.json`:
```json
"proxy": "http://localhost:5000"
```

### Issue: Module Not Found
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 API Documentation

### Base URL
`http://localhost:5000/api`

### Courses Endpoints

**GET /courses**
- Get all courses
- Returns: Array of courses

**POST /courses**
- Create new course
- Body: `{ title, description, instructor, duration, level, price, image }`

**GET /courses/:id**
- Get single course

**PUT /courses/:id**
- Update course

**DELETE /courses/:id**
- Delete course

### Lessons Endpoints

**GET /lessons/course/:courseId**
- Get lessons for a course

**POST /lessons**
- Create new lesson
- Body: `{ courseId, title, description, content, videoUrl, duration, orderIndex }`

**PUT /lessons/:id**
- Update lesson

**DELETE /lessons/:id**
- Delete lesson

---

## 🎯 Sample Course Data

Use this to test creating courses:

```json
{
  "title": "Python for Beginners",
  "description": "Learn Python programming from scratch. Perfect for beginners with no prior coding experience.",
  "instructor": "Sarah Johnson",
  "duration": "6 weeks",
  "level": "Beginner",
  "price": 39.99,
  "image": "https://via.placeholder.com/400x300?text=Python"
}
```

---

## 🚀 Next Steps

1. **Add More Courses** - Create sample courses in admin panel
2. **Add Lessons** - Add lessons to courses
3. **Customize Styling** - Modify CSS files in `src/styles/`
4. **Deploy** - Follow deployment guides in main README
5. **Add Features** - Extend with authentication, ratings, etc.

---

## 📞 Common Commands

```bash
# Backend
cd Backend
npm install         # Install dependencies
npm start          # Run production
npm run dev        # Run development with nodemon

# Frontend
cd Frontend
npm install        # Install dependencies
npm start          # Start development server
npm run build      # Build for production
```

---

## ✅ Verification Checklist

- [ ] Node.js installed (`node --version`)
- [ ] MongoDB running (local or Atlas)
- [ ] `.env` file created in Backend
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] Can create a course via admin panel
- [ ] Can view courses on main page
- [ ] Can add lessons to courses
- [ ] Can delete courses and lessons

---

**You're all set! Start exploring the LMS! 🎓**
