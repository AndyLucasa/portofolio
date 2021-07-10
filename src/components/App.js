import React from 'react';
import About from './About'
import Contacts from './Contacts';
import '../styles/App.css';

function App() {
  return (
    <div className="App relative h-screen z-20 grid grid-cols-7 bg-gray-100"> 
      <div className="py-8 pl-6 pr-28 h-full col-span-2 bg-purple-700">
        <Contacts></Contacts>
      </div>
      <div className="col-span-5 "></div>
      <div className="absolute w-full h-full py-8 pl-72 pr-10 ">
        <About></About>
      </div>
    </div>
  );
}

export default App;
