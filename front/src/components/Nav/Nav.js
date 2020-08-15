import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../../icons/logo.png'
import searchIcon from '../../icons/search.png';
import usersPicture from '../../icons/profile-picture.png';




export default class Nav extends Component {
    render () {
        const data = this.props.owner;
        let content;

        if (!data) {
            content = <Link to='/users/get' className='react-Link'>
                        <button className='btn btn-outline-success'>Войти</button>
                    </Link>;

        } else if (data.admin) {
            const ava = data.avatar === 'false' ? usersPicture : data.avatar;

            content = <Link to='/adminpage' className='react-Link'>
                        <div className='nav-profile'>
                            <img src={ava} alt='Profile icon'/>
                        </div>
                    </Link>
        } else if (data._id) {
            const ava = data.avatar === 'false' ? usersPicture : data.avatar;

            content = <Link to='/owner' className='react-Link'>
                        <div className='nav-profile'>
                            <img src={ava} alt='Profile icon'/>
                        </div>
                    </Link>
        } else {
            content = null;
        }

        return (
            <header>
                <nav className="nav-bar bg-dark">
                    <div className='container d-flex justify-content-between align-items-center position-relative'>

                        <Link to='/' className='react-Link'>
                            <div className='nav-logo'>
                                <img src={logo} alt='Logotype'/>
                            </div>
                            <span className='nav-logo-text'>ProBird</span>
                        </Link>
                        
                        <div className='d-flex'>
                            <Link  to='/searching' className='react-Link'>
                                <div className='search-icon d-flex justify-content-center align-items-center'>
                                    <img src={searchIcon} alt='search icon'/>
                                </div>
                            </Link>

                            {content}

                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}