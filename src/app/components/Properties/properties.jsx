import React from 'react'
import './properties.css';
import house1 from '../../assests/Washington.svg'
import house2 from '../../assests/Franklin.svg'
import house3 from '../../assests/Clinton.svg'
import house4 from '../../assests/Arlington-cropped.svg'
import house5 from '../../assests/Centerville.svg'
import door from '../../assests/Home1.svg'
import key from '../../assests/Home2.svg'
import mail from '../../assests/Home3.svg'
import magnify from '../../assests/Home4.svg'
import locate from '../../assests/Map.svg'
import Image from 'next/image'
function properties() {
  return (
    <div>
        <h1 className='text-center mt-5'>
        Propertice by Area
        </h1>
        <p className='text-center font-color mt-5'>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br />
         cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>

        <div className='container'>
            <div className='row '>
                <div className='col-md-4 position-relative'>
                    <div className='position-absolute top-0 start-0 '>
                        <h6 className='text-white mx-3 mt-3'>
                        Washington
                        </h6>
                        <p className='text-white mx-3'>
                        25 listings
                        </p>

                    </div>
                    <div className='position-absolute bottom-0 start-0 mx-3'>
                    <Image src={locate} className='img-fluid mb-2'/>
                    </div>
                    <Image src={house1} className='img-fluid'/>
                </div>
                <div className='col-md-4 position-relative'>
                <div className='position-absolute top-0 start-0 '>
                        <h6 className='text-white mx-3 mt-3'>
                        Franklin
                        </h6>
                        <p className='text-white mx-3'>
                        25 listings
                        </p>

                    </div>
                    <div className='position-absolute bottom-0 start-0 mx-3'>
                    <Image src={locate} className='img-fluid mb-2'/>
                    </div>
                    <Image src={house2} className='img-fluid'/>
                </div>
                <div className='col-md-4 position-relative'>
                <div className='position-absolute top-0 start-0 '>
                        <h6 className='text-white mx-3 mt-3'>
                        Clinton
                        </h6>
                        <p className='text-white mx-3'>
                        25 listings
                        </p>

                    </div>
                    <div className='position-absolute bottom-0 start-0 mx-3'>
                    <Image src={locate} className='img-fluid mb-2'/>
                    </div>
                    <Image src={house3} className='img-fluid'/>
                </div>
            </div>
        </div>
        <br />
    
        <div className='container'>
            <div className='row '>
                <div className='col-md-8 position-relative'>
                <button class="btn border-secondary-subtle text-white  position-absolute top-50 start-50 translate-middle"
           type="submit">View Detail</button>
                <div className='position-absolute top-0 start-0 '>
                
                        <h6 className='text-white mx-3 mt-3'>
                        Washington
                        </h6>
                        <p className='text-white mx-3'>
                        25 listings
                        </p>

                    </div>
                    <div className='position-absolute bottom-0 start-0 mx-3'>
                    <Image src={locate} className='img-fluid mb-2'/>
                    </div>
                <Image src={house4} className='img-fluid'/>
                </div>
                <div className='col-md-4 position-relative'>
                <div className='position-absolute top-0 start-0 '>
                        <h6 className='text-white mx-3 mt-3'>
                        Washington
                        </h6>
                        <p className='text-white mx-3'>
                        25 listings
                        </p>

                    </div>
                    <div className='position-absolute bottom-0 start-0 mx-3'>
                    <Image src={locate} className='img-fluid mb-2'/>
                    </div>
                <Image src={house5} className='img-fluid'/>
                </div>
            </div>
        </div>
     
        <div className='bg-color mt-5'>
            <br /><br />
        <h1 className='text-center '>
        Propertice by Area
        </h1>
        <p className='text-center font-color '>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br />
         cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
        <div className='container'>
            <div className='row '>
                <div className='col-md-3 mb-5'>
                <div className='p-3 bgcol '>
                     <Image src={door}/>
                     <br /><br />
                     <h5 >Sell your home</h5>
                     <p className='font-color'>
                     We do a free evaluation to be sure you want to start selling.
                     </p>
                     <p className='fontcol'>
                     Read more
                     </p>
                 </div>
                </div>
                <div className='col-md-3'>
                <div className='p-3 '>
                     <Image src={key}/>
                     <br /><br />
                     <h5 >Rent your home</h5>
                     <p className='font-color'>
                     We do a free evaluation to be sure you want to start selling.
                     </p>
                     <p className='fontcol'>
                     Read more
                     </p>
                 </div>
                </div>
                <div className='col-md-3'>
                <div className='p-3 '>
                     <Image src={mail}/>
                     <br /> <br />
                     <h5 >Buy a home</h5>
                     <p className='font-color'>
                     We do a free evaluation to be sure you want to start selling.
                     </p>
                     <p className='fontcol'>
                     Read more
                     </p>
                 </div>
                </div>
                <div className='col-md-3'>
                <div className='p-3 '>
                     <Image src={magnify}/>
                     <br /> <br />
                    
                     <h5 >Free marketing</h5>
                     <p className='font-color'>
                     We do a free evaluation to be sure you want to start selling.
                     </p>
                     <p className='fontcol'>
                     Read more
                     </p>
                 </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default properties