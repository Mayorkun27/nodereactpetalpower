import React from 'react'
import Herosection from '../components/Herosection'
import Oneplace from '../components/Homecomponents/Oneplace'
import Categories from '../components/Homecomponents/Categories'
import Newplants from '../components/Homecomponents/Newplants'
import NewCollection from '../components/Homecomponents/NewCollection'
import AboutUs from '../components/Homecomponents/About'
import Faq from '../components/Homecomponents/Faq'
import Footer from '../components/Footer'

const Home = () => {

    return (

        <>
            <Herosection />
            <Oneplace />
            <Categories />
            <Newplants />
            <NewCollection />
            <AboutUs />
            <Faq />
            <Footer />
        </>

    )
}

export default Home
