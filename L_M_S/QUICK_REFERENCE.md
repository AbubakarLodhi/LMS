# 🚀 Quick Reference Guide - LMS Academy

## ⚡ Essential Commands

### Backend
```bash
cd Backend
npm install                    # Install dependencies
npm start                      # Run production
npm run dev                    # Run with auto-reload (nodemon)
```

### Frontend
```bash
cd Frontend
npm install                    # Install dependencies
npm start                      # Start dev server (port 3000)
npm run build                  # Build for production
```

---

## 🌐 URLs

| URL | Purpose |
|-----|---------|
| `http://localhost:3000` | Frontend home page |
| `http://localhost:3000/courses` | Course listing (student view) |
| `http://localhost:3000/admin/courses` | Admin course management |
| `http://localhost:5000/api` | API base URL |
| `http://localhost:5000/api/courses` | Courses endpoint |
| `http://localhost:5000/api/lessons` | Lessons endpoint |

---

## 📝 Key File Locations

### Backend
| File | Purpose |
|------|---------|
| `Backend/server.js` | Main server file |
| `Backend/.env` | MongoDB connection config |
| `Backend/models/Course.js` | Course schema |
| `Backend/models/Lesson.js` | Lesson schema |
| `Backend/routes/courses.js` | Course API routes |
| `Backend/routes/lessons.js` | Lesson API routes |

### Frontend
| File | Purpose |
|------|---------|
| `Frontend/src/App.js` | Main app component |
| `Frontend/src/index.js` | React entry point |
| `Frontend/src/services/api.js` | API calls |
| `Frontend/src/pages/Home.js` | Homepage |
| `Frontend/src/pages/CourseList.js` | Course listing page |
| `Frontend/src/pages/CourseDetail.js` | Course detail page |

---

## 🔄 CRUD Operation Quick Guide

### CREATE Course
1. Go to: `http://localhost:3000/admin/courses`
2. Click "New Course" button
3. Fill in form fields:
   - Title (required)
   - Instructor (required)
   - Duration (required)
   - Price (required)
   - Level (Beginner/Intermediate/Advanced)
   - Description (required)
   - Image URL (optional)
4. Click "Add Course"

### READ Courses
1. Go to: `http://localhost:3000/courses` (student view)
2. Or: `http://localhost:3000/admin/courses` (admin view)
3. All courses are displayed in a grid
4. Click "View" to see course details
5. Use search box to find specific courses
6. Use filter dropdown to filter by level

### UPDATE Course
1. Go to: `http://localhost:3000/admin/courses`
2. Click "Edit" button on a course
3. Form pre-fills with current data
4. Modify any fields
5. Click "Update Course"

### DELETE Course
1. Go to: `http://localhost:3000/admin/courses`
2. Click "Delete" button on a course
3. Confirm deletion when prompted

### CREATE Lesson (within a course)
1. Click course to view details
2. Go to admin course detail: `http://localhost:3000/admin/course/{courseId}`
3. Click "Add Lesson" button
4. Fill in lesson fields:
   - Title (required)
   - Description (required)
   - Content (required)
   - Video URL (optional)
   - Duration in minutes (optional)
5. Click "Add Lesson"

### READ Lessons
1. View course details by clicking on a course
2. All lessons are listed in order
3. Each lesson shows: title, description, duration

### DELETE Lesson
1. Go to admin course detail
2. Click "Delete" button on lesson
3. Confirm when prompted

---

## 🎨 Styling Reference

### Color Variables (in globals.css)
```css
--primary-color: #6366f1        (Indigo)
--secondary-color: #8b5cf6      (Purple)
--accent-color: #ec4899         (Pink)
--dark-bg: #0f172a              (Dark blue)
--light-bg: #f8fafc             (Light gray)
--text-dark: #1e293b            (Dark text)
--text-light: #64748b           (Light text)
--border-color: #e2e8f0         (Border)
--success-color: #10b981        (Green)
--danger-color: #ef4444         (Red)
--warning-color: #f59e0b        (Amber)
```

### Button Classes
```css
.btn-primary      /* Primary indigo button */
.btn-success      /* Success green button */
.btn-danger       /* Danger red button */
.btn-warning      /* Warning amber button */
.btn-secondary    /* Secondary gray button */
```

---

## 🔍 Common Issues & Fixes

### MongoDB Won't Connect
```bash
# Check if MongoDB is running
# Mac: brew services list
# Windows: Check Services app
# Linux: systemctl status mongod

# Restart MongoDB
# Mac: brew services restart mongodb-community
# Windows: Restart MongoDB service
# Linux: sudo systemctl restart mongod
```

