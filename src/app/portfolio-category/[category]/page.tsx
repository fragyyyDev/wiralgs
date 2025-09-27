// app/portfolio/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 pt-20 pb-32 space-y-16">
      {/* Zpět */}
      <Link
        href="/portfolio"
        className="inline-flex items-center text-sm text-primary hover:underline"
      >
        <ArrowLeft size={16} className="mr-1" />
        Zpět na portfolio
      </Link>

      {/* Hero obrázek */}
      <div className="w-full rounded-3xl overflow-hidden shadow-sm">
        <Image
          src={project.cover}
          alt={project.title}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Info blok */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        <div className="flex-1 space-y-6">
          <p className="px-3 py-2.5 rounded-full text-primary border-2 border-primary w-fit text-sm tracking-tight">
            DETAIL PROJEKTU
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
            {project.title}
          </h1>
          <p className="text-lg text-black/80">{project.description}</p>

          {project.website && (
            <Link
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary underline"
            >
              Navštívit web <ExternalLink size={16} />
            </Link>
          )}
        </div>

        {/* Tagy */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Galerie */}
      {project.gallery?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.gallery.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-zinc-200"
            >
              <Image
                src={img}
                alt={`${project.title} – ukázka ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Reference (testimonial) */}
      {project.testimonial && (
        <div className="mt-16 max-w-2xl mx-auto border border-zinc-200 bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={project.testimonial.authorImage}
              alt={project.testimonial.authorName}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-black leading-tight">
                {project.testimonial.authorName}
              </p>
              <p className="text-sm text-zinc-500">
                {project.testimonial.authorHandle}
              </p>
            </div>
          </div>
          <p className="text-black/90 leading-relaxed text-base mb-4">
            “{project.testimonial.text}”
          </p>
          {project.testimonial.attachedImage && (
            <div className="mt-4 rounded-xl overflow-hidden border border-zinc-100">
              <Image
                src={project.testimonial.attachedImage}
                alt="Reference"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="pt-12">
        <Link
          href="/kontakt"
          className="inline-block px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Chci podobný projekt
        </Link>
      </div>
    </section>
  );
}
