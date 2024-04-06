function Team() {
    return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">فريقنا</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">نحن نقدم خدماتنا المذهلة مع أفضل فريق. قد تكون على دراية بهم..</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <SingleCard data={{
          name:"Ahmed Ali",
          title:"CEO",
          image:"https://jisan901.github.io/Assets-All/client108/react.svg"
      }}/>
      <SingleCard data={{
          name:"Tarikul islam",
          title:"employee",
          image:"https://jisan901.github.io/Assets-All/client108/2.jpg"
      }}/>
      <SingleCard data={{
          name:"Manowar Hossain",
          title:"employee",
          image:"https://jisan901.github.io/Assets-All/client108/3.jpg"
      }}/>
      <SingleCard data={{
          name:"Mr.Elias",
          title:"employee",
          image:"https://jisan901.github.io/Assets-All/client108/4.jpg"
      }}/>
      <SingleCard data={{
          name:"Mizanur Rahman",
          title:"employee",
          image:"https://jisan901.github.io/Assets-All/client108/5.jpg"
      }}/>
      <SingleCard data={{
          name:"Mr.Hassan",
          title:"employee",
          image:"https://jisan901.github.io/Assets-All/client108/1.jpg"
      }}/>
    </div>
  </div>
</section>
    )
}

export default Team;

function SingleCard({data}){
    return <div data-aos="flip-up" className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img loading="lazy" alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={data.image}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{data.name}</h2>
            <p className="text-gray-500">{data.title}</p>
          </div>
        </div>
      </div>
}