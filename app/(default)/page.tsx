export const metadata = {
  title: 'MULLEN PELUQUEROS',
  description: 'Plataforma de aprendizaje y experiencia. Queremos que descubras, aprendas, apliques y triunfes en el mundo de la Barbería - Te ayudamos más allá del corte!!',
};

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import NewPricing from '@/components/new-pricing'
import FAQ from '@/components/faqq'
import Video from '@/components/video'
import ImageTextSection from '@/components/image-text-section'
import PlatformShowcase from '@/components/platform-showcase'

export default function Home() {
  return (
    <>
      <Hero />
      <Video/>
      {/* <Features /> */}
      <ImageTextSection />
      <PlatformShowcase />
      <Zigzag />
      <NewPricing />
      <FAQ/>
    </>
  )
}
