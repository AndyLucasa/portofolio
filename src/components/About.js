import React from 'react';
import MyMenu from './MyDropdown';
import ReadMore from './ReadMore';
import me2 from './../assets/me2.png';
import '../styles/App.css';


function Content() {
  return (
    <div className="About bg-transparent pl-48 h-full grid grid-cols-3 z-10"> 
      <div className="Image col-span-1  ">
        <img data-aos="fade-right" data-aos-duration="1600" className="animate-imagein h-full w-11/12 object-cover rounded-lg shadow-2xl" src={me2} alt="Me"/>
      </div>
      <div className=" col-span-2  ">
        <div className="Menu absolute ml-96 pl-64 pr-12 pb-44 h-20 w-20  ">
            <MyMenu/>
        </div>
        <div className="Text w-4/5 mx-10 mt-28">

            <h1 data-aos="fade-left" data-aos-duration="600"className="text-left text-4xl font-extrabold font-karla text-gray-800">AMBININTSOA</h1>

            <h1 data-aos="fade-left" data-aos-duration="1000"className="text-left text-4xl font-extrabold font-karla text-purple-700">LUCAS</h1>

            <h2 data-aos="fade-left" data-aos-duration="1300"className=" text-left text-base font-base font-poppins py-6">Branch - IGGLIA 3</h2>

            <p data-aos="zoom-in" data-aos-duration="1300" className="text-left text-base font-light font-rubik tracking-tighter">
            My name is Andy Lucas,  I have a Technical Baccalaureate certificate in Electronics and I am currently a student at the Institut Supérieur Polytechnique de Madagascar (ISPM) 
             in the 3rd year of the Computer Science, Software Engineering and Artificial Intelligence programme (IGGLIA).
            </p>

            <ReadMore/>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="3000"className="absolute bg-purple-700 h-1 w-28 ml-64 mt-44 rounded-lg">

      </div>
      
    </div>
  );
  
}


export default Content;