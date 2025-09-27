// data/portfolio.ts

export const portfolioProjects = [
    {
        slug: 'radek-provazek-web',
        title: 'Tvorba webu pro radekprovazek.cz',
        description:
            'Osobní web s kurzem angličtiny, zaměřený na jednoduchost, rychlost a prodejní výkon.',
        cover: 'https://picsum.photos/seed/radek/800/600',
        tags: ['Web', 'Next.js', 'Edu', 'Landing'],
        category: "weby",
        website: 'https://radekprovazek.cz',
        gallery: [
            'https://picsum.photos/seed/radek1/800/600',
            'https://picsum.photos/seed/radek2/800/600',
            'https://picsum.photos/seed/radek3/800/600',
        ],
        testimonial: {
            authorName: 'Radek Provázek',
            authorImage: 'https://i.pravatar.cc/100?u=radek', // fake profilovka
            authorHandle: '@proveenglish',
            text: 'Spolupráce naprosto super. Všechno bylo hotové rychle, perfektně vysvětlené a hlavně – web funguje tak, jak má. Doporučuju každému, kdo to myslí s online vážně!',
            attachedImage: 'https://picsum.photos/seed/radekpost/600/300',
            socials: {
                twitter: 'https://twitter.com/proveenglish',
                linkedin: 'https://linkedin.com/in/radekprovazek',
                instagram: 'https://instagram.com/proveenglish'
            }
        },
    },
];
