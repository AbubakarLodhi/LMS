# LMS Academy - Learning Management System

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing and delivering online courses with complete CRUD operations.

## 🚀 Features

- **Course Management** - Create, read, update, and delete courses
- **Lesson Management** - Manage lessons within courses
- **Beautiful UI** - Modern and responsive design
- **Admin Dashboard** - Dedicated admin panel for managing content
- **Search & Filter** - Find courses by name and filter by difficulty level
- **Course Details** - Comprehensive course information and lesson viewing
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## 📋 Project Structure

```
L_M_S/
├── Backend/
│   ├── models/
│   │   ├── Course.js
│   │   └── Lesson.js
│   ├── routes/
│   │   ├── courses.js
│   │   └── lessons.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   └── CourseCard.js
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── CourseList.js
    │   │   └── CourseDetail.js
    │   ├── services/
    │   │   └── api.js
    │   ├── styles/
    │   │   ├── globals.css
    │   │   ├── Navbar.css
    │   │   ├── CourseCard.css
    │   │   ├── CourseList.css
    │   │   ├── CourseDetail.css
    │   │   └── Home.css
    │   ├── App.js
    │   └── index.js
    ├── public/
    │   └── index.html
    └── package.json
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Frontend
- **React** - JavaScript library for UI
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **React Toastify** - Notification system
- **CSS3** - Modern styling

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with MongoDB connection:
```
MONGODB_URI=mongodb://localhost:27017/lms
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🎯 API Endpoints

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create new course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Lessons
- `GET /api/lessons/course/:courseId` - Get lessons by course
- `GET /api/lessons/:id` - Get single lesson
- `POST /api/lessons` - Create new lesson
- `PUT /api/lessons/:id` - Update lesson
- `DELETE /api/lessons/:id` - Delete lesson

## 📝 Example Course Data

```json
{
  "title": "Web Development Fundamentals",
  "description": "Learn the basics of web development including HTML, CSS, and JavaScript",
  "instructor": "John Doe",
  "duration": "8 weeks",
  "level": "Beginner",
  "price": 49.99,
  "image": "https://via.placeholder.com/400x300"
}
```

## 🎨 UI Design Features

- **Modern Gradient** - Beautiful purple gradient theme
- **Card-based Layout** - Clean and organized course cards
- **Smooth Animations** - Hover effects and transitions
- **Responsive Grid** - Adapts to all screen sizes
- **Professional Colors** - Carefully chosen color palette
- **Easy Navigation** - Intuitive menu and routing
- **Toast Notifications** - User-friendly alerts

## 🖥️ Usage

### For Students
1. Navigate to "Courses" to view all available courses
2. Use search and filters to find courses
3. Click "View" to see course details and lessons
4. Browse course lessons and content

### For Admins
1. Click "Admin" in navbar to access admin panel
2. Create new courses with the "New Course" button
3. Edit existing courses
4. Delete courses
5. Manage lessons within each course
6. Add new lessons with videos and content

## 🌐 Navigation Routes

- `/` - Home page with featured courses
- `/courses` - All courses for students
- `/admin/courses` - Admin panel for course management
- `/course/:id` - Course detail page
- `/admin/course/:id` - Admin course detail with lesson management

## 🎓 Features Explained

### Course Management
- Full CRUD operations for courses
- Search functionality to find courses
- Filter courses by difficulty level
- Display course metadata (instructor, duration, price, rating)

### Lesson Management
- Add lessons to courses
- Organize lessons with order index
- Include video URLs and content
- Track lesson duration

### Admin Features
- Dedicated admin interface
- Edit and delete courses
- Manage lesson content
- Full control over course structure

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px and above)
- Tablet (768px and above)
- Mobile (320px and above)

## 🚀 Deployment

### Backend Deployment (Heroku)
```bash
cd Backend
heroku login
heroku create your-app-name
git push heroku main
```

### Frontend Deployment (Vercel)
```bash
cd Frontend
npm run build
vercel
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check `.env` file has correct MONGODB_URI
- For MongoDB Atlas, ensure IP is whitelisted

### Port Already in Use
- Backend: Change PORT in `.env` file
- Frontend: Set different port with `PORT=3001 npm start`

### CORS Issues
- Ensure proxy in Frontend `package.json` matches backend URL
- Check CORS middleware in `server.js`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express.js Guide](https://expressjs.com)
- [React Router](https://reactrouter.com)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer Notes

- No authentication implemented (as requested)
- Uses local MongoDB instance by default
- All courses and lessons are public
- Admin functions accessed via URL routing
- No user accounts or login required

## 🎯 Future Enhancements

- User authentication and profiles
- Student enrollment tracking
- Course ratings and reviews
- Video hosting integration
- Progress tracking
- Certificates
- Discussion forums
- Email notifications

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Happy Learning! 🚀**