### Port Already in Use (5000 or 3000)
```bash
# Change backend port
# Edit Backend/.env and change PORT=5001

# Change frontend port
# Run: PORT=3001 npm start
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### API Not Responding
- Check backend is running: `npm run dev` in Backend folder
- Check MongoDB connection in .env file
- Check browser console for errors (F12)
- Check backend terminal for error messages

### Frontend Won't Load
- Check React is running: `npm start` in Frontend folder
- Clear browser cache (Ctrl+Shift+Delete)
- Check if port 3000 is available
- Check browser console for errors (F12)

---

## 📊 Sample Test Data

### Minimal Course
```json
{
  "title": "Test Course",
  "description": "This is a test course",
  "instructor": "Test Instructor",
  "duration": "1 week",
  "level": "Beginner",
  "price": 9.99
}
```

### Complete Course
```json
{
  "title": "Complete Web Development",
  "description": "Learn full web development from HTML, CSS, JavaScript to databases",
  "instructor": "John Smith",
  "duration": "12 weeks",
  "level": "Intermediate",
  "price": 99.99,
  "image": "https://via.placeholder.com/400x300?text=Web+Dev"
}
```

### Sample Lesson
```json
{
  "courseId": "COURSE_ID_HERE",
  "title": "Introduction Lesson",
  "description": "First lesson of the course",
  "content": "Welcome to the course! In this lesson we'll cover the basics...",
  "videoUrl": "https://example.com/video.mp4",
  "duration": 45,
  "orderIndex": 1
}
```

---

## 📱 Responsive Breakpoints

| Device | Width | Grid Cols |
|--------|-------|-----------|
| Mobile | < 480px | 1 |
| Tablet | 480-768px | 2 |
| Desktop | 768-1200px | 3 |
| Large | > 1200px | 4 |

---

## 🔌 API Examples

### Create Course (cURL)
```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Course",
    "description": "Course description",
    "instructor": "John Doe",
    "duration": "8 weeks",
    "level": "Beginner",
    "price": 49.99
  }'
```

### Get All Courses
```bash
curl http://localhost:5000/api/courses
```

### Get Single Course
```bash
curl http://localhost:5000/api/courses/COURSE_ID
```

### Update Course
```bash
curl -X PUT http://localhost:5000/api/courses/COURSE_ID \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'
```

### Delete Course
```bash
curl -X DELETE http://localhost:5000/api/courses/COURSE_ID
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `SETUP.md` | Step-by-step setup guide |
| `SAMPLE_DATA.js` | Sample courses and lessons |
| `PROJECT_SUMMARY.md` | Project overview |
| `QUICK_REFERENCE.md` | This file! |

---

## 🎯 Workflow Examples

### Creating Your First Course
```
1. npm install (both Backend & Frontend)
2. Start MongoDB
3. npm run dev (Backend)
4. npm start (Frontend)
5. Navigate to http://localhost:3000/admin/courses
6. Click "New Course"
7. Fill in details and submit
8. Go to /courses to see your course
9. Click "View" to see course details
```

### Adding Lessons to Course
```
1. Go to /admin/courses
2. Click "View" on your course
3. Click "Add Lesson" button
4. Fill in lesson details
5. Click "Add Lesson"
6. Lesson now appears in course
```

### Editing a Course
```
1. Go to /admin/courses
2. Click "Edit" on course
3. Modify fields
4. Click "Update Course"
5. Changes saved to database
```

### Testing CRUD Fully
```
CREATE: Make a new course
READ: View all courses, view one course
UPDATE: Edit the course you created
DELETE: Delete the course you created
```

---

## 🛠️ Package Dependencies

### Backend (package.json)
- express - Web framework
- mongoose - MongoDB ODM
- cors - Cross-origin resource sharing
- dotenv - Environment variables

### Frontend (package.json)
- react - UI library
- react-dom - React DOM rendering
- react-router-dom - Client-side routing
- axios - HTTP requests
- react-icons - Icon library
- react-toastify - Notifications

---

## 💡 Tips & Tricks

1. **Fast Development**: Use `npm run dev` in backend for auto-reload
2. **Clear Cache**: If styles don't update, clear browser cache
3. **API Testing**: Use browser DevTools Network tab to debug API calls
4. **Sample Data**: See SAMPLE_DATA.js for pre-made courses
5. **Console Debugging**: Use `console.log()` to debug React components
6. **Backend Logs**: Check terminal running backend for request logs
7. **Database Check**: Use MongoDB Compass to view database
8. **Mobile Testing**: Use browser DevTools device emulation
9. **Git Commits**: Both folders have .gitignore files ready
10. **Environment**: Keep .env files out of version control

---

## 📞 Troubleshooting Checklist

- [ ] MongoDB is running
- [ ] .env file exists in Backend
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] Node modules installed (npm install run)
- [ ] No console errors in browser
- [ ] No errors in backend terminal
- [ ] Can create a course
- [ ] Can view courses
- [ ] Can edit courses
- [ ] Can delete courses

---

## 🎓 Next Steps

After setup and testing:

1. **Customize** - Modify colors, fonts, layout
2. **Add Data** - Create multiple courses and lessons
3. **Test Thoroughly** - Try all CRUD operations
4. **Deploy** - Push to production
5. **Extend** - Add authentication, payments, etc.

---

**Happy Coding! 🚀**

For detailed info, see README.md, SETUP.md, and PROJECT_SUMMARY.md
