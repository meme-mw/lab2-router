import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
function App() {


  return (
    <>
    <header>
  <Nav/>
<section className='container flex justify-between pt-20 mx-auto'>
  <div>

  <p className="w"><hr style={{borderTop:"1px solid #be7c68",width:"4rem"}}/> <span>Welocome</span></p>
  </div>
  <div> <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg" alt="" width="450"/>
  </div>

</section>

</header>
<section className="reviws">
<h1>Latest Reviews</h1>
</section>
    </>
  )
}

export default App
