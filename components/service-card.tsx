// Services card


interface ServiceCardProps {
    icon: any;
    label: string;
    subtext: string;
};


const ServiceCard:React.FC<ServiceCardProps> = ({ icon: Icon, label, subtext }) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 border shadow-md bg-slate-100'>
          <div className='flex w-11 h-11 justify-center items-center border border-accent rounded-full'>
              {Icon && <Icon />}
          </div>
  
          <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
          <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
      </div>
    )
  }

  export default ServiceCard;