import React from "react";
import { Dropdown } from 'antd';
import './Nav.css'

function Nav() {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/pdf/2024-Motorhome-Toyota-Hilux-Revo.pdf">
                    Motorhome Hilux
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/pdf/2024-Motorhome-Mitsubishi-Triton.pdf">
                    Motorhome Triton
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="/pdf/Carryboy-Slide-In-Camper.pdf">
                    Slide-in Camper
                </a>
            ),
        },
    ];
    return (
        <div className="nav">
            <div className="nav-content">
                <img src="/img_index/logo.png" alt="motorhome_logo" height={25} onClick={function () {
                    window.location.href = 'https://carryboymotorhome.com/'
                }} />

                <div className="list_desktop">
                    <a title="Home" href='https://carryboymotorhome.com/'>Overview</a>
                    <a title="Video" href='https://carryboymotorhome.com/videopage.html'>Video Guide</a>
                    <a title="Build your RV" href='https://carryboymotorhome.com/buildrv.html'>Build your RV</a>
                    <a title="gallery" href='https://carryboymotorhome.com/gallery.html'>Gallery</a>
                    <a title="Contact" href='https://carryboymotorhome.com/contact.html'>Contact</a>
                    <Dropdown menu={{items}} placement="bottomRight" arrow >
                        <a>Brochure</a>
                    </Dropdown>
                    <div title="Thai" className="nav-a-lang" onClick={() => { window.location.href = "main-th.html" }}>ภาษาไทย</div>
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
            </div>

            <div className='navmobile' id='navmobile'>
                <a href='https://carryboymotorhome.com/' >Overview</a>
                <a href='https://carryboymotorhome.com/videopage.html'>Video Guide</a>
                <a href='https://carryboymotorhome.com/buildrv.html' >Build your RV</a>
                <a href='https://carryboymotorhome.com/gallery.html'>Gallery</a>
                <a href='https://carryboymotorhome.com/contact.html'>Contact</a>
                <a href='/pdf/2024-Motorhome-Toyota-Hilux-Revo.pdf' target="_blank" ><i className="material-icons" style={{margin: '0 5px 0 0'}}>&#xe24d;</i>Motorhome Hilux</a>
                <a href='/pdf/2024-Motorhome-Mitsubishi-Triton.pdf' target="_blank" ><i className="material-icons" style={{margin: '0 5px 0 0'}}>&#xe24d;</i>Motorhome Triton</a>
                <a href='/pdf/Carryboy-Slide-In-Camper.pdf' target="_blank" ><i className="material-icons" style={{margin: '0 5px 0 0'}}>&#xe24d;</i>Slide-in Camper</a>
                <a href='main-th.html'>ภาษาไทย</a>
            </div>
        </div>
    )
}

export default Nav