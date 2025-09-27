import CustomMarkdown from '@/components/CustomMarkdown';
import Navbar from '@/components/Navbar';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <Navbar />
      <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 pt-20 pb-32 space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <p className="px-3 py-2.5 rounded-full text-primary border-2 border-primary w-fit tracking-tight text-sm uppercase">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            {project.title}
          </h1>
          <p className="text-zinc-600 max-w-2xl">{project.description}</p>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200"
              >
                <Image
                  src={img}
                  alt={`Obrázek ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Markdown content */}
        {
          project.content && (
            <article className="max-w-3xl">
              <CustomMarkdown content={project.content} />
            </article>
          )}
      </section>
    </>
  );
}
