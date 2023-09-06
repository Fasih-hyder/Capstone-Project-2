import Image from 'next/image'
import React from 'react'
import "./page.css"
import imgnav1 from "../../assests/Frame 80.svg"
import imgnav2 from "../../assests/Facebook.svg"
import imgnav3 from "../../assests/Network.svg"
import imgnav4 from "../../assests/LinkedIn.svg"
import imgnav5 from "../../assests/Instagram.svg"
import imgnav6 from "../../assests/Be.svg"
import imgnav8 from "../../assests/Frame 81.svg"

export const Nav1page2 = () => {
    return (
        <div className='bg'>
            <div className='container '>
                <div className='row faltoDiv'>
                    <div className='col-md-6'>
                        <div className='mt-3'>
                            <Image src={imgnav1} className='img-fluid'  />
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <div className='float-end'>
                            <Image src={imgnav2} />
                            <Image src={imgnav3} />
                            <Image src={imgnav4} />
                            <Image src={imgnav5} />
                            <Image src={imgnav6} />
                            <Image src={imgnav8} className='ms-5'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar1Page2
