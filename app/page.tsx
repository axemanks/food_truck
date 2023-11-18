import AboutUs from '@/sections/About'
import Featured from '@/sections/Featured'
import Hero from '@/sections/Hero'
import Location from '@/sections/Location'
import Menu from '@/sections/Menu'
import Services from '@/sections/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <AboutUs />
      <Location />
    </div>
  )
}
