'use client'

import { useState } from 'react'

interface DismissibleInfoBoxProps {
  children: React.ReactNode
}

export function DismissibleInfoBox({ children }: DismissibleInfoBoxProps) {
  const [showInfoBox, setShowInfoBox] = useState(true)

  if (!showInfoBox) return null

  return (
    <div className="mb-8 p-4 bg-neutral-10 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg relative">
      <button
        onClick={() => setShowInfoBox(false)}
        className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 w-6 h-6 flex items-center justify-center"
        aria-label="Close info box"
      >
        ×
      </button>
      <div className="pr-8">
        {children}
      </div>
    </div>
  )
}