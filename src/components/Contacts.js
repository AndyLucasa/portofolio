// src/Projects.js
 
import React from "react"
import { FaGithub, FaFacebook, FaLinkedin, FaAngrycreative } from "react-icons/fa"

function Contacts(props) {
  return (
    <div className="h-full  grid grid-rows-2">
      <div className="Logo h-16 ">
        <FaAngrycreative className="h-full w-full pr-44 text-gray-100"/>
      </div>

      <div className="Email h-24 space-y-4 ">
          <h1 className="text-left align-text-bottom text-sm font-base font-poppins text-gray-50">Email</h1>
          <p className="text-left align-text-bottom text-sm font-rubik text-gray-50" >andylucasa@gmail.com</p>
      </div>

      <div className="Phone h-24 space-y-4">
          <h1 className="text-left text-sm font-base font-poppins text-gray-50">Phone</h1>
          <p className="text-left text-sm font-rubik text-gray-50" >+261 32 56 752 53</p>
      </div>

      <div className="Find h-24 space-y-4">
        <h1 className="text-left text-sm font-base font-poppins text-gray-50">Find me on</h1>
        <div className="Contacts flex flex-col ">
          <div className="flex items-center space-x-4 ">
            <a href="https://github.com/AndyLucasa" className="text-gray-400 hover:text-gray-100">
              <span className="sr-only">Github</span>
              <FaGithub className="h-7 w-7 text-gray-200"/>
            </a>
            <a href="https://www.facebook.com/andy.234564323456754323456786" className="hover:text-gray-100">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-7 w-7 text-gray-200"/>
            </a>
            <a href="https://www.linkedin.com/in/ny-aina-andy-lucas-ambinintsoa-089283213/" className="hover:text-gray-100">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-7 w-7 text-gray-200"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Contacts;