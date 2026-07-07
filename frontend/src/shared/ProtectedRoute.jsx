import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, roles }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  // Still checking authentication — show loading
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-slate-500">جاري التحميل...</div>
      </div>
    )
  }

  // Not logged in — redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Logged in but wrong role — redirect to their dashboard
  if (roles && !roles.includes(user.role)) {
    const dashboardMap = {
      manager: '/manager',
      teacher: '/teacher',
      guardian: '/guardian',
    }
    return <Navigate to={dashboardMap[user.role]} replace />
  }

  // All good — render the page
  return children
}