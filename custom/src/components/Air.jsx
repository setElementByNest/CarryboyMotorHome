import React from 'react'
import './Air.css'

sessionStorage.setItem('nameair', 'DC Standard Aircon');
sessionStorage.setItem('costair', 0);

function Air({ calcost }) {
    function clickair(n, c) {
        switch (n) {
            case 'DC Standard Aircon':
                document.getElementById('air-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('air-2').style.outline = "none";
                document.getElementById('air-1-sub').style.display = "block";
                document.getElementById('air-2-sub').style.display = "none";
                document.getElementById('content-img').style.background = "url('img-custom/air/Ari-con-1.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 'HARRIER plus':
                document.getElementById('air-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('air-1').style.outline = "none";
                document.getElementById('air-1-sub').style.display = "none";
                document.getElementById('air-2-sub').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/air/Ari-con-2.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
        sessionStorage.setItem('nameair', n);
        sessionStorage.setItem('costair', c);
        calcost();
    }
    return (
        <div className='air' id='air'>
            <h2>Air Condition</h2>
            <div className='air-list-n' id='air-1' onClick={() => clickair('DC Standard Aircon', 0)}>
                <div className='air-list-n-top'>
                    <h3>DC Standard Aircon</h3>
                    <h3>Included</h3>
                </div>
            </div>
            <div className='air-list-n' id='air-2' onClick={() => clickair('HARRIER plus', 67500)}>
                <div className='air-list-n-top'>
                    <h3>HARRIER plus</h3>
                    <h3>67,500 THB</h3>
                </div>
            </div>
            <div className='air-list-n-sub' id='air-1-sub'>
                <li>Electric compressor</li>
                <li>Di-charge 150a</li>
                <li>LI-IP 800a/80a ac charger</li>
                <li>Solar roof 535w/Control car-charger 60a MTTP</li>
            </div>
            <div className='air-list-n-sub' id='air-2-sub'>
                <li>Di-charge 150a</li>
                <li>LI-IP 800a/80a ac charger</li>
                <li>Additional Aircon</li>
            </div>
        </div>
    )
}

export default Air
