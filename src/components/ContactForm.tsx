'use client'

import { Mail, User, MessageSquare, Send } from 'lucide-react';
import React from 'react';

const ContactForm = () => {
    return (
        <section className="w-full mx-auto rounded-4xl px-4 py-14 sm:px-6 lg:px-10 xl:px-16 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center gap-6">
                <p className="px-3 py-2.5 rounded-full text-primary border-2 border-primary w-fit tracking-tight">
                    NEZÁVAZNÝ KONTAKT
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
                    Máte <span className="text-primary">zájem o spolupráci</span> nebo se chcete jen na něco zeptat?
                </h2>

                <p className="text-black text-lg md:text-xl leading-relaxed">
                    Ozvěte se nám přes formulář nebo napište přímo na{' '}
                    <a href="mailto:kontakt@wiralgs.cz" className="underline text-primary">
                        kontakt@wiralgs.cz
                    </a>
                    . Odpovíme do 24 hodin.
                </p>

                <div className="flex items-center gap-2 text-zinc-800 pt-2">
                    <Send className="size-5 text-primary" />
                    <span className="text-sm">Odpovídáme rychle a lidsky</span>
                </div>
            </div>

            {/* RIGHT FORM */}
            <form className="w-full bg-primary/5 border border-primary/20 rounded-4xl p-6 md:p-8 space-y-5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                        <User className="size-4 text-primary" /> Jméno a příjmení
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Např. Jan Novák"
                        className="bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                        <Mail className="size-4 text-primary" /> E-mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Např. jan@email.cz"
                        className="bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                        <MessageSquare className="size-4 text-primary" /> Zpráva
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Sem napište svou zprávu nebo dotaz..."
                        rows={5}
                        className="bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                >
                    Odeslat zprávu
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
