import React from 'react'
import './Air.css'

function Air({ numtostr, setAllData, setAllPrice, includePrice }) {
    const airPrice = [Number(includePrice.AIRSTANDARD), Number(includePrice.AIRHARRIER)];
    const airName = ['Standard', 'HARRIER plus'];
    function clickair(x) {
        setAllData(prevState => ({ ...prevState, aircon: airName[x] }));
        setAllPrice(prevState => ({ ...prevState, aircon: airPrice[x] }));
        switch (x) {
            case 0:
                document.getElementById('air-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('air-2').style.outline = "none";
                document.getElementById('air-1-sub').style.display = "block";
                document.getElementById('air-2-sub').style.display = "none";
                document.getElementById('content-img').style.background = "url('img-custom/air/Ari-con-1.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break;
            case 1:
                document.getElementById('air-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('air-1').style.outline = "none";
                document.getElementById('air-1-sub').style.display = "none";
                document.getElementById('air-2-sub').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/air/Ari-con-2.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break;
        }
    }
    return (
        <div className='air' id='air'>
            <h2>Air Condition</h2>
            <div className='air-list-n' id='air-1' onClick={() => clickair(0)}>
                <div className='air-list-n-top'>
                    <h3>{airName[0]}</h3>
                    <h3>{numtostr(airPrice[0])}</h3>
                </div>
            </div>
            <div className='air-list-n' id='air-2' onClick={() => clickair(1)}>
                <div className='air-list-n-top'>
                    <h3>{airName[1]}</h3>
                    <h3>{numtostr(airPrice[1])}</h3>
                </div>
            </div>
            <div className='air-list-n-sub' id='air-1-sub'>
                <li>Electric compressor</li>
            </div>
            <div className='air-list-n-sub' id='air-2-sub'>
                <li>Additional air condition</li>
                <li>Not comply with solar rooftop.</li>
            </div>
        </div>
    )
}

export default Air
