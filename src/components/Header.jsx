import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand px-md-5" href="#"><img src="logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-evenly " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CHEFS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MENU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACTS</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="best">
                <h1>BEST QUALITY FOOD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum alias consequuntur molestias soluta fugiat.</p>
                <a href="">BOOK A TABLE</a>
            </div>
        </div>
    )
}
