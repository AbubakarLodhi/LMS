# 🏗️ LMS Academy - Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER (Browser)                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    React Frontend                         │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │  │
│  │  │   Navbar     │  │    Pages     │  │  Components  │   │  │
│  │  │              │  │              │  │              │   │  │
│  │  │ • Links      │  │ • Home       │  │ • CourseCard │   │  │
│  │  │ • Menu       │  │ • CourseList │  │ • Forms      │   │  │
│  │  │              │  │ • CourseDetail                 │   │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │         React Router (Client-side routing)       │   │  │
│  │  │ Routes: /, /courses, /admin/courses, /course/:id│   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │     Axios HTTP Client (API Communication)        │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                          ↓ HTTP Requests                       │
└─────────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                 REST API LAYER (Backend)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │           Express.js Server (Port 5000)                  │  │
│  │                                                          │  │
│  │  ┌──────────────────┐  ┌──────────────────────────────┐ │  │
│  │  │  API Routes      │  │    Middleware                │ │  │
│  │  │  ┌──────────────┐│  │  • CORS                      │ │  │
│  │  │  │ /api/courses ││  │  • JSON Parser               │ │  │
│  │  │  │ • GET all    ││  │  • URL Encoded               │ │  │
│  │  │  │ • GET by id  ││  │  • Error Handler             │ │  │
│  │  │  │ • POST       ││  │                              │ │  │
│  │  │  │ • PUT        ││  │                              │ │  │
│  │  │  │ • DELETE     ││  │                              │ │  │
│  │  │  └──────────────┘│  │                              │ │  │
│  │  │  ┌──────────────┐│  └──────────────────────────────┘ │  │
│  │  │  │ /api/lessons ││                                    │  │
│  │  │  │ • GET        ││                                    │  │
│  │  │  │ • POST       ││                                    │  │
│  │  │  │ • PUT        ││                                    │  │
│  │  │  │ • DELETE     ││                                    │  │
│  │  │  └──────────────┘│                                    │  │
│  │  └──────────────────┘                                    │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │         Controllers / Request Handlers           │   │  │
│  │  │  • courseController.js                           │   │  │
│  │  │  • lessonController.js                           │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │          Data Validation & Business Logic        │   │  │
│  │  │  • Input validation                              │   │  │
│  │  │  • Error handling                                │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                          ↓ Database Queries                     │
└─────────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│              DATA ACCESS LAYER (Mongoose ODM)                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Mongoose Models & Schemas                    │  │
│  │                                                          │  │
│  │  ┌────────────────────┐  ┌────────────────────────────┐ │  │
│  │  │  Course Schema     │  │  Lesson Schema             │ │  │
│  │  │                    │  │                            │ │  │
│  │  │ • _id              │  │ • _id                      │ │  │
│  │  │ • title            │  │ • courseId (ref)           │ │  │
│  │  │ • description      │  │ • title                    │ │  │
│  │  │ • instructor       │  │ • description              │ │  │
│  │  │ • duration         │  │ • videoUrl                 │ │  │
│  │  │ • level            │  │ • content                  │ │  │
│  │  │ • price            │  │ • duration                 │ │  │
│  │  │ • image            │  │ • orderIndex               │ │  │
│  │  │ • students         │  │ • timestamps               │ │  │
│  │  │ • rating           │  │                            │ │  │
│  │  │ • timestamps       │  │                            │ │  │
│  │  └────────────────────┘  └────────────────────────────┘ │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                          ↓ Database Commands                    │
└─────────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                  DATABASE LAYER (MongoDB)                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │            MongoDB Collections & Documents               │  │
│  │                                                          │  │
│  │  ┌────────────────────┐  ┌────────────────────────────┐ │  │
│  │  │ courses collection │  │ lessons collection         │ │  │
│  │  │                    │  │                            │ │  │
│  │  │ Documents:         │  │ Documents:                 │ │  │
│  │  │ • Course 1         │  │ • Lesson 1 (for Course 1) │ │  │
│  │  │ • Course 2         │  │ • Lesson 2 (for Course 1) │ │  │
│  │  │ • Course 3         │  │ • Lesson 3 (for Course 2) │ │  │
│  │  │ • ...              │  │ • ...                      │ │  │
│  │  │                    │  │                            │ │  │
│  │  │ Indices:           │  │ Indices:                   │ │  │
│  │  │ • _id (primary)    │  │ • _id (primary)            │ │  │
│  │  │ • title            │  │ • courseId (for queries)   │ │  │
│  │  └────────────────────┘  └────────────────────────────┘ │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Local: mongodb://localhost:27017/lms                          │
│  Cloud: MongoDB Atlas connection string                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App
├── Navbar
│   ├── Logo
│   └── Navigation Links
│
├── Routes
│   ├── Home (/)
│   │   ├── Hero Section
│   │   ├── Features Section
│   │   └── Popular Courses Section
│   │
│   ├── CourseList (/courses, /admin/courses)
│   │   ├── Header (with New Course button for admin)
│   │   ├── Course Form (admin only)
│   │   ├── Filters & Search
│   │   └── CourseCard (multiple)
│   │       ├── Course Image
│   │       ├── Course Info
│   │       └── Action Buttons
│   │
│   └── CourseDetail (/course/:id, /admin/course/:id)
│       ├── Course Header
│       ├── Course About Section
│       ├── Lessons Section
│       │   ├── Add Lesson Form (admin only)
│       │   └── Lesson Items (multiple)
│       │       ├── Lesson Number
│       │       ├── Lesson Info
│       │       └── Lesson Actions
│       │
│       └── Toast Notifications
│
└── Toast Container (notifications)
```

---

## Data Flow Diagram

```
┌────────────┐
│   User     │
│ (Browser)  │
└─────┬──────┘
      │
      │ Click "New Course"
      ↓
