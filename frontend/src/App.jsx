import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import ProtectedRoute from './shared/ProtectedRoute'
import Login from './pages/Login'

function App() {
  const { user } = useAuth()

  return (
    <Routes>
      {/* Root redirect based on role */}
      <Route path="/" element={
        user ? <Navigate to={`/${user.role}`} replace /> : <Navigate to="/login" replace />
      } />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Manager routes */}
      <Route path="/manager/*" element={
        <ProtectedRoute roles={['manager']}>
          <div className="p-8 text-center text-slate-600">
            <h1 className="text-2xl font-bold mb-4">لوحة المدير</h1>
            <p>سيتم بناؤها في Milestone 2</p>
          </div>
        </ProtectedRoute>
      } />

      {/* Teacher routes */}
      <Route path="/teacher/*" element={
        <ProtectedRoute roles={['teacher']}>
          <div className="p-8 text-center text-slate-600">
            <h1 className="text-2xl font-bold mb-4">لوحة المعلم</h1>
            <p>سيتم بناؤها في Milestone 2</p>
          </div>
        </ProtectedRoute>
      } />

      {/* Guardian routes */}
      <Route path="/guardian/*" element={
        <ProtectedRoute roles={['guardian']}>
          <div className="p-8 text-center text-slate-600">
            <h1 className="text-2xl font-bold mb-4">لوحة ولي الأمر</h1>
            <p>سيتم بناؤها في Milestone 2</p>
          </div>
        </ProtectedRoute>
      } />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App