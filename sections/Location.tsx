// Location section - will have contact info and map
"use client"

import Map from "@/components/google-map"


const Location = () => {
  return (
    <section 
    id="location"
    className='flex flex-row w-full h-fit py-20'>
    {/* Left */}
  <div className='flex-1 text-center'>
    <div className='flex-1'>
      <h1 className='text-3xl font-semibold'>Food <span className="text-accent">Truck</span></h1>
      <p>2805 Highway 44 W Inverness, FL 34453</p>
      <p>(352) 726-8616</p>
    </div>
    <br />
    <div className='flex-1'>
      <p className='text-2xl'>Open Hours:</p>
      <p> Monday: 9:00 AM - 5:30 PM</p>
      <p>Tuesday: 9:00 AM - 5:30 PM</p>
      <p>Wednesday: 9:00 AM - 5:30 PM</p>
      <p>Thursday: 9:00 AM - 5:30 PM</p>
      <p>Friday: 9:00 AM - 5:30 PM</p>
      <p>Saturday: 9:00 AM - 2:00 PM</p>
      <p>Sunday: <span className='text-red-500'>Closed</span></p>
    </div>
  </div>
  <div className='flex-1'>
    {/* Right */}
    <Map />
  </div>
</section>
  )
}

export default Location