import user1 from "../../assets/1.jpg"
import user2 from "../../assets/2.jpg"
import user3 from "../../assets/3.jpg"
import user4 from "../../assets/4.jpg"
import user5 from "../../assets/5.jpg"
import user6 from "../../assets/5.jpg"


function Team() {
    return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <SingleCard data={{
          name:"Mr.Jamal",
          title:"CEO",
          image:user1
      }}/>
      <SingleCard data={{
          name:"Mr.Kamal",
          title:"employee",
          image:user2
      }}/>
      <SingleCard data={{
          name:"Mr.Ahammed",
          title:"employee",
          image:user3
      }}/>
      <SingleCard data={{
          name:"Mr.Employee",
          title:"employee",
          image:user4
      }}/>
      <SingleCard data={{
          name:"Mr.Employee2",
          title:"employee",
          image:user5
      }}/>
      <SingleCard data={{
          name:"Mr.Employee3",
          title:"employee",
          image:user6
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
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={data.image}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{data.name}</h2>
            <p className="text-gray-500">{data.title}</p>
          </div>
        </div>
      </div>
}