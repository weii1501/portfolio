import HeroSection from '@/app/components/HeroSection'
import AboutSection from '@/app/components/AboutSection'
import ContactSection from '@/app/components/ContactSection'
import { NextSeo } from 'next-seo'

export default function Home () {
  return (
    <main className='w-full h-auto'>
      {/*<NextSeo*/}
      {/*  title='Vo Dac Luc - Portfolio'*/}
      {/*  description='Vo Dac Luc - Portfolio'*/}
      {/*/>*/}
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
