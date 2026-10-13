import { projects, site } from '../../config/site'
import { ClipReveal, Eyebrow, Photo, Reveal } from '../ui/primitives'

export function Story() {
  const tanks = projects.find((p) => p.slug === 'jojo-tanks')!
  return (
    <section aria-labelledby="story-title" className="bg-mist-50 py-24 sm:py-32">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Eyebrow>Who we are</Eyebrow>
          <h2 id="story-title" className="sr-only">
            Our story
          </h2>
          <Reveal>
            <p className="drop-cap mt-8 text-xl leading-relaxed text-navy-950 sm:text-2xl sm:leading-relaxed">
              Plumb It Right CPT provides plumbing maintenance and specialises in electrical and solar geyser
              installations. With a focus on responsive communication and quality workmanship, the business helps
              homes and properties across Cape Town with their plumbing and geyser needs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">
              In its own words, it’s a team of{' '}
              <strong className="font-semibold text-navy-950">{site.team.text}</strong> ready to assist, with recent jobs from {site.location.area} to
              Maitland, Tokai and Kuils River.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 grid gap-6 border-t border-navy-950/10 pt-6 sm:grid-cols-3">
              <div>
                <dt className="label text-steel-500">Based in</dt>
                <dd className="mt-1.5 font-display text-lg leading-snug font-bold text-navy-950">
                  {site.location.suburb}, {site.location.area}
                </dd>
              </div>
              <div>
                <dt className="label text-steel-500">Speciality</dt>
                <dd className="mt-1.5 font-display text-lg leading-snug font-bold text-navy-950">
                  Electric &amp; solar geysers
                </dd>
              </div>
              <div>
                <dt className="label text-steel-500">Working across</dt>
                <dd className="mt-1.5 font-display text-lg leading-snug font-bold text-navy-950">
                  {site.serviceArea.label}
                </dd>
              </div>
            </dl>
          </Reveal>


        </div>

        <figure className="relative lg:col-span-5 lg:col-start-8">
          <ClipReveal className="aspect-[4/5] rounded-[1.75rem] rounded-tr-[9rem]">
            <Photo {...tanks.images[0]} sizes="(min-width: 1024px) 460px, 92vw" className="size-full object-cover" />
          </ClipReveal>

          <figcaption className="label mt-4 text-right text-steel-500">
            {tanks.title} · {tanks.place} · {tanks.date}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
