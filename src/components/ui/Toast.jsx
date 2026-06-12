import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ toasts, removeToast }) {
  return (
    <div
      className="fixed top-6 right-4 z-[200] flex flex-col gap-3 pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({ toast, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = toast.type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="pointer-events-auto flex items-start gap-3 min-w-[280px] max-w-sm px-4 py-3 rounded-2xl border shadow-xl"
      style={{
        background: isSuccess
          ? 'linear-gradient(135deg,rgba(236,253,245,0.98),rgba(209,250,229,0.98))'
          : 'linear-gradient(135deg,rgba(255,241,242,0.98),rgba(254,226,226,0.98))',
        borderColor: isSuccess ? '#86efac' : '#fca5a5',
      }}
    >
      {isSuccess ? (
        <CheckCircle size={20} className="text-emerald-500 mt-0.5 shrink-0" />
      ) : (
        <XCircle size={20} className="text-rose-500 mt-0.5 shrink-0" />
      )}
      <div className="flex-1">
        <p className={`text-sm font-semibold ${isSuccess ? 'text-emerald-800' : 'text-rose-800'}`}>
          {toast.title}
        </p>
        {toast.message && (
          <p className={`text-xs mt-0.5 ${isSuccess ? 'text-emerald-600' : 'text-rose-600'}`}>
            {toast.message}
          </p>
        )}
      </div>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
        <X size={16} />
      </button>
    </motion.div>
  )
}
