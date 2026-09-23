export default function ThemeVideo() {
  return (
    <div className="mb-12">
      <video
        className="w-full h-auto rounded-md"
        src="/videos/portfolio-feature-1080p.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
    </div>
  )
}
