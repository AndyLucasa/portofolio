
import React from "react"
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"

function Contacts(props) {
  return (
    <div className="h-full  pb-20 pt-8 mb-96 flex flex-col justify-between absolute p-4 ">
      <div className="Logo h-16 ">
        <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="text-left align-text-bottom text-3xl font-righteous text-gray-50">My</p>
        <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900"className="text-left align-text-bottom text-3xl font-righteous text-gray-50">Porfolio</p>
      </div >

      <div className="space-y-4">
        <div className="Email">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" className="text-left align-text-bottom text-sm font-base font-poppins text-gray-50">Email</h1>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000" className="text-left align-text-bottom text-sm font-rubik text-gray-50" >andylucasa@gmail.com</p>
        </div>

        <div className="Phone">
              <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300" className="text-left text-sm font-base font-poppins text-gray-50">Phone</h1>
              <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1500" className="text-left text-sm font-rubik text-gray-50" >+261 32 56 752 53</p>
          </div>

        <div className="Find">
          <h1 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="1800" className="text-left text-sm font-base font-poppins text-gray-50">Find me on</h1>
          <div className="Contacts flex flex-col ">
            <div className="flex items-center space-x-4 ">
              <a href="https://github.com/AndyLucasa" >
                <span className="sr-only">Github</span>
                <FaGithub data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2000" className="h-7 w-7 text-gray-300 hover:text-gray-50 "/>
              </a>
              <a href="https://www.facebook.com/andy.234564323456754323456786" >
                <span className="sr-only">Facebook</span>
                <FaFacebook data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2300" className="h-7 w-7 text-gray-300 hover:text-gray-50"/>
              </a>
              <a href="https://www.linkedin.com/in/ny-aina-andy-lucas-ambinintsoa-089283213/" >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2600"className="h-7 w-7 text-gray-300 hover:text-gray-50"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
 
export default Contacts;