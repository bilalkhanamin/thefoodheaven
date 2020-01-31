import React from 'react'
import ExperienceChefs from '../Components/Experience_chefs'
import Footer from '../Components/Footer'
import pageBg from '../images/fooven/page2.jpg'

function ChefsPage() {
    return (
        <>
                    <div className="page-wrapper">

            <div className="page" style={{backgroundImage: `url(${pageBg})`}}>
        <h1>Meet our experience chefs</h1>
      </div>
      </div>
       <ExperienceChefs />
      <Footer />
        </ >
    )
}

export default ChefsPage
