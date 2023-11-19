// Menu section

import Dash from '@/components/dash-line';
import MenuCard from '@/components/menu-card';
import { menuData } from '@/constants';
import Image from 'next/image';

const Menu = () => {
  return (
    <section
      id='menu'
      className='container py-40'
    >
      <div className='space-y-4 w-fit mx-auto text-center'>
        <h2 className='text-4xl md:text-6xl font-bold'>
          Our <span className='text-accent'>Menu</span>
        </h2>
        <p className='text-gray-700'>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos
          <br />
          vero sint architecto unde quas, deleniti suscipit voluptatem neque
        </p>
        <div className='w-fit mx-auto'>
          <Dash />
        </div>
      </div>

      <div className='grid lg:grid-cols-[35%,1fr] gap-10 pt-10'>
        <div className='w-fit mx-auto'>
          {/* Left image */}
          <Image
            className='w-[100%] max-w-[400px] h-auto'
            src='/menu_left.png'
            width={500}
            height={500}
            alt='dish'
          />
        </div>

        <div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>
          {/* Map out menu items into MenuCards */}
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
