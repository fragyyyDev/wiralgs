// components/CardCase.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Youtube, Music } from 'lucide-react';
import { useState } from 'react';

type CardCaseProps = {
    href: string;
    imageSrc: string;
    imageAlt: string;
    brandLogoSrc?: string;
    brandLogoAlt?: string;
    brandName?: string;
    title: string;
    isExternal?: boolean;

    // volitelné metriky – zobrazí se jen pokud je předáš
    instagramFollowers?: number | string;
    spotifyFollowers?: number | string;
    youtubeSubscribers?: number | string;
};

export default function CardCase({
    href,
    imageSrc,
    imageAlt,
    brandLogoSrc,
    brandLogoAlt,
    brandName,
    title,
    isExternal,
    instagramFollowers,
    spotifyFollowers,
    youtubeSubscribers,
}: CardCaseProps) {
    const [hovered, setHovered] = useState(false);

    const isExt =
        typeof isExternal === 'boolean' ? isExternal : /^https?:\/\//i.test(href);

    const Wrapper: React.ElementType = isExt ? 'a' : Link;
    const wrapperProps = isExt
        ? { href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': title }
        : { href, 'aria-label': title };

    const wrapperClass =
        [
            'block relative overflow-hidden',
            'rounded-[32px] md:rounded-[40px]',
            'bg-white/60 dark:bg-white/5',
            'ring-1 ring-black/5 dark:ring-white/10',
            'shadow-[0_12px_34px_-12px_rgba(0,0,0,0.35)]',
            'transition-all duration-300',
            'hover:shadow-[0_22px_46px_-12px_rgba(0,0,0,0.45)] hover:-translate-y-[2px]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30',
        ].join(' ');

    const fmt = (v: number | string | undefined) => {
        if (v === undefined || v === null || v === '') return '';
        if (typeof v === 'string') return v;
        if (v < 1000) return `${v}`;
        if (v < 1_000_000) return `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}k`;
        return `${(v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1)}M`;
    };

    const hasStats =
        !!instagramFollowers || !!spotifyFollowers || !!youtubeSubscribers;

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Wrapper  {...(wrapperProps as any)} className={`relative`}>
            {/* badge v rohu wrapperu */}
            <span
                className="
          absolute top-6 right-6 z-20
          inline-flex h-10 w-10 items-center justify-center translate-y-1/4 -translate-x-1/4
          rounded-full text-white
          bg-primary
          ring-1 ring-white/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]
        "
            >
                <ArrowUpRight size={20} />
            </span>

            {/* gutter kolem obsahu (zajistí prostor u zaoblených rohů) */}
            <div
                className="p-3 sm:p-4"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* media box s větším radiusem */}
                <div className="relative w-full aspect-[3/4] min-h-[420px] overflow-hidden rounded-[28px] md:rounded-[36px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className={`object-cover transition-transform duration-500`}
                        priority={false}
                    />

                    {/* jemný top sheen (ponecháme) */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.55),transparent)]" />

                    {/* PRIMARY gradient odspodu ~ třetina výšky, lehký */}
                    <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/55 via-primary/30 to-transparent`} />

                    {/* spodní čitelnostní „černý“ jemně zredukovaný (přes primary) */}
                    <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/55 via-black/30 to-transparent" />

                    <div className="absolute "></div>
                    {/* obsah dole */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <div className="flex items-center gap-3 mb-2">
                            {brandLogoSrc ? (
                                <Image
                                    src={brandLogoSrc}
                                    alt={brandLogoAlt ?? brandName ?? 'brand'}
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 rounded-full object-contain bg-white/80 p-[2px] ring-1 ring-white/60"
                                />
                            ) : (
                                <div className=""></div>
                            )}
                            {brandName ? (
                                <span className="text-white/95 font-semibold tracking-wide text-base">
                                    {brandName}
                                </span>
                            ) : null}
                        </div>
                        <h3 className="text-white font-semibold leading-tight text-xl md:text-[22px] my-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                            {title}
                        </h3>
                        {/* sociální statistiky – jen pokud něco je */}
                        {hasStats && (
                            <div className="flex flex-col gap-2 text-white/90 text-sm mb-2">
                                {instagramFollowers && (
                                    <span className="inline-flex items-center gap-1.5">
                                        <Instagram size={16} />
                                        {fmt(instagramFollowers)}
                                    </span>
                                )}
                                {spotifyFollowers && (
                                    <span className="inline-flex items-center gap-1.5">
                                        <Music size={16} />
                                        {fmt(spotifyFollowers)}
                                    </span>
                                )}
                                {youtubeSubscribers && (
                                    <span className="inline-flex items-center gap-1.5">
                                        <Youtube size={16} />
                                        {fmt(youtubeSubscribers)}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
