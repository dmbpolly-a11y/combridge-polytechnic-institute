# Portal Structure Documentation

## ✅ Portal Configuration - NO Header/Footer

### Current Setup

All portal routes are configured to render **WITHOUT** the public website header and footer. This provides a clean, focused dashboard experience for authenticated users.

### Routes Without Header/Footer

The following portal routes render standalone (no Layout wrapper):

#### 1. **University Management Portal**
```jsx
<Route path="/university-management" element={<CombridgeManage />} />
<Route path="/university-management/:portal" element={<CombridgeManage />} />
```

#### 2. **Combridge Manage Portal**
```jsx
<Route path="/combridge-manage" element={<CombridgeManage />} />
<Route path="/combridge-manage/:portal" element={<CombridgeManage />} />
```

#### 3. **Admin Dashboard**
```jsx
<Route path="/admin/dashboard" element={<CombridgeManage />} />
```

#### 4. **Teacher Dashboard**
```jsx
<Route path="/teacher/dashboard" element={<CombridgeManage />} />
```

#### 5. **Student Dashboard**
```jsx
<Route path="/student/dashboard" element={<CombridgeManage />} />
```

#### 6. **Authentication Pages**
```jsx
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Login />} />
```

---

## Layout Structure

### Public Pages (WITH Header/Footer)
```jsx
<Route path="/" element={<Layout><Home /></Layout>} />
<Route path="/about" element={<Layout><About /></Layout>} />
<Route path="/academics" element={<Layout><Academics /></Layout>} />
<Route path="/students" element={<Layout><Students /></Layout>} />
<Route path="/admissions" element={<Layout><Admissions /></Layout>} />
<Route path="/research" element={<Layout><Research /></Layout>} />
<Route path="/news" element={<Layout><NewsEvents /></Layout>} />
<Route path="/notice-board" element={<Layout><NoticeBoard /></Layout>} />
<Route path="/gallery" element={<Layout><Gallery /></Layout>} />
<Route path="/contact" element={<Layout><Contact /></Layout>} />
```

### Portal Pages (WITHOUT Header/Footer)
```jsx
// Standalone components - no Layout wrapper
<Route path="/university-management" element={<CombridgeManage />} />
<Route path="/combridge-manage" element={<CombridgeManage />} />
<Route path="/admin/dashboard" element={<CombridgeManage />} />
<Route path="/teacher/dashboard" element={<CombridgeManage />} />
<Route path="/student/dashboard" element={<CombridgeManage />} />
<Route path="/login" element={<Login />} />
```

---

## Available Portals

The `CombridgeManage` component includes 7 different portal types:

1. **Admin Portal** (`/combridge-manage?portal=admin`)
   - Full system control
   - All departments, users & system-wide operations
   - Color: #c1272d (Red)

2. **Academic Registrar** (`/combridge-manage?portal=academic-registrar`)
   - Register students, issue admission numbers
   - Manage programmes & marks
   - Color: #006837 (Green)

3. **Lecturer / Tutor** (`/combridge-manage?portal=lecturer`)
   - Enter marks, calculate totals & grades
   - Manage your students
   - Color: #2563eb (Blue)

4. **Dean of Clinical & Medicine** (`/combridge-manage?portal=dean`)
   - View marks, check attendance
   - Monitor exam setup across faculty
   - Color: #d97706 (Orange)

5. **Deputy Academic Registrar** (`/combridge-manage?portal=deputy-registrar`)
   - Edit & upload marks
   - Manage student portal corrections
   - Color: #7c3aed (Purple)

6. **Bursar** (`/combridge-manage?portal=bursar`)
   - Fees structures, record payments
   - Track balances & financial reports
   - Color: #0d9488 (Teal)

7. **Library Admin** (`/combridge-manage?portal=library`)
   - Register & organise books
   - Issue to students, borrowing history
   - Color: #0284c7 (Sky Blue)

---

## Portal Features

### Each Portal Includes:

#### Common Features
- **Authentication** - Login required
- **Role-based access** - Different permissions per portal
- **Dashboard** - Overview of key metrics
- **Sidebar navigation** - Easy access to all modules
- **No public header/footer** - Clean, focused interface

#### Portal-Specific Modules
- **Students Management** - Register, view, edit students
- **Marks Management** - Enter coursework, exams, calculate grades
- **Applications** - Review and approve/reject applications
- **Exams** - Set, vet, print examination papers
- **Fees** - Structure fees, record payments, track balances
- **Library** - Books catalog, issue/return, borrowing history
- **Reports** - Generate various reports and analytics

---

## Access URLs

### Production (Vercel)
```
https://combridge-vercel-app.vercel.app
```

### Portal Access Examples
```
https://combridge-vercel-app.vercel.app/combridge-manage
https://combridge-vercel-app.vercel.app/combridge-manage?portal=admin
https://combridge-vercel-app.vercel.app/combridge-manage?portal=lecturer
https://combridge-vercel-app.vercel.app/admin/dashboard
https://combridge-vercel-app.vercel.app/teacher/dashboard
https://combridge-vercel-app.vercel.app/student/dashboard
```

---

## Technical Implementation

### File Structure
```
resources/js/
├── App.jsx                    # Main routing configuration
├── pages/
│   ├── CombridgeManage.jsx   # Main portal component
│   ├── Login.jsx             # Authentication
│   └── admin/
│       └── Dashboard.jsx     # Admin-specific dashboard
├── components/
│   ├── Header.jsx            # Public header (not in portals)
│   ├── Navbar.jsx            # Public navbar (not in portals)
│   └── Footer.jsx            # Public footer (not in portals)
└── context/
    └── AuthContext.jsx       # Authentication state management
```

### Layout Component
```jsx
function Layout({ children }) {
    return (
        <>
            <Header />    {/* Only for public pages */}
            <Navbar />    {/* Only for public pages */}
            <main>
                <Suspense fallback={<LoadingSpinner />}>
                    {children}
                </Suspense>
            </main>
            <Footer />    {/* Only for public pages */}
        </>
    );
}
```

### Portal Component (Standalone)
```jsx
// No Layout wrapper - renders full screen
<Route path="/combridge-manage" element={<CombridgeManage />} />
```

---

## Development

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
git add .
git commit -m "Update portals"
git push origin main
```
Vercel will automatically deploy on push.

---

## Status

✅ **All portals configured correctly**
- No header/footer on portal routes
- Clean dashboard interface
- Full-screen portal experience
- Role-based access control
- Production URL updated to: `combridge-vercel-app.vercel.app`

---

**Last Updated:** January 2025  
**Version:** 2.0
