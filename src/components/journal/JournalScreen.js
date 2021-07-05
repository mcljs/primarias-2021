import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { useSelector } from 'react-redux';


export const JournalScreen = () => {

    const { active } = useSelector( state => state.notes );


    return (
        <div 
            className=" animate__animated animate__fadeIn animate__faster"
        >
              <div className="m-auto max-w-6xl p-12 pt-20 ">
          
      <header>
      <h1 className="flex flex-col items-center">
        <h1 className="mt-2 mb-8 font-extrabold text-center tracking-tight text-[#e41e25] lg:text-4xl sm:text-3xl text-2xl">Inicio</h1>
        <hr className="nt-8 border-t-2 w-20 mx-auto"/>
      </h1>
    
     
    </header>





</div>


         


        </div>
    )
}
