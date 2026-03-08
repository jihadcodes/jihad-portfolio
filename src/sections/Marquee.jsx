
import start from '../assets/images/star.svg'
const Marquee = () => {
  return (
    <>
      <div className="bg-white text-black pb-28 lg:pb-44 overflow-hidden">
        <div className=" whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight ">
          <span className='flex gap-4 lg:gap-8 mx-8 '>
          CREATE  <img src={start} alt="Start" className='marquee-star1 w-[7vw]'  />
          DESIGN <img src={start} alt="Start" className='marquee-star1 w-[7vw]' />
          INSPIRE <img src={start} alt="Start"className='marquee-star1 w-[7vw]'  />
          CREATE <img src={start} alt="Start" className='marquee-star1 w-[7vw]' />
          DESIGN <img src={start} alt="Start" className='marquee-star1 w-[7vw]' />
          INSPIRE <img src={start} alt="Start"className='marquee-star1 w-[7vw]'  />
        </span>
        </div>
        <div className=" whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight ">
          <span className='flex gap-4 lg:gap-8 mx-8 '>
          CREATE  <img src={start} alt="Start" className='marquee-star2 w-[7vw]'  />
          DESIGN <img src={start} alt="Start" className='marquee-star2 w-[7vw]' />
          INSPIRE <img src={start} alt="Start"className='marquee-star2 w-[7vw]'  />
          CREATE <img src={start} alt="Start" className='marquee-star2 w-[7vw]' />
          DESIGN <img src={start} alt="Start" className='marquee-star2 w-[7vw]' />
          INSPIRE <img src={start} alt="Start"className='marquee-star2 w-[7vw]'  />
        </span>
        </div>
      </div>
    </>
  )
}

export default Marquee
