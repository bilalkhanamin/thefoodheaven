import React from 'react'
import Landing from '../Components/Landing';
import ExclusiveDishes from '../Components/Exclusive_dishes';
import About from '../Components/About';
import Delicious from '../Components/Delicious';
import ExperienceChefs from '../Components/Experience_chefs';
import TasteBest from '../Components/Taste_best';
import BookTable from '../Components/Book_table';
import Customer from '../Components/Customer';
import Blogs from '../Components/Blogs';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

function Homepage() {
    return (
        <div>
            <Landing />
        <ExclusiveDishes />
        <About />
        <Delicious />
        <TasteBest />
        <ExperienceChefs />
        <BookTable />
        <Customer />
        <Blogs />
        <Contact />
        <Footer />
        </div>
    )
}

export default Homepage
