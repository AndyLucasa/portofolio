import React from 'react';
import MyMenu from './MyDropdown';
import '../styles/App.css';

function Content() {
  return (
    <div className="About bg-transparent h-full grid grid-cols-3 z-10"> 
      <div className="Image col-span-1  bg-gray-800">
        <img className="h-full w-full object-cover rounded-lg shadow-2xl" src="/assets/me2.png" alt=""Andy_Lucas/>
      </div>
      <div className=" col-span-2 ">
        <div className="Menu absolute ml-96 pl-64 pr-12 pb-44 h-20 w-20  ">
            <MyMenu/>
        </div>
        <div className="Text w-4/5 mx-16 mt-28">

            <h1 className="text-left text-4xl font-extrabold font-karla text-gray-800">AMBININTSOA</h1>

            <h1 className="text-left text-4xl font-extrabold font-karla text-purple-700">LUCAS</h1>

            <h2 className=" text-left text-base font-base font-poppins py-6">Branch - IGGLIA 3</h2>

            <p className="text-left text-base font-light font-rubik tracking-tighter">
            My name is Andy Lucas,  I have a Technical Baccalaureate certificate in Electronics and I am currently a student at the Institut Supérieur Polytechnique de Madagascar (ISPM) 
             in the 3rd year of the Computer Science, Software Engineering and Artificial Intelligence programme (IGGLIA).
            </p>
            <button class="flex justify-start my-8 px-7 py-2 text-md text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2">Read more</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Content;