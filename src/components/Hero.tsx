import React from 'react'
import Button from './ui/Button'
import { GalleryHorizontalEnd, Phone, Star } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full px-4 sm:px-6 lg:px-10 xl:px-16 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='flex flex-col gap-5 mt-12 md:mt-0'>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                    </div>
                    <p className='text-sm text-black/60'>5/5 Hodnocení</p>
                </div>
                <h1 className='text-5xl md:text-8xl font-medium text-center md:text-left anton uppercase leading-tight'>
                    Kreativní strategie pro růst <span className='text-primary rounded-2xl'>Vidět více, prodávat více</span>
                </h1>
                <p className='mt-6 text-xl text-black/70 text-center md:text-left'>
                    Jsme skupina nadšených kreativců, kteří vám pomohou zvýšit váš dosah, zlepšit vizuální identitu a přinést růst pro vaši značku. Tvoříme weby, design a marketing s cílem, aby vaše podnikání zářilo.
                </p>
                <div className="flex gap-4 items-center justify-center md:justify-start mt-4">
                    <Button icon={<GalleryHorizontalEnd size={16} />} text='Prozkoumejte naše projekty' to='/fotogalerie' isPrimary />
                    <Button icon={<Phone size={16} />} text='Spojte se s námi' to='/kontakt' isPrimary={false} />
                </div>
            </div>
            <div className='flex justify-center md:justify-end box-border'>
                <img src='/photos/hero.png' alt='Hero Image' className='w-full md:w-2/3 h-auto' />
            </div>
        </div>
    )
}

export default Hero
