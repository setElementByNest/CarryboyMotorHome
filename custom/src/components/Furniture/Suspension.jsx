import React from 'react'
import './Suspension.css'

function Suspension({ numtostr, setAllData, setAllPrice, includePrice }) {
    const susPrice = [Number(includePrice.SUSSTANDARD), Number(includePrice.SUSAC)];
    const susName = ['Standard', 'AC-POWER'];
    function clicksus(x) {
        setAllData(prevState => ({...prevState, suspension: susName[x]}));
        setAllPrice(prevState => ({...prevState, suspension: susPrice[x]}));
        switch (x) {
            case 0:
                document.getElementById('suspension-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('suspension-2').style.outline = "none";
                document.getElementById('suspension-1-sub').style.display = "block";
                document.getElementById('suspension-2-sub').style.display = "none";
                document.getElementById('content-img').style.background = "url('img-custom/suspension/set_01.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 1:
                document.getElementById('suspension-1').style.outline = "none";
                document.getElementById('suspension-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('suspension-1-sub').style.display = "none";
                document.getElementById('suspension-2-sub').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/suspension/set_03.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
    }
    return (
        <div className='suspension'>
            <h2>Suspension</h2>
            <div className='suspension-list-n' id='suspension-1' onClick={() => clicksus(0)}>
                <div className='suspension-list-n-top'>
                    <h3>{susName[0]}</h3>
                    <h3>{numtostr(susPrice[0])}</h3>
                </div>
            </div>
            <div className='suspension-list-n' id='suspension-2' onClick={() => clicksus(1)}>
                <div className='suspension-list-n-top'>
                    <h3>{susName[1]}</h3>
                    <h3>{numtostr(susPrice[1])}</h3>
                </div>
            </div>
            <div className='suspension-list-n-sub' id='suspension-1-sub'>
                <li>Front shock absorber / Monotube <br /> (Explorer REVO 4wd GT-series)</li>
                <li>Front shock absorber / Monotube <br /> (Explorer REVO 4wd GT-series)</li>
                <li>Rear shock absorber / SUBTANK 8 LEVEL <br /> (Explorer REVO 4wd M16 series)</li>
                <li>Standard stabilizer arm</li>
                <li>9-10” shakle</li>
                <li>Standard leaf spring</li>
            </div>
            <div className='suspension-list-n-sub' id='suspension-2-sub'>
                <li>Front & Rear tune 2 way 2.5 shock absorber / <br /> sub-tank 8 level (AC power)</li>
                <li>Front & Rear stabilizer arm</li>
                <li>Suspension tune-up by AC power</li>
                <li>9-10” shakle</li>
                <li>Standard leaf spring</li>
            </div>
        </div>
    )
}

export default Suspension
