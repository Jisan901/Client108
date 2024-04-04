function Categories() {
    return (
<section className="text-gray-600 body-font">
  <div className="container px-5 pt-24 pb-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-neutral tracking-widest font-medium title-font mb-1">أفضل شراء / بيع</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">فئات</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <SingleCategorie title="الأجهزة" description="الأجهزة المنزلية، والتي يشار إليها أيضًا باسم الأجهزة المنزلية أو الأجهزة الكهربائية أو الأجهزة المنزلية، هي آلة تساعد في الوظائف المنزلية مثل الطهي والتنظيف وحفظ الطعام." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
        }/>
      </div>
      <div className="p-4 md:w-1/3">
        <SingleCategorie title="أثاث" description="يشير الأثاث إلى الأشياء المخصصة لدعم الأنشطة البشرية المختلفة مثل الجلوس (على سبيل المثال، المقاعد والكراسي والأرائك)، وتناول الطعام (الطاولات)، وتخزين العناصر، والعمل، والنوم (على سبيل المثال، الأسرة والأراجيح)." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
        }/>
      </div>
      <div className="p-4 md:w-1/3">
        <SingleCategorie title="آحرون" description="الملحقات المنزلية هي عناصر أثاث يسهل استبدالها ونقلها، وتتضمن تقريبًا أي عناصر ليست ضرورية وظيفيًا في مساحة مزينة." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
        }/>
      </div>
    </div>
  </div>
</section>
    )
}

export default Categories;


function SingleCategorie({title, description, icon}) {
    return (
    <div data-aos="zoom-in-up" className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-neutral text-white flex-shrink-0">
              {icon}
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">{title}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{description}</p>
            <a href="#about" className="mt-3 text-neutral inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
    </div>
    )
}

