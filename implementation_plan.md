# Combridge Manage – Full Portal System Implementation

## Summary
Three changes: (1) Fix hero section — remove blue, make images full-width/full-height behind header. (2) Create a new **"Combridge Manage"** page at `/combridge-manage` with 7 fully-featured portals. (3) Add it to the navbar.

---

## Proposed Changes

### Fix 1 – Hero Section (`Home.jsx` + `app.css`)
- Remove `#051566` (rust blue) from hero gradient → use deep green only
- Change hero layout so images are **full-width background** (not a side column) with text overlay on top
- Hero fills screen from top (just below sticky nav) with `100vh` or `calc(100vh - navHeight)`

---

### Fix 2 – `CombridgeManage.jsx` (NEW page at `/combridge-manage`)
7 portals, all with full CRUD operations, tabbed interface:

#### 1. Admin Portal
- Dashboard: Department cards (Clinical & Medicine, Education, Dean of Students, Director, Lecturers, Bursar, Students, Library, Store Keeper, IT)
- Manage users, view system-wide stats

#### 2. Academic Registrar
- Register students (form with auto-generated admission number)
- Receive & process applications
- Set & manage programmes
- View student status
- Manage marks entry (approve / lock marks)

#### 3. Lecturer / Tutor Portal
- View students he teaches
- Enter marks (coursework + exam)
- Auto-calculate total, average, grade, remarks
- Add new students OR import from Academic Registrar
- Edit/update marks

#### 4. Dean of Clinical & Medicine
- View marks across all courses
- Check attendance records
- Check exam setup / vetting status

#### 5. Deputy Academic Registrar
- Manage student portal
- Enter, edit, upload marks from Academic Registrar
- Make corrections to marks

#### 6. Bursar
- Create fees structures (programmes × year × amount)
- Record payments per student
- Track balances (paid / balance)
- Financial reports (summary)

#### 7. Library Admin
- Register new books (title, author, dept, course unit)
- Organise by department & course
- Issue books to students (generate a library number)
- Student entry/exit record with details
- Borrowing history (issued, returned, overdue)
- Book inventory: total, old, new
- Full CRUD on books and borrowing

---

### Fix 3 – `Navbar.jsx`
- Add **"Combridge Manage"** top-level nav link (dropdown) beside "Portals"
- Sub-links: Admin, Academic Registrar, Lecturer, Dean, Deputy Registrar, Bursar, Library

### Fix 4 – `App.jsx`
- Add route `/combridge-manage` and `/combridge-manage/:portal`

---

## Verification
- `npm run build` — 0 errors
- `git push` — triggers Vercel auto-deploy
- Live URL: https://combridge-vercel-app.vercel.app/combridge-manage
