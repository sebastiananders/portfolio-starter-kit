export const metadata = {
  title: 'Greek — Plan the camera before you spend on video gen',
  description:
    'Blocking, camera and timing built cheaply in Blender with Claude via the Higgsfield Bridge, then handed to AI video generation as a shot the model has to follow exactly.',
}

export default function GreekPage() {
  return (
    <article className="max-w-3xl mx-4 mt-6 lg:mx-auto px-2 md:px-0 pb-24">
      <div className="mb-10 -mx-2 md:mx-0">
        <video
          className="w-full h-auto rounded-md"
          src="/videos/greek/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>

      <header className="mb-10">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Experiment · Previz
        </p>
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Greek
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          AI video generation is the expensive step. Every regeneration to fix
          a bad angle, off timing, or a subject drifting out of frame burns
          credits and minutes. So don't discover the shot inside the video
          model — plan it cheaply in Blender first, then hand the model a
          previz it has to follow.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Build the scene and camera with Claude in Blender
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          The Higgsfield Bridge exposes Blender as callable tools — add
          primitives, set transforms, place cameras and lights, keyframe
          motion, run arbitrary <code>bpy</code>. That means Claude can build
          the scene: block out geometry, stage the actors, place the camera,
          set the lens, animate the dolly, key the timing. All of it is
          deterministic, all of it is free to iterate on, and none of it costs
          a single video-gen token.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Below is the scene coming together: greybox environment, staged
          characters, and the camera move for the dialogue beat — assembled
          conversationally, adjusted until the shot reads.
        </p>
        <div className="-mx-2 md:mx-0">
          <video
            className="w-full h-auto rounded-md"
            src="/videos/greek/blender.mov"
            controls
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Hand the shot to the model as a contract
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          Once the blockout is locked, the Blender render becomes the reference
          the video model has to honor. Framing, camera path, action beats,
          duration — all decided already. The AI doesn't get to reinvent the
          shot; it gets to dress it. That flips the economics: instead of
          spending tokens to search for the right composition, you spend them
          once, on execution of a composition you've already validated.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Twenty seconds of previz below — entrance, dialogue beat, reaction,
          out — the exact shot the Blender scene defined, generated in a
          single pass.
        </p>
        <div className="-mx-2 md:mx-0">
          <video
            className="w-full h-auto rounded-md"
            src="/videos/greek/previz_dialogue_20s.mp4"
            controls
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section>
        <a
          href="/experiments"
          className="text-sm font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
        >
          ← Back to experiments
        </a>
      </section>
    </article>
  )
}
