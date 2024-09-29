import Nav from './Nav'
function Contact(){
    return(
        <div className='contact'>
        <Nav/>
        <section className='container flex justify-center pt-20 mx-auto flex-wrap'>
        <form  className='drop-shadow-md w-2/3 flex flex-col items-center justify-around mb-20 p-10' style={{height:"100% !important",maxWidth:370,backgroundColor:"#fff"}}>
        <h2 style={{color:"#be7c68"}}>Contact Us</h2>
        <label className="input input-bordered flex items-center gap-2 ">
        <input type="text" className="grow" placeholder="Search"  />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <textarea
  placeholder="Bio"
  className="textarea textarea-bordered textarea-sm w-60 max-w-xs"></textarea>
  
     <a className=" uppercase " style={{border:".5px solid #be7c68",padding:"8px 23px",lineHeight:"1em",fontSize:".8rem",color:"#be7c68"}}>Send</a>

      </form>
      <div className='drop-shadow-md pb-20' style={{maxWidth:"370"}}>
        <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg" alt="" srcset="" style={{height:"100%"}}/>
      </div>
      </section>
      </div>
     
    )
}

export default Contact
