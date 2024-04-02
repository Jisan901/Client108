import furniture from "../../assets/m.png"
import sink from "../../assets/sink.png"
import wam from "../../assets/wam.png"
import Typewriter from 'typewriter-effect';



const Header = () => {
    return (
        <div id="home" className="hero py-5 my-2 lg:my-8 relative overflow-x-hidden">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Carousel/>
            <div className="md:w-2/3 lg:w-3/5">
              <h1 className="text-5xl font-bold"><span className="text-6xl">Sell or buy</span><br/>used <Typewriter
                  options={{
                    strings: ['appliances', 'furniture','products',"tv","fridge","washing machine","kitchen kit"],
                    autoStart: true,
                    loop: true,
                  }}
                /></h1>
             
              <p className="py-6 pr-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
             
              <button className="btn btn-neutral">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                Call now
              </button>
            </div>
          </div>
          <div className="md:hidden lg:block w-[500px] h-[300px] bg-[#bdbdbd] rounded-full absolute -right-40 top-0 z-[-1]"></div>
        </div>
    )
}

export default Header;

function Carousel() {
    return (
<div data-aos="zoom-in-left" className="min-w-64 max-w-96 rounded-lg carousel">
  <div className="carousel-item w-full">
    <img src={wam} className="" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src={furniture} className="" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src={sink} className="" alt="Tailwind CSS Carousel component" />
  </div> 
</div>
    )
}