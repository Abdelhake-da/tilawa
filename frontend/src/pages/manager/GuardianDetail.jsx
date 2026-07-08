import { useParams, useNavigate, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchGuardian, fetchGuardianChildren } from '../../api/students'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { ArrowRight, Phone, User, Calendar } from 'lucide-react'

const relationshipMap = {
  father: 'أب',
  mother: 'أم',
  grandfather: 'جد',
  grandmother: 'جدة',
  uncle: 'عم/خال',
  other: 'أخرى',
}

export default function GuardianDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: guardian, isLoading } = useQuery({
    queryKey: ['guardian', id],
    queryFn: async () => {
      const res = await fetchGuardian(id)
      return res.data
    },
  })

  const { data: children, isLoading: childrenLoading } = useQuery({
    queryKey: ['guardian-children', id],
    queryFn: async () => {
      const res = await fetchGuardianChildren(id)
      return res.data
    },
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <button
        onClick={() => navigate('/manager/guardians')}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4"
      >
        <ArrowRight size={20} />
        <span>عودة للقائمة</span>
      </button>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            {guardian?.first_name} {guardian?.last_name}
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {relationshipMap[guardian?.relationship] || guardian?.relationship}
          </p>
        </div>
        <Badge color="green">ولي أمر</Badge>
      </div>

      <Card className="p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <User size={20} className="text-slate-400" />
            <div>
              <p className="text-sm text-slate-400">اسم المستخدم</p>
              <p className="font-medium text-slate-700">{guardian?.username}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-slate-400" />
            <div>
              <p className="text-sm text-slate-400">صلة القرابة</p>
              <p className="font-medium text-slate-700">
                {relationshipMap[guardian?.relationship] || guardian?.relationship}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <h2 className="text-lg font-bold text-slate-800 mb-4">الأطفال</h2>

      {childrenLoading ? (
        <LoadingSpinner />
      ) : children?.length === 0 ? (
        <Card><EmptyState message="لا يوجد أطفال مسجلون" /></Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {children?.map((child) => (
            <Card key={child.id} className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-800">{child.name}</h3>
                <Badge color={child.is_active ? 'green' : 'red'}>
                  {child.is_active ? 'نشط' : 'متوقف'}
                </Badge>
              </div>
              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-slate-400" />
                  <span>المعلم: {child.teacher_name || 'غير محدد'}</span>
                </div>
                {child.birth_date && (
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-slate-400" />
                    <span>تاريخ الميلاد: {child.birth_date}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  <span>تاريخ التسجيل: {child.enrollment_date?.split('T')[0]}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
