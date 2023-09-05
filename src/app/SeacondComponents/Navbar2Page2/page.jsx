import React from 'react'
import "./page2.css"
import logo from '../../assests/Footer-logo.svg'
import bgimg from '../../assests/Property-bgimg.svg'
import Image from 'next/image'
import Script from 'next/script'
function Nav2Page2() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand" href="#">
                <Image src={logo} />
              </a>
              <button
                class="navbar-toggler nav-bg text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse naVmargin nav1 " id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class="nav-item">
                  <a class="nav-link active  " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">OUR AGENTS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="#">Properties</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">GALLERY</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">BLOG</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">CONTACT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">SEARCH</a>
                </li>
              </ul>

              </div>
            </nav>
            <div className='position-relative' >
              <Image src={bgimg} className='img-fluid'/>
              <h3 className='text-white position-absolute top-50 start-50 translate-middle'>Property</h3>
              <p className='text-white position-absolute top-50 start-50 translate-middle mt-3'>Home / Properties</p>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    </div>
  )
}

export default Nav2Page2