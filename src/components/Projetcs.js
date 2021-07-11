// src/Projects.js
 
import React from "react"
import chapetra from "./../assets/chaptera.jpg"
import portfolio from "./../assets/portfolio.jpg"
 
function Projects(props) {
  return (
    <div id="work" className="h-screen col-span-7  p-10 pt-16 bg-gray-100  "> 
      <div className=" h-full w-full grid grid-cols-3 space-x-14">
        <div className="col-span-1  m-3 ml-0 h-full w-full ">
          <img data-aos="fade-down" data-aos-duration="1600" className=" h-3/4 w-full object-cover rounded-xl shadow-2xl" src={chapetra} alt="chaptera"/>
          <p className="text-left text-3xl font-extrabold font-righteous text-purple-700 pt-6  " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">Chapetra </p>
          <p className=" text-left text-base font-base font-rubik pt-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">A mobile application made with Flutter and Node Js but not published on the stores.</p>
        </div>
        <div className="col-span-2  mr-3 my-2 h-full ">
          <img data-aos="fade-down" data-aos-duration="1600" className=" h-3/4 w-full object-cover rounded-xl shadow-2xl" src={portfolio} alt="portfolio"/>
          <p className="text-left text-3xl font-extrabold font-righteous text-purple-700 pt-6  " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">Portfolio</p>
          <p className=" text-left text-base font-base font-rubik pt-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">Portfolio website made with ReacSJ and Tailwind CSS presenting my projects and skills.
          <br/>Tech web project - 2021
          
          </p>

        </div>
      </div>
    </div>
  )
}
 
export default Projects;
