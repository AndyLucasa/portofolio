import React from 'react';
import About from './About'
import Contacts from './Contacts';
import Projects from './Projetcs';
import Works from './Works';
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/App.css';
//NON RESPONSIVE
AOS.init();
function App() {
  return (
    <div className="App relative h-screen z-20 grid grid-cols-7 bg-gray-100"> 
      <div className=" py-8 pl-6 pr-28 h-screen col-span-2 bg-purple-700">
      </div>
      <div className="col-span-5 "></div>
      <div className="absolute w-full h-screen pr-10 ">
        <Contacts></Contacts>

        <About ></About>
      </div>
      <Projects></Projects>
      <Works></Works>
    </div>
  );
}

export default App;
