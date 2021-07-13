import React from "react";
import {Link} from 'react-router-dom'

const SidebarMenu = ({ setClosed, isStatic }) => {
  return (
    <>
    
      <div className="border-r py-4 flex-grow bg-[#1f2937]">
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-green-600 text-gray-800">
          <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
            <div className="flex items-center justify-center h-14 border-b">
              <div> </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow  bg-[#1f2937]">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5">
                  <div className="flex flex-row items-center  h-8">
                    <div className="mt-4 text-sm font-light tracking-wide text-white ">
                      Agenda de Campaña Candidatos/as
                    </div>
                  </div>
                </li>
                <li>
                      <Link
                    to="/gobernacion"
          onClick={() => setClosed(true)}
                    className="mt-4 relative flex flex-row items-center h-11 font-bold focus:outline-none hover:bg-[#111827] text-white border-l-8 border-transparent hover:border-red-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                  
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                   Gobernaciones
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alcaldia"
onClick={() => setClosed(true)}
                    className="mt-2 relative flex flex-row items-center h-11 font-bold focus:outline-none hover:bg-[#111827] text-white border-l-8 border-transparent hover:border-red-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                  
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                       Alcaldias
                    </span>
                  </Link>
                </li>
    <li>
                  <Link
                    to="/legislativos"
onClick={() => setClosed(true)}
                    className="mt-2 relative flex flex-row items-center h-11 font-bold focus:outline-none hover:bg-[#111827] text-white border-l-8 border-transparent hover:border-red-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                  
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                       Concejos Legislativos
                    </span>
                  </Link>
                </li>
   <li>
                  <Link
                    to="/concejales"
onClick={() => setClosed(true)}
                    className="mt-2 relative flex flex-row items-center h-11 font-bold focus:outline-none hover:bg-[#111827] text-white border- border-l-8 border-transparent hover:border-red-800 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                  
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                       Concejos Municipales
                    </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>{" "}
      </div>
     
    </>
  );
};
export default SidebarMenu;
