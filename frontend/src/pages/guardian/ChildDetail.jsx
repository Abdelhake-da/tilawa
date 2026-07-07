import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchStudent } from '../../api/students'
import { fetchAttendanceByStudent } from '../../api/attendance'
import { fetchMemorizationByStudent, fetchReviewsByStudent, fetchNotesByStudent } from '../../api/quran'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { ArrowRight } from 'lucide-react'

const qualityLabel = (val) => {
  const map = { excellent: 'ممتاز', good: 'جيد', needs_repeat: 'يحتاج تكرار' }
  return map[val] || val
}

const tabs = [
  { key: 'attendance', label: 'الحضور' },
  { key: 'memorization', label: 'الحفظ' },
  { key: 'reviews', label: 'المراجعة' },
  { key: 'notes', label: 'الملاحظات' },
]

export default function ChildDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('attendance')

  const { data: student, isLoading } = useQuery({
    queryKey: ['student', id],
    queryFn: async () => {
      const res = await fetchStudent(id)
      return res.data
    },
  })

  const { data: attendance } = useQuery({
    queryKey: ['attendance', id],
    queryFn: async () => {
      const res = await fetchAttendanceByStudent(id)
      return res.data.results
    },
  })

  const { data: memorization } = useQuery({
    queryKey: ['memorization', id],
    queryFn: async () => {
      const res = await fetchMemorizationByStudent(id)
      return res.data.results
    },
  })

  const { data: reviews } = useQuery({
    queryKey: ['reviews', id],
    queryFn: async () => {
      const res = await fetchReviewsByStudent(id)
      return res.data.results
    },
  })

  const { data: notes } = useQuery({
    queryKey: ['notes', id],
    queryFn: async () => {
      const res = await fetchNotesByStudent(id)
      return res.data.results
    },
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <button
        onClick={() => navigate('/guardian/dashboard')}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4"
      >
        <ArrowRight size={20} />
        <span>عودة</span>
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold">
          {student?.name?.charAt(0)}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{student?.name}</h1>
          <p className="text-slate-500 text-sm mt-1">
            المعلم: {student?.teacher_name || '—'}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
              activeTab === t.key
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'attendance' && (
        <Card className="p-5">
          {attendance?.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">لا توجد سجلات حضور</p>
          ) : (
            <div className="space-y-2">
              {attendance?.map((a) => (
                <div key={a.id} className="p-3 rounded-lg bg-slate-50 flex justify-between items-center">
                  <span className="text-sm text-slate-700">{a.date}</span>
                  <div className="flex gap-3 text-sm">
                    <span className="text-slate-600">دخل: {a.check_in_time || '—'}</span>
                    <span className="text-slate-600">خرج: {a.check_out_time || '—'}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {activeTab === 'memorization' && (
        <Card className="p-5">
          {memorization?.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">لا توجد سجلات حفظ</p>
          ) : (
            <div className="space-y-2">
              {memorization?.map((m) => (
                <div key={m.id} className="p-3 rounded-lg bg-slate-50">
                  <p className="font-medium text-slate-700 text-sm">
                    {m.surah_name} ({m.from_ayah}-{m.to_ayah})
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-400">{m.date}</span>
                    <Badge color={m.quality === 'excellent' ? 'green' : m.quality === 'good' ? 'blue' : 'amber'}>
                      {qualityLabel(m.quality)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {activeTab === 'reviews' && (
        <Card className="p-5">
          {reviews?.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">لا توجد سجلات مراجعة</p>
          ) : (
            <div className="space-y-2">
              {reviews?.map((r) => (
                <div key={r.id} className="p-3 rounded-lg bg-slate-50">
                  <p className="font-medium text-slate-700 text-sm">{r.content}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-400">{r.date}</span>
                    <Badge color={r.quality === 'excellent' ? 'green' : r.quality === 'good' ? 'blue' : 'amber'}>
                      {qualityLabel(r.quality)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {activeTab === 'notes' && (
        <Card className="p-5">
          {notes?.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">لا توجد ملاحظات</p>
          ) : (
            <div className="space-y-2">
              {notes?.map((n) => (
                <div key={n.id} className="p-3 rounded-lg bg-slate-50">
                  <p className="text-slate-700 text-sm">{n.content}</p>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {n.created_at?.split('T')[0]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}
    </div>
  )
}