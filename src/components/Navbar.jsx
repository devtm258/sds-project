import React from 'react'
import {navlinks} from './index.js'


const Navbar = () => {
    
  return (
    <nav>
    <div className="flex flex-col items-center pt-4">
      
    
      <ul>
        {navlinks.map((link)=>(
            <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
            </li>
        ))}

    </ul>

    </div>
    </nav>



  )
}

export default Navbar
