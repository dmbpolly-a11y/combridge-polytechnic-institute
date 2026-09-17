// Combridge Institute App Router - Production Deploy 2026
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Header      from './components/Header';
import Navbar      from './components/Navbar';
import Footer      from './components/Footer';

// Pages
import Home            from './pages/Home';
import About           from './pages/About';
import Academics       from './pages/Academics';
import Students        from './pages/Students';
import Admissions      from './pages/Admissions';
import ApplyOnline     from './pages/ApplyOnline';
import Research        from './pages/Research';
import NewsEvents      from './pages/NewsEvents';
import NoticeBoard     from './pages/NoticeBoard';
import Gallery         from './pages/Gallery';
import Contact         from './pages/Contact';
import Login           from './pages/Login';
import AdminDashboard  from './pages/admin/Dashboard';
import NotFound              from './pages/NotFound';
import UniversityManagement  from './pages/UniversityManagement';
import CombridgeManage       from './pages/CombridgeManage';

import './styles/app.css';

/**
 * Layout wrapper — Header + Navbar + <main> content + Footer.
 * Login page uses its own full-screen layout so we skip the wrapper for it.
 */
function Layout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Suspense fallback={
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                        <div className="spinner-border" style={{ color: 'var(--primary-color)' }} role="status">
                            <span className="visually-hidden">Loading…</span>
                        </div>
                    </div>
                }>
                    {children}
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* ── 1. Public Home ───────────────────────────── */}
                    <Route path="/" element={<Layout><Home /></Layout>} />

                    {/* ── 2. Cloned USJ Pages & Subpages ────────────── */}
                    {/* About */}
                    <Route path="/about" element={<Layout><About /></Layout>} />
                    <Route path="/about/:subpage" element={<Layout><About /></Layout>} />

                    {/* Academics */}
                    <Route path="/academics" element={<Layout><Academics /></Layout>} />
                    <Route path="/academics/:subpage" element={<Layout><Academics /></Layout>} />

                    {/* Students */}
                    <Route path="/students" element={<Layout><Students /></Layout>} />
                    <Route path="/students/:subpage" element={<Layout><Students /></Layout>} />

                    {/* Admissions */}
                    <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
                    <Route path="/admissions/apply" element={<Layout><ApplyOnline /></Layout>} />
                    <Route path="/admissions/:subpage" element={<Layout><Admissions /></Layout>} />

                    {/* Research */}
                    <Route path="/research" element={<Layout><Research /></Layout>} />
                    <Route path="/research/:subpage" element={<Layout><Research /></Layout>} />

                    {/* News & Events */}
                    <Route path="/news" element={<Layout><NewsEvents /></Layout>} />
                    <Route path="/news/:id" element={<Layout><NewsEvents /></Layout>} />
                    <Route path="/events" element={<Layout><NewsEvents /></Layout>} />

                    {/* Notice Board */}
                    <Route path="/notice-board" element={<Layout><NoticeBoard /></Layout>} />

                    {/* Gallery */}
                    <Route path="/gallery" element={<Layout><Gallery /></Layout>} />

                    {/* Contact */}
                    <Route path="/contact" element={<Layout><Contact /></Layout>} />

                    {/* University Management & Combridge Manage (Standalone Portals — Zero Public Header/Footer) */}
                    <Route path="/university-management" element={<CombridgeManage />} />
                    <Route path="/university-management/:portal" element={<CombridgeManage />} />
                    <Route path="/combridge-manage" element={<CombridgeManage />} />
                    <Route path="/combridge-manage/:portal" element={<CombridgeManage />} />

                    {/* ── 3. Auth (no header/footer) ───────────────── */}
                    <Route path="/login"    element={<Login />} />
                    <Route path="/register" element={<Login />} />

                    {/* ── 4. System Portals (Directly integrated into Portal Layout) ─── */}
                    <Route path="/admin/dashboard" element={<CombridgeManage />} />
                    <Route path="/teacher/dashboard" element={<CombridgeManage />} />
                    <Route path="/student/dashboard" element={<CombridgeManage />} />

                    {/* ── 7. 404 ───────────────────────────────────── */}
                    <Route path="*" element={
                        <Layout><NotFound /></Layout>
                    } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
