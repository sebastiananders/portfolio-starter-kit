'use client'

interface SegmentedControlProps {
  value: string
  onChange: (value: string) => void
  options: {
    value: string
    label: string
  }[]
}

export function SegmentedControl({ value, onChange, options }: SegmentedControlProps) {
  return (
    <div className="inline-flex p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-3 py-1.5 text-sm rounded-md transition-all ${
            value === option.value
              ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}