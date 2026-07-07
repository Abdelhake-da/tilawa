import { Menu } from 'lucide-react'
import NotificationBell from '../../shared/NotificationBell'
import { useAuth } from '../../context/AuthContext'

export default function Header({ title, onMenuClick }) {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden text-slate-600">
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
      </div>
      <div className="flex items-center gap-4">
        <NotificationBell />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            {user?.first_name?.[0] || user?.username?.[0]?.toUpperCase()}
          </div>
          <button onClick={logout} className="text-sm text-slate-500 hover:text-red-600 hidden sm:block">
            خروج
          </button>
        </div>
      </div>
    </header>
  )
}