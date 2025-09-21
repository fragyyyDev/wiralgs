// components/CaseShowcase.tsx
'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

type Item = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    href?: string;
    tags?: string[];
};

const items: Item[] = [
    {
        id: 'palatinum',
        title: 'PALATINUM ACADEMY',
        subtitle: 'Grafická identita',
        description:
            'Vytvořili jsme kompletní vizuální identitu pro Palatinum Academy. Důraz byl kladen na moderní a profesionální vzhled, který odráží hodnoty akademie.',
        image: '/photos/palatinum.png',
        href: 'https://www.instagram.com/ppp.pavelprochazka/',
        tags: ['Reels', 'Grafika', 'Stories', "Webdesign"],
    },
    {
        id: 'lofty',
        title: 'Prezentace projektu Lofty Kolbenova',
        subtitle: 'Fotografie',
        description:
            'Pro developerský projekt Lofty Kolbenova jsme vytvořili kompletní vizuální prezentaci, která zdůraznila jedinečnou architekturu a moderní styl bydlení. Zajistili jsme fotografie, video tour i grafické materiály, které developer využil v online kampaních a prodejních materiálech. Díky atraktivní formě prezentace se podařilo zvýšit zájem a urychlit proces prodeje jednotek',
        image: '/photos/Lofty.jpg',
        href: '#',
        tags: ['Fotografie', 'Video'],
    },
];

export default function CaseShowcase() {
    return (
        <section className="w-[99%] mx-auto rounded-4xl px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
            {items.map((item, idx) => (
                <CaseBlock key={item.id} item={item} reversed={idx % 2 === 1} />
            ))}
        </section>
    );
}

function CaseBlock({ item, reversed = false }: { item: Item; reversed?: boolean }) {
    return (
        <div
            className={[
                'relative grid items-center gap-10 md:gap-14',
                'grid-cols-1 md:grid-cols-2',
                reversed ? 'md:[&>div:first-child]:order-2' : '',
                'mb-20 last:mb-0',
            ].join(' ')}
        >
            {/* IMAGE SIDE */}
            <div className="relative">
                {/* dekorativní blob */}
                <div
                    className={[
                        'absolute -z-10 h-64 w-64 rounded-[36px] blur-2xl opacity-30',
                        reversed ? 'right-0 -top-8 bg-primary/40' : 'left-0 -bottom-8 bg-pink-500/40',
                    ].join(' ')}
                />
                {/* fotka v oblé kartě */}
                <div className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            className="object-cover transition-all duration-500 group-hover:brightness-90 group-hover:scale-100"
                        />

                        {/* overlay na hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                </div>

            </div>

            {/* TEXT SIDE */}
            <div className={reversed ? 'md:pl-4' : 'md:pr-4'}>
                {item.subtitle && (
                    <p className="mb-2 inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs uppercase tracking-wider text-zinc-700">
                        {item.subtitle}
                    </p>
                )}
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-800">
                    {item.title}
                </h3>

                <p className="mt-4 text-zinc-700 text-base md:text-lg leading-relaxed">
                    {item.description}
                </p>

                {/* tagy */}
                {item.tags && item.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-zinc-100 text-zinc-800 text-xs px-3 py-1 border border-zinc-200"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-7">
                    <a
                        href={item.href ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                        Prohlédnout projekt <ArrowUpRight className="size-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
