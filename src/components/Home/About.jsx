import img from '../../assets/sofa.png'

function Hero() {
    return (
        <div id="about" className="hero py-3 px-3 mx-auto">
          <div className={`hero-content flex-col lg:flex-row`}>
            <div className="max-w-sm">
                <img data-aos="zoom-in-up" className="w-full" src={img} alt='main'/>
            </div>
            <div className="max-w-[550px]">
              <h1 className="text-4xl font-bold">About us</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <a href="tel:+8801714433623" className="btn btn-sm btn btn-neutral rounded-md text-white md:btn-md gap-2 normal-case lg:gap-3">
              <div className="flex flex-col items-end">
              <span>call us</span>
              </div> 
              <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Hero;