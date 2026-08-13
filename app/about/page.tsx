import Image from 'next/image'
import ProfileDetails from 'app/components/profile-details'

export const metadata = {
  title: 'About',
  description: 'Design-led product lead, based in Berlin. 15 years in digital products, taking things from opportunity to release and prototyping in code.',
}

export default function AboutPage() {
  return (
    <section className="max-w-xl mx-4 mt-6 lg:mx-auto px-2 md:px-0">
      <h1 className="text-2xl font-semibold mb-1">Sebastian Anders</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        Design-led Product Lead · Berlin
      </p>

      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        Design-led product lead. I take products from opportunity to release — discovery, roadmap, requirements, alignment with executives and engineering — and prototype in code so specifications are testable and estimates are grounded. B2B and B2C, currently focused on AI product surfaces.
      </p>

      <ProfileDetails />

      <Image
        src="/images/profile_image.jpg"
        alt="Sebastian Anders"
        width={800}
        height={1200}
        className="w-full h-auto"
        priority
      />
    </section>
  )
}
