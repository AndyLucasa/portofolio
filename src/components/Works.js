 
import React from "react"
 
function Works(props) {
  return (
    <div id="work" className="h-screen col-span-7 w-full pl-10 pt-24 bg-gray-100  "> 
      <div className=" h-full w-full grid grid-cols-3 space-x-2">
        <div className="col-span-1  m-3 ml-0 h-full w-full ">
          <img data-aos="fade-down" data-aos-duration="1600" className=" h-4/5 w-11/12 object-cover rounded-xl shadow-lg" src="/assets/chaptera.jpg" alt="chaptera"/>
        </div>
        <div className="col-span-1  m-3 ml-0 h-full w-full ">
          <img data-aos="fade-down" data-aos-duration="1600" className=" h-4/5 w-11/12 object-cover rounded-xl shadow-lg" src="/assets/chaptera.jpg" alt="chaptera"/>
        </div>
        <div className="col-span-1  m-3 ml-0 h-full w-full ">
          <img data-aos="fade-down" data-aos-duration="1600" className=" h-4/5 w-11/12 object-cover rounded-xl shadow-lg" src="/assets/chaptera.jpg" alt="chaptera"/>
        </div>
        
      </div>
    </div>
  )
}
 
export default Works;