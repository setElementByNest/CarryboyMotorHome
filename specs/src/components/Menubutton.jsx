import React from "react";
import './Menubutton.css'

function ballon_is_show() {
    document.getElementById('bb').style.width = '100vw';
    document.getElementById('bb').style.opacity = '1';
    bt_forshow();
}

function ballon_is_miss() {
    document.getElementById('bb').style.width = '0vw';
    document.getElementById('bb').style.opacity = '0';
    bt_forhide();
}

function bt_forshow() {
    const but1 = document.getElementById("but1");
    const but2 = document.getElementById("but2");
    const menulist = document.getElementById("menulist");
    but1.style = 'transform: rotate(90deg); opacity: 0;';
    but2.style = 'transform: rotate(90deg); opacity: 1;';
    menulist.style = 'bottom: 0vh; opacity: 1; transition: bottom 0.5s, opacity 0.5s;';
}

function bt_forhide() {
    const but1 = document.getElementById("but1");
    const but2 = document.getElementById("but2");
    const menulist = document.getElementById("menulist");
    but1.style = 'transform: rotate(0deg); opacity: 1;';
    but2.style = 'transform: rotate(0deg); opacity: 0;';
    menulist.style = 'bottom: -50vh; opacity: 0; transition: bottom 1s, opacity 0.5s;';
}

function bt_onclick() {
    let but1 = document.getElementById("but1").style.opacity;
    if(but1 != '0'){
        ballon_is_show();
    }else{
        ballon_is_miss();
    }
}

function bt_onhover() {
    if(screen.width >= 1100){
        ballon_is_show();
    }
}
function Menubutton() {
    return (
        <div className="balloon" 
        onMouseOver={bt_onhover}
        onMouseLeave={ballon_is_miss}>
            <div className="Menubutton" id="menubutton" onClick={bt_onclick}>
                <div className="fa fa-navicon" id="but1"></div>
                <div className="fa fa-close" id="but2"></div>
            </div>
            <div className="Menulist" id="menulist">
                <a href="#specs_banner">Top</a>
                <a href="#specs_interior">Interior</a>
                <a href="#specs_exterior">Exterior</a>
                <a href="#specs_option">Option</a>
                <a href="#specs_footer">Contact us</a>
            </div>
        </div>
    )
}

export default Menubutton