import {useEffect, useState} from 'react'
// import Navbar from './Navbar'
import { Outlet,useNavigate } from 'react-router-dom'

function Home() {

  return (
    <div className=''>
      <Outlet />
    </div>
  )
}

export default Home 