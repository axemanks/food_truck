// Services section - will read data from constants and display each service in a card.

import ServiceCard from '@/components/service-card';
import { servicesData } from '@/constants';

const Services = () => {
  return (
    <section
      id='services'
      className='container space-y-10 py-20'
    >
      <h1 className='flex justify-center text-3xl font-semibold mt-10'>
        Services
      </h1>

      <div className='flex flex-row justify-center gap-9 mx-10'>
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
