'use client';

import Link from 'next/link';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Refs
    const desktopLinksRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileLinksRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const prevFocusedRef = useRef<HTMLElement | null>(null);

    const links = [
        { href: '/', label: 'Domů' },
        { href: '/#investice', label: 'Spočítat investici' },
        { href: '/#portfolio', label: 'Portfolio' },
        { href: '/#o-nas', label: 'O nás' },
        { href: '/#kontakt', label: 'Kontakt' },
    ];

    const prefersReduced = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    // Desktop animace odkazů
    useLayoutEffect(() => {
        if (!desktopLinksRef.current || prefersReduced) return;

        const ctx = gsap.context(() => {
            const items = desktopLinksRef.current!.querySelectorAll('a[data-desktop="true"]');
            gsap.fromTo(
                items,
                { y: -40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
            );
        }, desktopLinksRef);

        return () => ctx.revert();
    }, [prefersReduced]);

    // Mobile timeline
    useLayoutEffect(() => {
        if (!mobileMenuRef.current || !overlayRef.current || !mobileLinksRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(mobileMenuRef.current, { xPercent: 100 });
            gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: 'none' });

            const items = mobileLinksRef.current!.querySelectorAll('a');

            const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

            tl.to(overlayRef.current, { autoAlpha: 1, pointerEvents: 'auto', duration: 0.2 }, 0)
                .to(mobileMenuRef.current, { xPercent: 0, duration: 0.4 }, 0)
                .from(items, { y: 24, opacity: 0, duration: 0.35, stagger: 0.08 }, 0.05);

            tl.eventCallback('onReverseComplete', () => {
                if (overlayRef.current) gsap.set(overlayRef.current, { pointerEvents: 'none' });
                if (mobileMenuRef.current) gsap.set(mobileMenuRef.current, { xPercent: 100 });
            });

            tlRef.current = tl;
        });

        return () => {
            ctx.revert();
            tlRef.current = null;
        };
    }, []);

    // Ovládání otevření / zavření + fokus + scroll lock
    useEffect(() => {
        if (open) {
            prevFocusedRef.current = (document.activeElement as HTMLElement) ?? null;
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            prevFocusedRef.current?.focus?.();
        }

        if (tlRef.current) {
            if (prefersReduced) {
                gsap.set(overlayRef.current, {
                    autoAlpha: open ? 1 : 0,
                    pointerEvents: open ? 'auto' : 'none',
                });
                gsap.set(mobileMenuRef.current, { xPercent: open ? 0 : 100 });
            } else {
                open ? tlRef.current.play(0) : tlRef.current.reverse();
            }
        }

        if (open) {
            const first = mobileLinksRef.current?.querySelector('a') as HTMLElement | null;
            if (first) setTimeout(() => first.focus(), 50);
        }
    }, [open, prefersReduced]);

    // ESC zavírá
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <nav className="w-full h-20 bg-transparent relative z-30" role="navigation" aria-label="Main">
            {/* Grid: [1fr | auto | 1fr] => střed je vždy perfektně uprostřed */}
            <div className="h-full w-full px-4 sm:px-6 lg:px-10 xl:px-16">
                <div
                    className="
    h-full grid items-center
    grid-cols-2 md:grid-cols-[1fr_auto_1fr]
  "
                >
                    {/* Levý sloupec: logo */}
                    <div className="justify-self-start min-w-0">
                        <Link href="/" prefetch={false} className="inline-flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={150}
                                height={50}
                                priority
                                className="h-auto w-auto"
                            />
                        </Link>
                    </div>

                    {/* Prostřední sloupec: odkazy (vždy přesně uprostřed) */}
                    <div
                        ref={desktopLinksRef}
                        className="hidden md:flex items-center gap-8 justify-self-center"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                data-desktop="true"
                                className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 whitespace-nowrap"
                                prefetch={false}
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black/80 transition-all duration-300 ease-in-out group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Pravý sloupec: CTA + hamburger */}
                    <div className="justify-self-end flex items-center gap-3">
                        <button className="hidden md:inline-flex text-white cursor-pointer bg-black rounded-2xl items-center gap-x-2 px-5 py-2 font-medium hover:bg-primary hover:text-white transition-all duration-500 whitespace-nowrap">
                            <Phone size={16} />
                            Kontaktujte nás
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden inline-flex items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            onClick={() => setOpen((v) => !v)}
                            type="button"
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setOpen(false)}
                aria-hidden={!open}
            />

            {/* Mobile drawer */}
            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-4/5 max-w-[360px] bg-primary text-white z-50 md:hidden will-change-transform shadow-xl"
            >
                {/* Close button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-4 text-white hover:opacity-80 focus:outline-none"
                    aria-label="Zavřít menu"
                >
                    <X size={28} />
                </button>

                <div
                    ref={mobileLinksRef}
                    className="flex flex-col items-start p-6 space-y-6 mt-10"
                >
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="relative group text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 whitespace-nowrap"
                            onClick={() => setOpen(false)}
                            prefetch={false}
                        >
                            {link.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full" />
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
