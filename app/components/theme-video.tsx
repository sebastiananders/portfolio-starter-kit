export default function ThemeVideo() {
  const shared = "w-full h-auto rounded-md"
  return (
    <div className="mb-12">
      <video
        className={`${shared} block dark:hidden`}
        src="/videos/bright.mov"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <video
        className={`${shared} hidden dark:block`}
        src="/videos/dark.mov"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
    </div>
  )
}
