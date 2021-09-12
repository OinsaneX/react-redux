import React from 'react'
import {Link} from 'react-router-dom'
import {RiAddFill} from 'react-icons/ri'
function Heading() {
    return (
        <div>
           <div className="flex items-center mb-10">
               <Link to="/">
               <h4 className="text-gray-100 font-bold">TaskApp</h4>
                </Link>
               <div className="flex-grow text-right px-4 py-2 m-2">
              <Link to="/form">
              <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                <RiAddFill/>
                   Add Employee
               </button>
               </Link>
           </div>
           </div>
         
        </div>
    )
}

export default Heading
