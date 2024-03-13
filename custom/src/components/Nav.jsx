import React from "react";
import './Nav.css'

function Nav({ numtostr, allPrice }) {
    function toFt() {
        document.documentElement.scrollTop = document.getElementById('ft').offsetTop - 30;
    }
    return (
        <div>
            <nav>
                <img src="/img-custom/logo.png" alt="motorhome_logo" height={25} style={{ cursor: 'pointer' }} onClick={function () {
                    window.location.href = 'https://carryboymotorhome.com/'
                }} />

                <div className="list_desktop">
                    <a title="Home" href='https://carryboymotorhome.com/'>Overview</a>
                    <a title="Video" href='https://carryboymotorhome.com/videopage.html'>Video Guide</a>
                    <a title="Build your RV" href='https://carryboymotorhome.com/buildrv.html'>Build your RV</a>
                    <a title="gallery" href='https://carryboymotorhome.com/gallery.html'>Gallery</a>
                    <a title="Contact" href='https://carryboymotorhome.com/contact.html'>Contact</a>
                </div>
                <div className="list_phone">
                    <div style={{ display: 'none' }}><i className="fa fa-globe" /> TH</div>
                    <a className="nav-open fa fa-navicon" id="nav_open" onClick={function () {
                        document.getElementById('navmobile').style.right = 0;
                        document.getElementById('nav_open').style.display = 'none';
                        document.getElementById('nav_close').style.display = 'inline-flex';
                        document.body.style.overflowY = 'hidden'
                    }} style={{ fontSize: '20px' }}></a>
                    <a className="nav-close fa fa-remove" id="nav_close" onClick={function () {
                        document.getElementById('navmobile').style.right = '-150%';
                        document.getElementById('nav_open').style.display = 'inline-flex';
                        document.getElementById('nav_close').style.display = 'none';
                        document.body.style.overflowY = 'scroll'
                    }} style={{ fontSize: '20px' }}></a>
                </div>
                <div className="nav-cost" id="nav-cost"><i style={{
                    margin: '0 10px 0 0',
                    fontSize: '13px',
                    fontWeight: '300',
                    display: screen.width < 1100 ? 'flex' : 'none'
                }}>Total price</i>{
                    numtostr(allPrice.model + allPrice.laminate + allPrice.reartype + allPrice.aircon + allPrice.battery + allPrice.powergen + allPrice.rearbox + allPrice.kitchen + allPrice.suspension)
                }</div>
            </nav>

            <div className='navmobile' id='navmobile'>
                <a href='https://carryboymotorhome.com/' >Overview</a>
                <a href='https://carryboymotorhome.com/videopage.html'>Video Guide</a>
                <a href='https://carryboymotorhome.com/buildrv.html' >Build your RV</a>
                <a href='https://carryboymotorhome.com/gallery.html'>Gallery</a>
                <a href='https://carryboymotorhome.com/contact.html'>Contact</a>
            </div>
        </div>
    )
}

export default Nav