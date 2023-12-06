import React from 'react'
import './Battery.css'

sessionStorage.setItem('namebat', '9,600 Wh');
sessionStorage.setItem('costbat', 0);

function Battery({ calcost }) {
    function clickbat(n, c) {
        switch (n) {
            case '9,600 Wh':
                document.getElementById('battery-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('battery-2').style.outline = "none";
                document.getElementById('battery-3').style.outline = "none";
                document.getElementById('content-img').style.background = "url('img-custom/battery/bat_A01.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case '19,200 Wh':
                document.getElementById('battery-1').style.outline = "none";
                document.getElementById('battery-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('battery-3').style.outline = "none";
                document.getElementById('content-img').style.background = "url('img-custom/battery/bat_A02.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case '28,800 Wh':
                document.getElementById('battery-1').style.outline = "none";
                document.getElementById('battery-2').style.outline = "none";
                document.getElementById('battery-3').style.outline = "#aa0000 solid 2px";
                document.getElementById('content-img').style.background = "url('img-custom/battery/bat_A03.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
        sessionStorage.setItem('namebat', n);
        sessionStorage.setItem('costbat', c);
        calcost();
    }
    return (
        <div className='battery'>
            <h2>Battery</h2>
            <div className='battery-list-n' id='battery-1' onClick={() => clickbat('9,600 Wh', 0)}>
                <div className='battery-list-n-top'>
                    <h3>9,600 Wh</h3>
                    <h3>Included</h3>
                </div>
            </div>
            <div className='battery-list-n' id='battery-2' onClick={() => clickbat('19,200 Wh', 95000)}>
                <div className='battery-list-n-top'>
                    <h3>19,200 Wh</h3>
                    <h3>95,000 THB</h3>
                </div>
            </div>
            <div className='battery-list-n' id='battery-3' onClick={() => clickbat('28,800 Wh', 190000)}>
                <div className='battery-list-n-top'>
                    <h3>28,800 Wh</h3>
                    <h3>190,000 THB</h3>
                </div>
            </div>
        </div>
    )
}

export default Battery
