import { useState, useRef, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Bell } from 'lucide-react'
import { fetchNotifications, fetchUnreadCount, markAllRead, markAsRead } from '../api/notifications'

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const queryClient = useQueryClient()

  const { data: countData } = useQuery({
    queryKey: ['unread-count'],
    queryFn: async () => {
      const res = await fetchUnreadCount()
      return res.data.count
    },
    refetchInterval: 30000,
  })

  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const res = await fetchNotifications()
      return res.data.results
    },
    enabled: open,
  })

  const markAllMut = useMutation({
    mutationFn: () => markAllRead(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['unread-count'] })
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
    },
  })

  const markOneMut = useMutation({
    mutationFn: (id) => markAsRead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['unread-count'] })
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
    },
  })

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const count = countData || 0

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="relative text-slate-500 hover:text-slate-700">
        <Bell size={22} />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-slate-200 z-50 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between p-3 border-b border-slate-100">
            <span className="font-bold text-slate-800 text-sm">الإشعارات</span>
            {count > 0 && (
              <button
                onClick={() => markAllMut.mutate()}
                className="text-xs text-emerald-600 hover:text-emerald-800"
              >
                تعليم الكل كمقروء
              </button>
            )}
          </div>
          {notifications?.length === 0 ? (
            <div className="p-6 text-center text-slate-400 text-sm">لا توجد إشعارات</div>
          ) : (
            notifications?.map((n) => (
              <div
                key={n.id}
                onClick={() => !n.is_read && markOneMut.mutate(n.id)}
                className={`p-3 border-b border-slate-50 cursor-pointer hover:bg-slate-50 ${!n.is_read ? 'bg-emerald-50/50' : ''}`}
              >
                <p className="font-medium text-slate-800 text-sm">{n.title}</p>
                <p className="text-slate-500 text-xs mt-1">{n.message}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}