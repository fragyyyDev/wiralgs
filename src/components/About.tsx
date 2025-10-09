// components/About.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import {
    Sparkles,
    LineChart,
    Rocket,
    Users,
    PlayCircle,
    ThumbsUp,
} from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="w-full mx-auto rounded-4xl px-4 py-14 sm:px-6 lg:px-10 xl:px-16 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* LEFT */}
            <div className="flex flex-col justify-center gap-6">
                {/* Badge */}
                <p className="px-3 py-2.5 rounded-full text-primary border-2 border-primary w-fit tracking-tight">
                    KREATIVNÍ SKUPINA WIRALGS
                </p>

                {/* Headline */}
                <h2 className="text-4xl md:text-6xl font-medium leading-tight text-black anton uppercase">
                    Proč nám firmy a jednotlivci <span className="text-primary">důvěřují?</span>
                </h2>

                {/* Sub / value prop */}
                <p className="text-black text-lg md:text-xl leading-relaxed">
                    Děláme obsah, který <b>roste</b> — od ideje po distribuci. Kombinujeme
                    rychlou produkci s daty a testováním kreativy, takže místo líbivých slibů
                    přinášíme <b>měřitelné výsledky</b>.
                </p>

                {/* Proof strip – Radek Provázek */}
                <div className="rounded-2xl border border-primary/40 bg-primary/5 p-4 md:p-5 flex items-start gap-4">
                    <PlayCircle className="size-7 md:size-8 shrink-0 text-primary" />
                    <div className="text-sm md:text-base leading-relaxed">
                        <p className="font-semibold text-black">
                            Pomohli jsme Radkovi Provázkovi (<span className="text-primary">@proveenglish</span>)
                        </p>
                        <p className="text-zinc-700">
                            nastavit obsahovou strategii a produkci videí, která dohromady generují
                            <b> statisíce zhlédnutí</b> měsíčně a přivádějí nové studenty angličtiny.
                        </p>
                    </div>
                </div>

                {/* Icon bullets */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-2">
                    <li className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4">
                        <Sparkles className="size-6 mt-0.5 text-primary shrink-0" />
                        <div>
                            <p className="font-semibold text-black">Kreativa, co zaujme</p>
                            <p className="text-zinc-700 text-sm">
                                Hooky, storyboardy a střih navržené pro watch-time a retenci.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4">
                        <LineChart className="size-6 mt-0.5 text-primary shrink-0" />
                        <div>
                            <p className="font-semibold text-black">Růst podložený daty</p>
                            <p className="text-zinc-700 text-sm">
                                AB testy miniatur, copy a formátů, měříme to, co hýbe čísly.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4">
                        <Rocket className="size-6 mt-0.5 text-primary shrink-0" />
                        <div>
                            <p className="font-semibold text-black">Rychlá produkce</p>
                            <p className="text-zinc-700 text-sm">
                                Natáčení, postprodukce, titulky a exporty pro všechna sociální média.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4">
                        <Users className="size-6 mt-0.5 text-primary shrink-0" />
                        <div>
                            <p className="font-semibold text-black">Spolupráce na míru</p>
                            <p className="text-zinc-700 text-sm">
                                Od konzultací po kompletní správu kanálů — podle cíle a rozpočtu.
                            </p>
                        </div>
                    </li>
                </ul>

                {/* Micro-social proof */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <div className="flex items-center gap-2 text-zinc-800">
                        <ThumbsUp className="size-5 text-primary" />
                        <span className="text-sm">
                            120+ publikovaných videí za posledních 6 měsíců
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-800">
                        <LineChart className="size-5 text-primary" />
                        <span className="text-sm">průměrný růst ER +27&nbsp;%</span>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full flex items-end justify-end">
                <div className="relative max-w-[620px] w-full">
                    <Image
                        src="/photos/About.png"
                        alt="Wiralgs — produkce obsahu v terénu"
                        width={600}
                        height={475}
                        className="rounded-2xl w-full h-auto"
                        priority
                    />

                    {/* Floating stat card 1 */}
                    <div className="absolute -bottom-6 left-4 md:left-8 bg-white/95 backdrop-blur border border-zinc-200 rounded-2xl p-4 shadow-sm">
                        <p className="text-xs text-zinc-500">Měsíční dosahy</p>
                        <p className="text-xl font-semibold text-black">500k+</p>
                    </div>

                    {/* Floating stat card 2 */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur border border-zinc-200 rounded-2xl p-3 shadow-sm">
                        <div className="flex items-center gap-2">
                            <PlayCircle className="size-5 text-primary" />
                            <span className="text-sm font-medium text-black">Watch-time ↑</span>
                        </div>
                        <p className="text-[12px] text-zinc-600 mt-0.5">+38&nbsp;% posledních 30 dní</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
