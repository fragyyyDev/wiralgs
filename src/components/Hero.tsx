import React from 'react'
import Button from './ui/Button'
import { GalleryHorizontalEnd, Phone, Star } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full px-4 sm:px-6 lg:px-10 xl:px-16 min-h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='flex flex-col gap-3 mt-12 md:mt-0'>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                        <Star size={20} className='text-primary' />
                    </div>
                    <p className='text-sm text-black/60'>5/5 Hodnocení</p>
                </div>
                <h1 className='text-6xl md:text-8xl font-bold text-center md:text-left'>Buďte <span className='text-white bg-primary p-4 rounded-2xl'>vidět,</span> <br />
                    prodávejte víc.
                </h1>
                <p className='mt-4 text-lg text-black/80 text-center md:text-left'>Jsme kreativní skupina mladých lidí, kteří se specializují na marketing a design, Mimo jiné tvoříme webové stránky a celkovou vizuální identitu.
                </p>
                <div className="flex gap-3 items-center justify-center md:justify-start mt-2">
                    <Button icon={<GalleryHorizontalEnd size={16} />} text='Fotogalerie' to='/fotogalerie' isPrimary />
                    <Button icon={<Phone size={16} />} text='Kontaktujte nás' to='/kontakt' isPrimary={false} />
                </div>
            </div>
            <div className='flex justify-center md:justify-end box-border'>
                <img src='/photos/hero.png' alt='Hero Image' className='w-full md:w-2/3 h-auto' />
            </div>
        </div>
    )
}

export default Hero