// src/Projects.js
 
import React from "react"
 
function Projects(props) {
  return (
    <div id="work" className="h-screen col-span-7 w-full p-10 bg-gray-100  "> 
      <div className=" h-full w-full grid grid-cols-3">
        <div className="col-span-1  m-3 h-5/6 ">
          <div className=" bg-indigo-800 h-4/6 rounded-2xl">

          </div>
        </div>
        <div className="col-span-2  mr-3 my-3 ml-auto w-4/6 h-5/6">
          <div className=" bg-yellow-600 h-4/6 rounded-2xl">

          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Projects;