┌─────────────────┐
│ Course Form     │
│ (React)         │
└────────┬────────┘
         │
         │ Form Submission
         │ (Axios POST)
         ↓
┌──────────────────────────────┐
│ Express Server               │
│ POST /api/courses            │
└────────┬─────────────────────┘
         │
         │ Validate Input
         │ Create Document
         ↓
┌──────────────────────────────┐
│ MongoDB                      │
│ Insert Course Document       │
└────────┬─────────────────────┘
         │
         │ Return _id + data
         ↓
┌──────────────────────────────┐
│ Express Server               │
│ Send 201 + Course JSON       │
└────────┬─────────────────────┘
         │
         │ Axios Response
         ↓
┌──────────────────────────────┐
│ React Component              │
│ Update State / Fetch Courses │
└────────┬─────────────────────┘
         │
         │ Re-render UI
         │ Show Toast Message
         ↓
┌─────────────────────────┐
│ Course appears on page  │
└─────────────────────────┘
```

---

## API Request/Response Flow

```
FRONTEND (React)
    ↓
Axios.post('/api/courses', courseData)
    ↓
BACKEND (Express)
    ↓
Route Handler (routes/courses.js)
    ↓
Validation
    ↓
Create Mongoose Document (models/Course.js)
    ↓
MongoDB (Save to Database)
    ↓
Return Saved Document
    ↓
Send Response (JSON)
    ↓
Axios receives response
    ↓
React Component updates state
    ↓
UI Re-renders with new course
    ↓
Toast notification shows
```

---

## State Management Flow

```
CourseList Component State:
  ├── courses: []              ← All courses from database
  ├── loading: boolean         ← Loading state
  ├── searchTerm: string       ← Search input
  ├── filterLevel: string      ← Filter selection
  ├── showForm: boolean        ← Form visibility
  ├── editingCourse: object    ← Course being edited
  └── formData: object         ← Form inputs

CourseDetail Component State:
  ├── course: object           ← Current course data
  ├── lessons: []              ← Lessons for course
  ├── loading: boolean         ← Loading state
  ├── showAddLessonForm: boolean
  └── formData: object         ← New lesson form data
```

---

## API Endpoints Map

```
BASE URL: http://localhost:5000/api

