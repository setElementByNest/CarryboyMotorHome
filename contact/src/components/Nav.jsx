import React from "react";
import './Nav.css'

function Nav() {
    return (
        <div>
            <nav>
                <img src="./img_contact/logo.png" alt="motorhome_logo" height={25} onClick={function () {
                    window.location.href = 'https://carryboymotorhome.com/'
                }} />

                <div className="list_desktop">
                    <a title="Home" href='https://carryboymotorhome.com/'>Overview</a>
                    <a title="Video Guide" href='https://carryboymotorhome.com/videopage.html'>Video Guide</a>
                    <a title="Build your RV" href='https://carryboymotorhome.com/build-rv/'>Build your RV</a>
                    <a title="gallery" href='https://carryboymotorhome.com/gallery.html'>Gallery</a>
                    <a title="Contact" href='https://carryboymotorhome.com/contact.html'>Contact</a>
                </div>
                <div className="list_phone">
                    <div style={{ display: 'none' }}><i className="fa fa-globe" /> TH</div>
                    <a className="nav-open fa fa-navicon" id="nav_open" onClick={function () {
                        document.getElementById('navmobile').style.right = 0;
                        document.getElementById('nav_open').style.display = 'none';
                        document.getElementById('nav_close').style.display = 'inline-flex';
                    }} style={{ fontSize: '20px' }}></a>
                    <a className="nav-close fa fa-remove" id="nav_close" onClick={function () {
                        document.getElementById('navmobile').style.right = '-150%';
                        document.getElementById('nav_open').style.display = 'inline-flex';
                        document.getElementById('nav_close').style.display = 'none';
                    }} style={{ fontSize: '20px' }}></a>
                </div>
            </nav>

            <div className='navmobile' id='navmobile'>
                <a href='https://carryboymotorhome.com/' >Overview</a>
                <a href='https://carryboymotorhome.com/videopage.html'>Video Guide</a>
                <a href='https://carryboymotorhome.com/build-rv/' >Build your RV</a>
                <a href='https://carryboymotorhome.com/gallery.html'>Gallery</a>
                <a href='https://carryboymotorhome.com/contact.html'>Contact</a>
            </div>
        </div>
    )
}

export default Nav