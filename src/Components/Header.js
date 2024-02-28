import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark sticky-top" id='game-nav' data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3" to="#">Games<span style={{color:"yellow"}}>Wallah</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <div className="d-flex" role="search">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active mx-5 fs-5" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-5 fs-5" to="/games">Games</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-5 fs-5" to="/shop">Shop</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
)
}

export default header

