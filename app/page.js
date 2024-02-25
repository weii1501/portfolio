import HeroSection from '@/app/components/HeroSection'
import AboutSection from '@/app/components/AboutSection'
import ContactSection from '@/app/components/ContactSection'

export default function Home () {
  return (
    <main className='w-full h-auto'>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
