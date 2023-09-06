import React from 'react'
import './house.css';
import house1 from '../../assests/Group 1-cropped.svg';
import house2 from '../../assests/Group 2.svg'
import house3 from '../../assests/Group 3.svg'
import house4 from '../../assests/Group 4.svg'
import house5 from '../../assests/Group 5-cropped.svg'
import Image from 'next/image'
function houses() {
  return (
    <div>
      <div className='text-center mt-5'>
        <h1>
          Letest Properties of Rent
        </h1>
        <p className='font-color'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br />
          cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
      </div>
      <div className='d-flex  '>
        
       
        <div className=''></div>
        <div className=' position-relative images '>
          <Image src={house1}  className='img-fluid px-2 ' />
          <button class="btn border-secondary-subtle text-white ms-5  position-absolute top-50 start-50 translate-middle btans"
           type="submit">View Detail</button>
          </div>
        <div className=''><Image src={house2}  className='img-fluid px-2' /></div>
        <div className=''><Image src={house3} className='img-fluid px-2' /></div>
        <div className=''> <Image src={house4} className='img-fluid px-2' /></div>
        <div className=''><Image src={house5} className='img-fluid mt-3 '/></div>


      </div>
      
      <div className='position-relative bg-footer'>
      
      <div className='position-absolute top-50 start-50 translate-middle text-center styles  '>
      <h1 className='text-white styles '>
      Find Best Place For Living
      </h1>
      <p className='text-white styles '>Spend vacations in best hotels and resorts find the great place of your <br />
         choice using different searching options.</p>
         <button class="btn border-secondary-subtle text-white px-3 " type="submit">Contact us</button>
      </div>
      
      </div>


    </div>
  )
}

export default houses
