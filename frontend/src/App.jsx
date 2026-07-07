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
        <Route path="payments" element={<div className="text-slate-500">المدفوعات — قريباً</div>} />
        <Route path="certificates" element={<div className="text-slate-500">الشهادات — قريباً</div>} />
        
      </Route>

      <Route path="/teacher" element={
        <ProtectedRoute roles={['teacher']}>
          <TeacherLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/teacher/dashboard" replace />} />
        <Route path="dashboard" element={<div className="text-slate-500">لوحة التحكم — قريباً</div>} />
        <Route path="students" element={<div className="text-slate-500">قائمة الطلاب — قريباً</div>} />
        <Route path="students/:id" element={<div className="text-slate-500">تفاصيل الطالب — قريباً</div>} />
        <Route path="payments" element={<div className="text-slate-500">المدفوعات — قريباً</div>} />
      </Route>

      <Route path="/guardian" element={
        <ProtectedRoute roles={['guardian']}>
          <GuardianLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/guardian/dashboard" replace />} />
        <Route path="dashboard" element={<div className="text-slate-500">أطفالي — قريباً</div>} />
        <Route path="children/:id" element={<div className="text-slate-500">تفاصيل الطفل — قريباً</div>} />
        <Route path="certificates" element={<div className="text-slate-500">الشهادات — قريباً</div>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App