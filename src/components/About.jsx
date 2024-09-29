import Nav from './Nav'
function About(){
    return(
        <div className='contact'>
        <Nav/>
        <section className='container flex justify-center pt-20 mx-auto flex-wrap'  >
        <div  className='drop-shadow-md w-2/3 flex flex-col items-center justify-around mb-20 p-10' style={{maxWidth:370,backgroundColor:"#fff"}}>
        <h2 style={{color:"#be7c68",textAlign:"left !important"}}>About Us</h2>
        <p className='w-3/4'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Fuga velit id totam unde accusamus dolore voluptatibus provident eveniet voluptas 
        ipsam sapiente, enim reprehenderit,
         eaque repellendus? Labore ipsum eaque provident repudiandae.</p>
       </div>
      <div className='drop-shadow-md pb-20' style={{maxWidth:"370"}}>
        <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg" alt="" srcset="" style={{height:"100%"}}/>
      </div>
      </section>
      </div>
     
    )
}

export default About