COURSES:
  GET    /courses              → Get all courses
  GET    /courses/:id          → Get single course
  POST   /courses              → Create course
  PUT    /courses/:id          → Update course
  DELETE /courses/:id          → Delete course

LESSONS:
  GET    /lessons/course/:courseId  → Get course lessons
  GET    /lessons/:id               → Get single lesson
  POST   /lessons                   → Create lesson
  PUT    /lessons/:id               → Update lesson
  DELETE /lessons/:id               → Delete lesson

HEALTH:
  GET    /health               → Server health check
```

---

## Authentication & Security Notes

```
Current Implementation:
├── No user authentication ✓ (as requested)
├── No API key validation
├── No role-based access control
├── Admin features accessible via URL routing
└── All data publicly accessible

For Production, Consider Adding:
├── JWT Authentication
├── Password hashing (bcryptjs)
├── Role-based access control
├── Input validation & sanitization
├── Rate limiting
├── HTTPS only
└── Environment variable validation
```

---

## Technology Stack Visualization

```
                    Frontend Layer
                   ┌─────────────┐
                   │   React     │
                   │ (UI Library)│
                   └──────┬──────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
    ┌───────────┐  ┌────────────┐  ┌───────────┐
    │React Router  │  Axios       │  CSS3       │
    │(Routing)     │ (HTTP)       │ (Styling)   │
    └───────────┘  └────────────┘  └───────────┘

                    Backend Layer
                   ┌─────────────┐
                   │   Node.js   │
                   │(Runtime Env)│
                   └──────┬──────┘
                          │
                   ┌──────┴──────┐
                   │             │
              ┌────────────┐  ┌──────────┐
              │ Express.js │  │ Mongoose │
              │(Web Srv)   │  │(ODM)     │
              └────────────┘  └──────────┘

                    Database Layer
                   ┌─────────────┐
                   │  MongoDB    │
                   │(NoSQL DB)   │
                   └─────────────┘
```

---

## File Relationships

```
Backend Files:
  server.js
    ├── requires → routes/courses.js
    ├── requires → routes/lessons.js
    ├── requires → models/Course.js (via routes)
    └── requires → models/Lesson.js (via routes)

Frontend Files:
  App.js
    ├── imports → components/Navbar.js
    ├── imports → pages/Home.js
    ├── imports → pages/CourseList.js
    ├── imports → pages/CourseDetail.js
    └── imports → services/api.js

  pages/CourseList.js
    ├── imports → components/CourseCard.js
    └── imports → services/api.js

  pages/CourseDetail.js
    └── imports → services/api.js

  services/api.js
    └── Exports courseAPI, lessonAPI objects
```

---

## Deployment Architecture (Optional)

```
Production Setup:

                    Internet
                        │
                        ↓
            ┌─────────────────────┐
            │  CDN / Load Balancer│
            └──────────┬──────────┘
                       │
         ┌─────────────┴─────────────┐
         │                           │
    ┌────────────┐           ┌──────────────┐
    │ Frontend   │           │  Backend     │
    │ (Vercel)   │           │  (Heroku)    │
    └────────────┘           └──────┬───────┘
                                    │
                            ┌───────┴────────┐
                            │                │
                     ┌──────────────┐  ┌──────────────┐
                     │  MongoDB     │  │  CDN Static  │
                     │  Atlas       │  │  Assets      │
                     └──────────────┘  └──────────────┘
```

---

## Key Architectural Decisions

1. **Separation of Concerns**: Frontend and Backend are separate projects
2. **RESTful API**: Standard HTTP methods for CRUD operations
3. **Document Database**: MongoDB for flexible schema
4. **Client-side Routing**: React Router for SPA navigation
5. **No Authentication**: Simple public access (as requested)
6. **Component-Based UI**: React components for reusability
7. **CSS-in-Files**: Separate CSS files per component
8. **Axios for HTTP**: Promise-based HTTP client
9. **Mongoose ODM**: Type-safe database interactions
10. **Environment Variables**: Sensitive config in .env files

---

**This architecture provides a solid foundation for a scalable LMS application! 🚀**
