export default function Button({ children, variant = 'primary', size = 'md', loading, ...props }) {
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'text-slate-600 hover:bg-slate-100',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      disabled={loading}
      className={`rounded-lg font-medium transition disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${props.className || ''}`}
      {...props}
    >
      {loading ? 'جاري...' : children}
    </button>
  )
}