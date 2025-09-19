import Link from 'next/link';
import React from 'react'

type ButtonProps = {
    icon: React.ReactNode;
    text: string;
    to : string;
    isPrimary?: boolean;
}

const Button = ({ icon, text, to, isPrimary }: ButtonProps) => {
  return (
    <Link href={to} className={`py-2 px-4 rounded-2xl transition ${isPrimary ? 'bg-primary text-white hover:bg-primary-dark' : 'text-primary border border-primary hover:bg-primary hover:text-white' } flex items-center gap-2 hover:scale-105`}>
      {icon}
      {text}
    </Link>
  )
}

export default Button