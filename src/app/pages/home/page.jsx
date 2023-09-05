
import Navbar from '@/app/components/Navbar.jsx';
import Properties from '@/app/components/Properties/properties.jsx';
import Cards from '@/app/components/Cards/cards.jsx';
import Houses from '@/app/components/Houses/houses.jsx';
import Footer from '@/app/components/Footer/footer.jsx';
import React from 'react'

const Homepage=() => {
  return (
    <>
     
    <Navbar/>
    <Properties/>
    <Cards/>
    <Houses/>
    <Footer/>
    </>
  )
}

export default Homepage;
