import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App'
import Contact from '../components/Contact'
import About from '../components/About'

import Nav from '../components/Nav'
export default function route(){
    return(

<BrowserRouter>
<Routes>
  
    <Route path="/" element={<App/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    { /*
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} /> */}
  {/* </Route> */}
</Routes>
</BrowserRouter>
)
}

