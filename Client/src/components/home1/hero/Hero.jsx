import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ICTAK' title='Project Dashboard' />
            <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET OVERVIEW DOCUMENT <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
