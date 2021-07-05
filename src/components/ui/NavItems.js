import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import {Link} from 'react-router-dom'
const NavItems = ({ isStatic, isClosed, setClosed }) => {
     

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }
 const [isOpen,setIsOpen] = React.useState(false)
 const [scroll] = React.useState(false)
    return(
  <>
     <div active={scroll} className=" flex h-16 z-50 bg-gray-100 border-b border-red-200 dark:border-brown-six   px-6 grid grid-cols-3" style={{position: 'sticky',top: '0', }}>
     
 <div className="flex items-center">
       {!isStatic &&
            (isClosed ? (
            <button
             tabIndex="1"
              aria-hidden={isClosed}
              className="w-10 p-1"
              aria-label="Open menu"
              title="Open menu"
              onClick={() => setClosed(false)}
            >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="6" width="20" height="2" rx="1" fill="#AC562A"/>
<rect x="4" y="12" width="20" height="2" rx="1" fill="#AC562A"/>
<rect x="4" y="18" width="20" height="2" rx="1" fill="#AC562A"/>
</svg>
            </button>
          ) : (
            <button
              tabIndex="1"
              className="w-10 p-1"
              aria-label="Close menu"
              title="Close menu"
              onClick={() => setClosed(true)}
            >
             <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="6" width="16" height="2" rx="1" fill="#AC562A"/>
<rect x="4" y="12" width="11" height="2" rx="1" fill="#AC562A"/>
<rect x="4" y="18" width="16" height="2" rx="1" fill="#AC562A"/>
<path d="M17.8352 14.2C17.3503 13.8 17.3503 13.057 17.8352 12.657L22.1637 9.087C22.8159 8.54904 23.8 9.01298 23.8 9.85845L23.8 16.9985C23.8 17.844 22.8159 18.308 22.1637 17.77L17.8352 14.2Z" fill="#AC562A"/>
</svg>
            </button>
          ))}
  <img className="pl-4 w-32"  src="/psuv.png" alt="logo"/>
 

    </div>
 
      


    <div className="flex items-center justify-left"> </div>

    <div className="flex items-center justify-end">
      
      <p className="text-red-600 dark:text-[#ed80le] text-lg font-medium bg-white px-2 py-2 rounded-md mr-2">
        {name}
      </p>


     
      <button aria-label="config" className="text-white  bg-[#1e5fab] px-2 py-2 rounded-md "  onClick={ hanleLogout }>
   
     Salir 
  
        </button>
    
    </div>
</div>
  </>
  );
}
export default NavItems
