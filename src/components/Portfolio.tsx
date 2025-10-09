'use client';

import React from 'react';
import { Palette, Camera, Video, Globe } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
    {
        title: 'Grafika',
        description: 'Branding, bannery, návrhy obalů i promo materiály. Vše, co buduje vizuál značky.',
        icon: <Palette className="text-primary size-6" />,
        href: '/portfolio-category/grafika',
    },
    {
        title: 'Fotky',
        description: 'Produktové, portrétní nebo lifestyle fotky. V ateliéru i v terénu.',
        icon: <Camera className="text-primary size-6" />,
        href: '/portfolio-category/fotky',
    },
    {
        title: 'Videa',
        description: 'Reels, spoty, edukativní formáty nebo YouTube série. Od scénáře po střih.',
        icon: <Video className="text-primary size-6" />,
        href: '/portfolio-category/videa',
    },
    {
        title: 'Weby',
        description: 'Tvoříme moderní weby, které prodávají. UX, vývoj, animace i optimalizace.',
        icon: <Globe className="text-primary size-6" />,
        href: '/portfolio-category/weby',
    },
];

const Portfolio = () => {
    return (
        <section className="w-full mx-auto rounded-4xl px-4 py-14 sm:px-6 lg:px-10 xl:px-16 mt-16">
            {/* Úvod */}
            <div className="flex flex-col items-start gap-4 mb-10">
                <p className="px-3 py-2.5 rounded-full text-primary border-2 border-primary tracking-tight">
                    NAŠE TVORBA
                </p>

                <h2 className="text-4xl md:text-5xl font-medium uppercase leading-tight text-black anton">
                    Portfolio <span className="text-primary">projektů</span>, které mluví za nás
                </h2>

                <p className="text-lg text-black/80 max-w-3xl">
                    Věříme v sílu dobré kreativy a konzistentního výstupu. Ať už jde o grafiku, video
                    nebo web, vše tvoříme na míru vašemu cíli.
                </p>
            </div>

            {/* Kategoriální grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {portfolioItems.map((item, index) => (
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

            {/* CTA (volitelné) */}
            <div className="mt-12">
                <Link
                    href="/portfolio"
                    className="inline-block px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                    Zobrazit celé portfolio
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;
