import React from 'react'
import logo from '../../assests/Footer-logo.svg'
import pic1 from '../../assests/Facebook-footer.svg'
import pic2 from '../../assests/Internet-footer.svg'
import pic3 from '../../assests/LinkedIn-footer.svg'
import pic4 from '../../assests/Instagram-footer.svg'
import pic5 from '../../assests/Be-footer.svg'
import Image from 'next/image'
function footer() {
    return (
        <div>
            <div className='container'>
                <div className='row '>
                    <div className='col-md-4'>
                        <Image src={logo} className='img-fluid mt-5 mb-3' />
                        <p>Call : +123 400 123</p>
                        <p>Praesent nulla massa, hendrerit <br />
                            vestibulum gravida in, feugiat auctor felis.</p>
                        <p>Email: example@mail.com</p>
                        <div className='d-flex gap-3'>
                            <Image src={pic1} className='img-fluid' />
                            <Image src={pic2} className='img-fluid' />
                            <Image src={pic3} className='img-fluid' />
                            <Image src={pic4} className='img-fluid' />
                            <Image src={pic5} className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-2 mt-5'>
                        <h4>
                            Features
                        </h4>
                        <p>
                            Home
                        </p>
                        <p>
                            Become a Host
                        </p>
                        <p>
                            Pricing
                        </p>
                        <p>
                            Blog
                        </p>
                        <p>
                            Contact
                        </p>
                    </div>

                    <div className='col-md-2 mt-5'>
                        <h4>
                            Company
                        </h4>
                        <p>
                            About Us
                        </p>
                        <p>
                            Press
                        </p>
                        <p>
                            Contact
                        </p>
                        <p>
                            Careers
                        </p>
                        <p>
                            Blog
                        </p>
                    </div>

                    <div className='col-md-4 mt-5'>
                        <h5>
                            Team and policies
                        </h5>
                        <p>
                            Terms of servies
                        </p>
                        <p>
                            Privacy Policy
                        </p>
                        <p>
                            Security
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default footer