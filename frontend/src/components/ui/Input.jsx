export default function Input({ label, error, ...props }) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      )}
      <input
        className={`w-full px-4 py-2.5 rounded-lg border outline-none transition
          ${error ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200'}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}