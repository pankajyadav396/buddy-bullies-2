import React from 'react'
import Navbar from './Nav'
import shadowimg from '../assets/images/bnglaa-img-foot.png'

const Header = () => {
    return (
        <div className='header-bg-img position-relative z-1 '>
            <div className="container">
                <Navbar />
                <div data-aos="fade-up-right" className="d-flex flex-column justify-content-center vh-100">
                    <h1 className="mw-515 fs-xxl fw-normal pb-2 pb-md-4 text-white m-0 ff-poppins ">Vitae nunc,<span className="fw-bold"> blandit a odio </span></h1>
                    <p className="mw-408 lh-41 text-white fw-medium pb-3 pb-md-5 opcity-7 ff-poppins ">Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin
                        feugiat
                        ut odio
                        semper.
                        Mattis fermentum eget ut vestibulum dolor diam</p>
                    <div>          <button className="nav-btn fs-lg1 fw-medium drkblue mb-1 ff-poppins">Get Started</button>
                    </div>
                </div>
            </div>
            <img className='shadowimg w-100' src={shadowimg} alt="#" />
        </div>
    )
}

export default Header