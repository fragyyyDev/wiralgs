'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Palette,
    Camera,
    Video,
    Globe,
    ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

// Kategorie portfolia
const categories = [
    {
        title: 'Grafika',
        description: 'Branding, bannery, obaly, sociální sítě.',
        icon: <Palette className="text-primary size-6" />,
        href: '/portfolio/grafika',
    },
    {
        title: 'Fotky',
        description: 'Produktové, portrétní i lifestyle fotografie.',
        icon: <Camera className="text-primary size-6" />,
        href: '/portfolio/fotky',
    },
    {
        title: 'Videa',
        description: 'Spoty, Reels, YouTube videa, edukační obsah.',
        icon: <Video className="text-primary size-6" />,
        href: '/portfolio/videa',
    },
    {
        title: 'Weby',
        description: 'Moderní weby s důrazem na UX a výkon.',
        icon: <Globe className="text-primary size-6" />,
        href: '/portfolio/weby',
    },
];

// Top projekty – můžeš upravit / dynamizovat později
const topProjects = [
    {
        title: 'Martini Professional',
        description: 'B2B e-shop pro cukrářské suroviny (Next.js, Stripe)',
        image: '/photos/portfolio/martini.png',
        href: '/portfolio/martini-professional',
        tags: ['Web', 'Next.js', 'E-commerce'],
    },
    {
        title: 'DH Tattoo',
        description: 'Web + focení pro tatéra Davida Hasmundu.',
        image: '/photos/portfolio/dh.png',
        href: '/portfolio/dh-tattoo',
        tags: ['Web', 'Foto', 'Design'],
    },
    {
        title: 'Studyzone.cz',
        description: 'Edu platforma pro přípravu na přijímačky.',
        image: '/photos/portfolio/studyzone.png',
        href: '/portfolio/studyzone',
        tags: ['Web', 'Branding', 'Marketing'],
    },
];

const PortfolioPage = () => {
    return (
        <>
            <Navbar/>
            <section className="w-full mx-auto rounded-4xl px-4 py-14 sm:px-6 lg:px-10 xl:px-16 mt-16 space-y-16">
                {/* Úvod */}
                <div className="flex flex-col gap-4">
                    <p className="px-3 py-2.5 rounded-full text-primary border-2 border-primary w-fit tracking-tight">
                        NAŠE PRÁCE
                    </p>

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
                        Projekty, na které jsme <span className="text-primary">hrdí</span>
                    </h1>

                    <p className="text-lg text-black/80 max-w-3xl">
                        Od designu po vývoj. Od focení po storytelling. Zde najdete ukázky naší práce rozdělené
                        do přehledných kategorií. Každý projekt je tvořený na míru klientovi a jeho cíli.
                    </p>
                </div>

                {/* Kategorie */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {categories.map((item, index) => (
                        <Link
                            href={item.href}
                            key={index}
                            className="group border border-zinc-200 bg-primary/5 rounded-3xl p-6 md:p-8 hover:bg-primary/10 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <p className="text-lg font-semibold text-black group-hover:text-primary transition-colors">
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-zinc-700 mt-1">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Vybrané projekty */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-semibold text-black">Vybrané projekty</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {topProjects.map((project, index) => (
                            <Link
                                href={project.href}
                                key={index}
                                className="group border border-zinc-200 bg-white rounded-3xl overflow-hidden hover:shadow-md transition"
                            >
                                <div className="w-full aspect-[4/3] relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 flex flex-col gap-2">
                                    <p className="text-lg font-semibold text-black group-hover:text-primary transition-colors">
                                        {project.title}
                                    </p>
                                    <p className="text-sm text-zinc-600">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 pt-1">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* CTA (volitelné) */}
                    <div className="pt-6">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                            Máte zájem o spolupráci? <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioPage;
