import React from 'react'
import './Battery.css'

function Battery({ numtostr, setAllData, setAllPrice, includePrice }) {
    const batPrice = [Number(includePrice.BAT1), Number(includePrice.BAT2), Number(includePrice.BAT3)];
    const batName = ['9,600 Wh', '19,200 Wh', '28,800 Wh'];
    function clickbat(x) {
        setAllData(prevState => ({...prevState, battery: batName[x]}));
        setAllPrice(prevState => ({...prevState, battery: batPrice[x]}));
        switch (x) {
            case 0:
                document.getElementById('battery-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('battery-2').style.outline = "none";
                document.getElementById('battery-3').style.outline = "none";
                document.getElementById('content-img').style.background = "url('img-custom/battery/bat_A01.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 1:
                document.getElementById('battery-1').style.outline = "none";
                document.getElementById('battery-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('battery-3').style.outline = "none";
                document.getElementById('content-img').style.background = "url('img-custom/battery/bat_A02.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 2:
                document.getElementById('battery-1').style.outline = "none";
                document.getElementById('battery-2').style.outline = "none";
                document.getElementById('battery-3').style.outline = "#aa0000 solid 2px";
                document.getElementById('content-img').style.background = "url('img-custom/battery/bat_A03.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
    }
    return (
        <div className='battery'>
            <h2>Battery</h2>
            <div className='battery-list-n' id='battery-1' onClick={() => clickbat(0)}>
                <div className='battery-list-n-top'>
                    <h3>{batName[0]}</h3>
                    <h3>{numtostr(batPrice[0])}</h3>
                </div>
            </div>
            <div className='battery-list-n' id='battery-2' onClick={() => clickbat(1)}>
                <div className='battery-list-n-top'>
                    <h3>{batName[1]}</h3>
                    <h3>{numtostr(batPrice[1])}</h3>
                </div>
            </div>
            <div className='battery-list-n' id='battery-3' onClick={() => clickbat(2)}>
                <div className='battery-list-n-top'>
                    <h3>{batName[2]}</h3>
                    <h3>{numtostr(batPrice[2])}</h3>
                </div>
            </div>
        </div>
    )
}

export default Battery
