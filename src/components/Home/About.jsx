
function Hero() {
    return (
        <div id="about" className="hero py-3 px-3 mx-auto">
          <div className={`hero-content flex-col lg:flex-row`}>
            <div className="max-w-sm">
                <img data-aos="zoom-in-up" className="w-full" src="https://jisan901.github.io/Assets-All/client108/131378.jpg" alt='About banner'/>
            </div>
            <div className="max-w-[550px]">
              <h1 className="text-4xl font-bold">معلومات عنا</h1>
              <p className="py-6">مؤسسة أحمد علي هي أفضل مؤسسة موزعة في تبوك.  يمكنك الاتصال بنا مباشرة لبيع المنتجات المستعملة، وسيتم التعامل مع النقل من قبل المنظمة.  يمكنك معرفة المزيد عن طريق الاتصال بنا.</p>
              <a href="tel:+966565477623" className="btn btn-sm btn btn-neutral rounded-md text-white md:btn-md gap-2 normal-case lg:gap-3">
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