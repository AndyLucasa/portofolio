 
import React from "react"
import katara from "./../assets/katara.png"
import salamah from "./../assets/salamah.JPG"
import projet_p from "./../assets/projet_perso.png"


 
function Works(props) {
  return (
    <div id="work" className=" h-screen col-span-7 w-full pl-10 pt-14 bg-gray-100  "> 
      <div className=" h-full w-full grid grid-cols-3 space-x-2">
        <div className="col-span-1  m-3 ml-0 h-full w-11/12 pb-20  ">
          <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600"className=" h-2/3 w-full object-cover rounded-xl shadow-2xl  border border-gray-200" src={katara} alt="chaptera"/>
          <p className="text-left text-3xl font-extrabold font-righteous text-purple-700 pt-6  " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">Katarà</p>
          <p className=" text-left text-base font-base font-rubik pt-2"data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">Katarà is an application that describes what happens in an instant video capture running on both android and ios (in progress).</p>
        </div>
        
        <div className="col-span-1  m-3 ml-0 h-full w-11/12 pb-20 ">
          <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900"className=" h-2/3 w-full object-cover rounded-xl shadow-2xl" src={salamah} alt="chaptera"/>
          <p className="text-left text-3xl font-extrabold font-righteous text-purple-700 pt-6  " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">Salamah</p>
          <p className=" text-left text-base font-base font-rubik pt-2"data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">SALAMAH Application helps to identify legitimate doctors and clinics in the country.</p>
        </div>

        <div className="col-span-1  m-3 ml-0 h-full w-11/12 pb-20 ">
          <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200"className=" h-2/3 w-full object-cover rounded-xl shadow-2xl" src={projet_p} alt="chaptera"/>
          <p className="text-left text-3xl font-extrabold font-righteous text-purple-700 pt-6  " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1500">Phototek</p>
          <p className=" text-left text-base font-base font-rubik pt-2"data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1800">A personal project (digital photo sharing) using native components of android or IOS systems developed in Flutter,... (in progress).</p>
        </div>

      </div>
    </div>
  )
}
 
export default Works;