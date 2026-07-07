export default function EmptyState({ message }) {
  return (
    <div className="text-center py-12 text-slate-400">
      <p>{message || 'لا توجد بيانات'}</p>
    </div>
  )
}