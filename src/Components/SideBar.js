import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    //early return
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-56'>
        <ul>
           <Link to='/'> <li className='flex'><img className= "w-8 h-7 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsh-UAHDAyt4t60fBW2nb489S8YknfuY9xkg&usqp=CAU" alt="home"/> Home</li> </Link>
            <li className='flex'> <img className= "w-8 h-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeeKFFJ6X3FZVt2qTf48Z9YGUKeKHstcV3E0ZHdHIhIyWiH7Oi3Jv3dHbTPxSva7bwbE&usqp=CAU" alt="shorts"/>Shorts</li>
            <li className='flex'><img className= "w-8 p-2 h-7" src="https://cdn-icons-png.flaticon.com/512/1051/1051350.png" alt="videos" /> Videos</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li> Music</li>
            <li> Sports</li>
            <li> Gaming</li>
            <li> Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li> Music</li>
            <li> Sports</li>
            <li> Gaming</li>
            <li> Movies</li>
        </ul>
    </div>
  )
}

export default SideBar