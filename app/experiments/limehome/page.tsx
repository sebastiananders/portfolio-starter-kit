import Image from 'next/image'

export const metadata = {
  title: 'Limehome — In-room TV prototype',
  description:
    'An exploratory prototype for the in-room TV in limehome apartments: no menu, content indexed by stay phase, and a screen that behaves like a lamp before it behaves like a display.',
}

export default function LimehomePage() {
  return (
    <article className="max-w-3xl mx-4 mt-6 lg:mx-auto px-2 md:px-0 pb-24">
      <div className="mb-10 -mx-2 md:mx-0">
        <video
          className="w-full h-auto rounded-md"
          src="/videos/limehome/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>

      <header className="mb-12">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Experiment · In-room TV
        </p>
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Limehome
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          An exploratory prototype for the in-room TV in limehome apartments —
          unmanned serviced apartments, app-based check-in, no reception. Not a
          funded brief; a conversation with a friend on the operations side that
          turned into something worth arguing about in a room.
        </p>
        <a
          href="https://limehome-prototype.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-full px-6 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          Open the live prototype <span aria-hidden>→</span>
        </a>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Two theses
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
          <strong className="text-neutral-900 dark:text-neutral-100">
            The screen has no menu — content is indexed by stay phase.
          </strong>{' '}
          Hotel TVs default to categories (Services / Explore / Info / TV). What
          a guest needs is almost entirely determined by <em>when</em> it is:
          hours since check-in, time of day, nights remaining. So the surface is
          a state machine, and the most-needed thing is already the largest
          object on screen. The guest never navigates to find it.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <strong className="text-neutral-900 dark:text-neutral-100">
            A TV in a bedroom is a lamp before it is a display.
          </strong>{' '}
          There is no fixed background. The surface warms and cools with the
          hour and recedes at night. That's what makes "not a black box" a real
          property rather than decoration.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          The prototype
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Built in React + Vite, designed at literal 1920×1080 inside a
          transform-scaled stage so the prototype is pixel-accurate to the real
          panel. Below is the resting-state curve — live content, then settling,
          then receding as the room quiets down. Twenty minutes to fade, instant
          to wake, and a slow burn-in drift on two incommensurate sine periods
          so the surface reads as breathing rather than frozen.
        </p>
        <div className="-mx-2 md:mx-0">
          <video
            className="w-full h-auto rounded-md"
            src="/videos/limehome/screen.mov"
            controls
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Hard rules
        </h2>
        <ul className="text-neutral-700 dark:text-neutral-300 space-y-3 leading-relaxed list-disc pl-5">
          <li>
            Never get between the guest and their own Netflix. The path to
            streaming is the first affordance, always.
          </li>
          <li>
            Wipe all streaming logins at checkout — privacy obligation and a
            real complaint driver.
          </li>
          <li>No sound. Ever. No autoplay video, no welcome sting.</li>
          <li>
            Never display the guest's name in large type, and never the door
            code. Ground-floor units have windows; cleaners see the screen
            between stays.
          </li>
          <li>
            Never pure white text after dark. Warm it and drop contrast — don't
            just drop opacity.
          </li>
          <li>
            One offer, one moment. The only upsell is late checkout, on
            departure morning.
          </li>
          <li>
            No static high-contrast element in a fixed position. Burn-in across
            a fleet nobody services is permanent damage.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Stay-phase surface
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          Arrival shows Wi-Fi at maximum size — the guest's phone just dropped
          off roaming and everything else depends on it. Evening shrinks Wi-Fi
          to a line and surfaces what's still open to eat. Night is the hour,
          dimmed to something legible from the bed. Departure is checkout, one
          offer, and no other pressure.
        </p>
        <div className="-mx-2 md:mx-0">
          <Image
            src="/images/limehome/mood.png"
            alt="Limehome in-room TV mood frame"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-md"
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
