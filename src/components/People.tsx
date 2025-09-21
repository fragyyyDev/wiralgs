'use client';

import React from 'react';
import CardCase from './ui/CardCase';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function AutoplayPlugin(slider: any) {
    let timeout: any;
    let mouseOver = false;

    function clearNextTimeout() {
        clearTimeout(timeout);
    }
    function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
            slider.next();
        }, 2500);
    }

    slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
        });
        slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
        });
        nextTimeout();
    });
    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);
}

const People = () => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: 'free-snap',
            rubberband: false,
            slides: {
                perView: 1.2,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 640px)': {
                    slides: { perView: 2.2, spacing: 20 },
                },
                '(min-width: 1024px)': {
                    slides: { perView: 3.2, spacing: 24 },
                },
                '(min-width: 1280px)': {
                    slides: { perView: 4, spacing: 24 },
                },
            },
        },
        [AutoplayPlugin]
    );

    return (
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 mt-10 flex flex-col">
            <h2 className="text-6xl font-bold w-full text-center mb-8">
                Komu jsme <span className="text-primary">pomohli</span>
            </h2>

            <div className="relative">
                {/* Slider */}
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <CardCase
                            href="https://www.instagram.com/bennycristo/"
                            imageSrc="/photos/BenCristovao.jpg"
                            imageAlt="Ben Cristovao"
                            title="Ben Cristovao"
                            instagramFollowers={'957K'}
                            spotifyFollowers={'810K'}
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <CardCase
                            href="https://www.instagram.com/ppp.pavelprochazka/"
                            imageSrc="/photos/PavelProchazka.jpg"
                            imageAlt="Pavel Procházka"
                            title="Pavel Procházka"
                            instagramFollowers={'125K'}
                            youtubeSubscribers={'73K'}
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <CardCase
                            href="https://www.instagram.com/artem.saykin/"
                            imageSrc="/photos/ArtemSaykin.jpg"
                            imageAlt="Artem Saykin"
                            title="Artem Saykin"
                            instagramFollowers={'18K'}
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <CardCase
                            href="https://www.instagram.com/proveenglish/"
                            imageSrc="/photos/RadekProvazek.jpg"
                            imageAlt="Prove English"
                            title="ProveEnglish"
                            instagramFollowers={'110K'}
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <CardCase
                            href="https://www.instagram.com/jan_srajer/"
                            imageSrc="/photos/JanSrajer.webp"
                            imageAlt="Jan Šrajer"
                            title="Jan Šrajer"
                            instagramFollowers={'16K'}
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <CardCase
                            href="https://www.instagram.com/dejv.official_/"
                            imageSrc="/photos/Dejv.png"
                            imageAlt="Dejv"
                            title="Dejv"
                            instagramFollowers={'13K'}
                            spotifyFollowers={"100K "}
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <CardCase
                            href="https://www.instagram.com/215eddie/"
                            imageSrc="/photos/215eddie.jpeg"
                            imageAlt="215eddie"
                            title="215eddie"
                            instagramFollowers={'22K'}
                            spotifyFollowers={"100K"}
                        />
                    </div>
                </div>

                {/* Navigační šipky */}
                <button
                    onClick={() => instanceRef.current?.prev()}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white shadow rounded-full p-2 border-primary hover:bg-white border hover:border-primary hover:text-primary  hover:scale-110 transition-all duration-300"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => instanceRef.current?.next()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white shadow rounded-full p-2 border-primary hover:bg-white border hover:border-primary hover:text-primary  hover:scale-110 transition-all duration-300"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default People;
