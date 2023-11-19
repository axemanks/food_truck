// Services section - will read data from constants and display each service in a card.

import ServiceCard from '@/components/service-card';
import { servicesData } from '@/constants';

const Services = () => {
  return (
    <section
      id='services'
      className='container space-y-10 py-20 rounded-xl shadow-xl food'
    >
      <h2 className='text-4xl md:text-6xl font-bold text-center'>
          Our <span className='text-accent'>Services</span>
        </h2>

      <div className='flex flex-row justify-center gap-9 mx-10 '>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.label}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
