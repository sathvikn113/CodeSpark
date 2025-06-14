import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/eductator/NavBar'
//import {SideBar} from '../../components/eductator/SideBar'
const Educator = () => {
  return (
    <div>
      <NavBar/>
  //<SideBar/>
      <div>
{<Outlet/>}
      </div>
    </div>
  )
}

export default Educator
