function Contact() {
    return (
<section id="contact" className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap flex-col">
  <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">اتصل بنا</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">يمكنكم التواصل معنا مباشرة عبر الواتس اب أو الحضور إلى مؤسسة أحمد علي.</p>
    </div>
    <div className="lg:w-full md:w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe loading="lazy" width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=28.381375,36.560203&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter:'grayscale(1) contrast(1.2) opacity(0.4)'}}></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1"><span>مؤسسة أحمد علي يحيى كعبي للأثاث</span><br />,8363 Al Imam Abdullah Ibn Faisal Ibn Turki, Almunshiyah Al Qadimah, Tabuk 47914, Saudi Arabia</p>
          <a target="_blank" href="https://goo.gl/maps/uBdhqyezJAb8Td1m6" className="btn btn-neutral">open map</a>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+966 56 547 7623</p>
          <p className="leading-relaxed">+966 53 583 2860</p>
        </div>
      </div>
    </div>
    </div>
</section>
    )
}

export default Contact;


