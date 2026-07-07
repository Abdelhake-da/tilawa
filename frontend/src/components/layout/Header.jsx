import { Menu, Bell } from 'lucide-react'
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
        <button className="relative text-slate-500 hover:text-slate-700">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">3</span>
        </button>
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