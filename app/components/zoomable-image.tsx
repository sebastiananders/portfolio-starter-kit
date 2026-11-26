'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type ZoomableImageProps = React.ComponentProps<'img'> & {
  // true for the MDX <Image> component (next/image), false for markdown images
  optimized?: boolean
}

function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [actualSize, setActualSize] = useState(false)
  const [canZoom, setCanZoom] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'

    return () => {
      root.style.overflow = previousOverflow
      if (dialog?.open) dialog.close()
    }
  }, [])

  function close() {
    // Close the modal first so focus can move back to the page
    const dialog = dialogRef.current
    if (dialog?.open) dialog.close()
    onClose()
  }

  function checkZoom() {
    const img = imgRef.current
    if (!img) return
    // Offer 100% view only when the original is bigger than what fits on screen
    setCanZoom(
      img.naturalWidth > img.clientWidth + 1 ||
        img.naturalHeight > img.clientHeight + 1
    )
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={alt || 'Enlarged image'}
      onCancel={(event) => {
        event.preventDefault()
        close()
      }}
      onClick={(event) => {
        if (event.target !== imgRef.current) close()
      }}
      className="fixed inset-0 m-0 h-full border-0 max-h-none w-full max-w-none overflow-auto bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
    >
      <div
        className={
          actualSize
            ? 'flex min-h-full min-w-max items-center justify-center p-4'
            : 'flex h-full w-full items-center justify-center p-4 sm:p-10'
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={checkZoom}
          onClick={() => {
            if (canZoom || actualSize) setActualSize((value) => !value)
            else close()
          }}
          className={
            actualSize
              ? 'max-w-none cursor-zoom-out rounded-lg'
              : `max-h-full max-w-full rounded-lg object-contain shadow-2xl ${
                  canZoom ? 'cursor-zoom-in' : 'cursor-default'
                }`
          }
        />
      </div>
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        autoFocus
        className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </dialog>
  )
}

export function ZoomableImage({
  optimized = false,
  src,
  alt = '',
  className,
  ...props
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  if (!src) return null

  function close() {
    setOpen(false)
    // Return keyboard focus to the image that opened the popup
    triggerRef.current?.focus({ preventScroll: true })
  }

  // next/image keeps its rounded corners; markdown images keep their own styling
  const imageClassName = optimized
    ? ['rounded-lg', className].filter(Boolean).join(' ')
    : className

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={alt ? `Enlarge image: ${alt}` : 'Enlarge image'}
        className="block max-w-full cursor-zoom-in rounded-lg border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      >
        {optimized ? (
          <Image
            src={src}
            alt={alt}
            className={imageClassName}
            {...(props as Omit<
              React.ComponentProps<typeof Image>,
              'src' | 'alt' | 'className'
            >)}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className={imageClassName} {...props} />
        )}
      </button>
      {open &&
        createPortal(
          <Lightbox src={src} alt={alt} onClose={close} />,
          document.body
        )}
    </>
  )
}
