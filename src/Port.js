import React from 'react'
import Kuda from './Image/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/container.svg'
import KudaIcon from './Image/stacksantos.dev by html.to.design ❤️ FREE version - 18/12/.svg'
import './Port.css'

const Port = () => {
  return (
    <div className='KudaPort'>
        <div className='Head'>
           <img src={Kuda} alt="" className='Kud'/>
           <div className='icon'>
           <img src={KudaIcon} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Port