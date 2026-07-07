import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import ProtectedRoute from './shared/ProtectedRoute'
import Login from './pages/Login'
import ManagerLayout from './components/layout/ManagerLayout'
import TeacherLayout from './components/layout/TeacherLayout'
import GuardianLayout from './components/layout/GuardianLayout'
import Teachers from './pages/manager/Teachers'
import Students from './pages/manager/Students'
import Transfers from './pages/manager/Transfers'
import TeacherDashboard from './pages/teacher/Dashboard'
import StudentList from './pages/teacher/StudentList'
import StudentDetail from './pages/teacher/StudentDetail'
import GuardianDashboard from './pages/guardian/Dashboard'
import ChildDetail from './pages/guardian/ChildDetail'
import TeacherPayments from './pages/teacher/Payments'
import ManagerPayments from './pages/manager/Payments'
import ManagerCertificates from './pages/manager/Certificates'
import GuardianCertificates from './pages/guardian/Certificates'
function App() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={
        user ? <Navigate to={`/${user.role}`} replace /> : <Navigate to="/login" replace />
      } />
      <Route path="/login" element={<Login />} />

      <Route path="/manager" element={
        <ProtectedRoute roles={['manager']}>
          <ManagerLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/manager/dashboard" replace />} />
        <Route path="dashboard" element={<div className="text-slate-500">لوحة التحكم — قريباً</div>} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="transfers" element={<Transfers />} />
        <Route path="payments" element={<ManagerPayments />} />
        <Route path="certificates" element={<ManagerCertificates />} />
        
      </Route>

      <Route path="/teacher" element={
        <ProtectedRoute roles={['teacher']}>
          <TeacherLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/teacher/dashboard" replace />} />
        <Route path="dashboard" element={<TeacherDashboard />} />
        <Route path="students" element={<StudentList />} />
        <Route path="students/:id" element={<StudentDetail />} />
        <Route path="payments" element={<TeacherPayments />} />
      </Route>

      <Route path="/guardian" element={
        <ProtectedRoute roles={['guardian']}>
          <GuardianLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/guardian/dashboard" replace />} />
        <Route path="dashboard" element={<GuardianDashboard />} />
        <Route path="children/:id" element={<ChildDetail />} />
        <Route path="certificates" element={<GuardianCertificates />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App