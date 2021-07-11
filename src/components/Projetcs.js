// src/Projects.js
 
import React from "react"
 
function Projects(props) {
  return (
    <div id="work" className="h-screen col-span-7  p-10 pt-16 bg-gray-100  "> 
      <div className=" h-full w-full grid grid-cols-3 space-x-14">
        <div className="col-span-1  m-3 ml-0 h-full w-full ">
          <img data-aos="fade-down" data-aos-duration="1600" className=" h-4/5 w-full object-cover rounded-xl shadow-lg" src="/assets/chaptera.jpg" alt="chaptera"/>
        </div>
        <div className="col-span-2  mr-3 my-3 h-full ">
        <img data-aos="fade-down" data-aos-duration="1600" className=" h-4/5 w-full object-cover rounded-xl shadow-lg" src="/assets/portfolio.jpg" alt="portfolio"/>
        </div>
      </div>
    </div>
  )
}
 
export default Projects;
