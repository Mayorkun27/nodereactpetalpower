import React from 'react'
import Herosection from '../components/Contactcomponents/Herosection'
import Footer from '../components/Footer'
import Contactform from '../components/Contactcomponents/Contactform'

const Contact = () => {

  return (

    <>
      <Herosection />
      <Contactform />
      <Footer optStyle={"hidden"} />
    </>

  )
}

export default Contact
