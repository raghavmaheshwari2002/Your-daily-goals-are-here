import React from 'react'
import { MdOutlineShowChart } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    
      
      <div className="flex justify-around bg-[#282828] fixed bottom-0 w-[450px]">
    
           <Link to="/" aria-current="page"> <FaFire size={25} className="m-5" /> </Link>
           <Link to="/page2"> <CgGym size={35} className="m-5" /> </Link>
           <Link to="/page3"> <IoFastFoodOutline size={30} className="m-5" /></Link>
           <Link to="/page4"> <MdOutlineShowChart size={35} className="m-5" /></Link>
            
            </div>


    
  )
}

export default Nav
