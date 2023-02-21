import React from 'react'
import Button from './Button'

const list = ["All","Gaming" ,"Songs","Live", "Love songs","Indian cuisine","Telugu Cinema","News" ,"cooking" ,"Valentines"  ]

const ButtonList = () => {

  return (
    <div className='flex'>
      {
        list.map((buton,index)=> <Button key={index} name={buton}/>)
      }
    </div>
  )
}

export default ButtonList;
