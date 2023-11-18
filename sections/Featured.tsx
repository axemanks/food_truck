// This section will show the featured items

import Dash from "@/components/dash-line";
import Image from "next/image";
import { clsx } from 'clsx';

const Featured = () => {
    return (
      <section 
      id="featured"
      className='container pt-40 text-center '>
        <h2 className='text-6xl font-bold pt-2'>
          Our Featured <span className='text-accent'>Food</span>
        </h2>
  
        <p className='max-w-[550px] pt-10 mx-auto text-gray-700 text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nisi
          pariatur dignissimos beatae magni, nemo odio natus, debitis totam
          cupiditate iste veniam voluptate minus aliquam sit? Modi nulla iste
          labore!
        </p>
  
        <Dash className="mx-auto" />
  
        {/* First image */}
        <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
          <div className='w-fit mx-auto self-end'>
            <Image
              className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
              src='/grid__1.png'
              width={300}
              height={600}
              alt='grid image'
            />
  
            <div className='space-y-4'>
            <Dash className="mx-auto" />
              <h2 className='font-medium text-xl'>Shrimp Salad</h2>
              <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis nisi dolorum harum distinctio, ab illo? Doloribus,
                tempore. Excepturi, neque? Minima totam, mollitia laborum
                voluptates aliquid quaerat consequuntur tempore distinctio earum!
              </p>
            </div>
          </div>
  
          {/* Second */}
          <div className='w-fit mx-auto'>
            <Image
              className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
              src='/grid__2.png'
              width={500}
              height={900}
              alt='grid image'
            />
  
            <div className='space-y-4'>
            <Dash className="mx-auto" />
              <h2 className='font-medium text-xl'>Baked Apples</h2>
              <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis nisi dolorum harum distinctio, ab illo? Doloribus,
                tempore. Excepturi, neque? Minima totam, mollitia laborum
                voluptates aliquid quaerat consequuntur tempore distinctio earum!
              </p>
            </div>
          </div>
  
          {/* Third */}
          
          <div className='w-fit mx-auto self-end'>
            <Image
              className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
              src='/grid__3.png'
              width={300}
              height={600}
              alt='grid image'
            />
  
            <div className='space-y-4'>
            <Dash className="mx-auto" />
              <h2 className='font-medium text-xl'>Cherry Chicken</h2>
              <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis nisi dolorum harum distinctio, ab illo? Doloribus,
                tempore. Excepturi, neque? Minima totam, mollitia laborum
                voluptates aliquid quaerat consequuntur tempore distinctio earum!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Featured;
  