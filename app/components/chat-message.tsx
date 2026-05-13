type MessageProps = {
  role: 'user' | 'assistant'
  content: string
}

export function ChatMessage({ role, content }: MessageProps) {
  if (role === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[80%] rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black px-4 py-3">
          <p className="text-sm">{content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[80%] rounded-lg bg-neutral-50 dark:bg-neutral-950 px-4 py-3">
        <p className="text-sm text-neutral-800 dark:text-neutral-200 whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  )
}
