import React from 'react';
import { useNavigate, Link, } from 'react-router-dom'; 
import $ from 'jquery';

const Navbar = function ({ setSearchText, searchText, serachResult }){

    const navigate = useNavigate()

    const updateSearchText = function(event) {
        $('input').on("blur", (e)=> {
           
            navigate('/search')          
            setSearchText(event.target.value)            
        })
        
    }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid bg-info bg-opacity-10 pb-2 nav-content">
                <Link className="navbar-brand logo" to="/">MoviBrowser</Link>
                <button className="btn navbar-toggler mt-1" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="coldiv collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="na navbar-nav me-auto mb-2 mb-lg-0 bg-success bg-opacity-10 rounded-4 p-2 mt-1">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        
                    </ul>

                    <form className="d-flex col-lg-4" role="search">
                        <input className="in form-control form-control-md me-4 rounded-5" type="search" 
                            placeholder="Search" aria-label="Search"
                            
                             onChange={updateSearchText}/>
                        <button className="btn btn-outline-info shadow-lg g" type="Submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;