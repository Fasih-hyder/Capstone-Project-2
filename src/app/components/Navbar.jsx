import React from 'react'
import './navbar.css';
import toogle from '../../app/assests/Sort.svg'
import First from '../../app/assests/logo.svg'
import Email from '../../app/assests/Frame 80.svg'
import pic1 from '../../app/assests/Facebook.svg'
import pic2 from '../../app/assests/Network.svg'
import pic3 from '../../app/assests/LinkedIn.svg'
import pic4 from '../../app/assests/Instagram.svg'
import pic5 from '../../app/assests/Be.svg'
import Contact from '../../app/assests/Frame 81.svg'
import rent from '../../app/assests/SaleRent.svg'
import icon from '../../app/assests/down.svg'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div class="position-relative bg-image">
        <div className=''>

       
        
        <div className='mt-2 ps-5 px-5  first-nav position-absolute top-0 d-flex justify-content-between bodrbotm '>
          <div>
            <Image src={Email} className='faltoDiv' />
          </div>
          <div className='d-flex '>
            <Image src={pic1} className='faltoDiv' />
            <Image src={pic2} className='faltoDiv' />
            <Image src={pic3} className='faltoDiv' />
            <Image src={pic4} className='faltoDiv' />
            <Image src={pic5} className='faltoDiv' />
            <Image src={Contact} className='mt-2 faltoDiv' />
          </div>
        
        </div>
     
        <nav class=" navbar navbar-expand-lg position-absolute top-0 start-0 mt-5 tex-center  ">

          <div class="container-fluid ">

            <a class="navbar-brand ps-5 logoH" href="#"><Image src={First} /></a>
            <button class="navbar-toggler btntg "
              type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class=" "><Image src={toogle} className='img-fluid'/></span>
            </button>
            <div class="collapse navbar-collapse naVmargin items " id="navbarSupportedContent">
              <ul class="navbar-nav   mt-3 gap-2">
                <li class="nav-item">
                  <a class="nav-link active text-white " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">OUR AGENTS</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" href="./pages/Property">  PROPERTIES</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">GALLERY</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">BLOG</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">CONTACT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">SEARCH</a>
                </li>
              </ul>

              <button class="btn border-secondary-subtle text-white px-3" type="submit">Add Listing</button>
            </div>

          </div>
        </nav>

          <div className=' text-white text-center px-2 position-absolute top-50 start-50 translate-middle'>
          <h1 className=' heading'>Find Your Dream Home</h1>
          
          <p className='dnone '>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere <br /> cubilia curae; Proin sodales ultrices nulla blandit volutpat.
          </p>
        </div>
        <div className='navbar1'>
        <div className=' position-absolute bottom-0 start-50 translate-middle-x btnmargin '>
          <Image src={rent} className='img-fluid  ' width={150} />
        </div>
        </div>
        </div>
        <div className="container position-card translate-middle-x">
          <div className="container-fluid">
            <div className="row bg-color">
              <div className="col-md-3">
                <div className="ps-4">
                  <h5>Locations</h5>
                  <span>Select your city</span>
                  <Image src={icon} className="ms-3" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="border-card ps-3 card-p">
                  <h5>Property Type</h5>
                  <span>Select property type</span>
                  <Image src={icon} className="ms-3" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="border-card ps-3 card-p">
                  <h5>Rent Range</h5>
                  <span>Select rent range</span>
                  <Image src={icon} className="ms-3" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="ps-5 pt-3 border-card">
                  <button className="btn1">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      <br /> <br /><br />
    </div>


  )
}

export default Navbar;

