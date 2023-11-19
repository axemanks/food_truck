// Hero section

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id='home'
      className='font-2xl font-semibold text-center container'
    >
      
      <div className='w-full flex flex-row sm:flex-col h-full rounded-bl-xl rounded-br-xl drop-shadow food '>

        
        
        {/* Left Side */}
        <div className='w-1/2 flex flex-col justify-between p-5'>
          <h1 className='text-5xl font-bold text-gray-800'>
            Food
            <span className='text-accent'>Truck</span>
          </h1>

          <br />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem mollitia officia, quos odit hic quia, magnam
            laudantium fugit accusantium non placeat rerum quis explicabo itaque
            quisquam? Autem sit asperiores hic?
          </p>

          <br />

          {/* See Our Menu Button */}
          <Link href='#menu'>
            <Button className='bg-accent mx-auto'>
              See Our Menu
              <ArrowRight
                size={24}
                className='ml-2'
              />
            </Button>
          </Link>
        </div>

        {/* Right Side */}
        <div className='w-1/2 h-full p-5'>
          <Image
            alt='Food Truck Hero Image'
            src='/food_truck.jpg'
            height={512}
            width={512}
            className='rounded-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
