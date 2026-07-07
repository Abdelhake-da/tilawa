import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, GraduationCap, ArrowLeftRight, Wallet, Award, X } from 'lucide-react'

const menuItems = {
  manager: [
    { to: '/manager/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { to: '/manager/teachers', label: 'المعلمون', icon: GraduationCap },
    { to: '/manager/students', label: 'الطلاب', icon: Users },
    { to: '/manager/transfers', label: 'طلبات النقل', icon: ArrowLeftRight },
    { to: '/manager/payments', label: 'المدفوعات', icon: Wallet },
    { to: '/manager/certificates', label: 'الشهادات', icon: Award },
  ],
  teacher: [
    { to: '/teacher/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { to: '/teacher/students', label: 'الطلاب', icon: Users },
    { to: '/teacher/payments', label: 'المدفوعات', icon: Wallet },
  ],
  guardian: [
    { to: '/guardian/dashboard', label: 'أطفالي', icon: LayoutDashboard },
    { to: '/guardian/certificates', label: 'الشهادات', icon: Award },
  ],
}

export default function Sidebar({ role, open, onClose }) {
  const items = menuItems[role] || []

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside className={`fixed right-0 top-0 w-64 h-screen bg-emerald-900 text-white z-50
        transform transition-transform lg:translate-x-0
        ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-5 border-b border-emerald-800">
          <h1 className="text-xl font-bold">تلاوة</h1>
          <button onClick={onClose} className="lg:hidden text-emerald-300">
            <X size={20} />
          </button>
        </div>
        <nav className="p-3 space-y-1">
          {items.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${isActive ? 'bg-emerald-700 text-white' : 'text-emerald-100 hover:bg-emerald-800'}`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}