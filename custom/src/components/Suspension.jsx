import React from 'react'
import './Suspension.css'

sessionStorage.setItem('namesus', 'Standard');
sessionStorage.setItem('costsus', 0);

function Suspension({ calcost }) {
    function clicksus(n, c) {
        switch (n) {
            case 'Standard':
                document.getElementById('suspension-1').style.outline = "#aa0000 solid 2px";
                document.getElementById('suspension-2').style.outline = "none";
                document.getElementById('suspension-1-sub').style.display = "block";
                document.getElementById('suspension-2-sub').style.display = "none";
                document.getElementById('content-img').style.background = "url('img-custom/suspension/set_01.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
            case 'AC-POWER':
                document.getElementById('suspension-1').style.outline = "none";
                document.getElementById('suspension-2').style.outline = "#aa0000 solid 2px";
                document.getElementById('suspension-1-sub').style.display = "none";
                document.getElementById('suspension-2-sub').style.display = "block";
                document.getElementById('content-img').style.background = "url('img-custom/suspension/set_03.jpg') center center no-repeat";
                document.getElementById('content-img').style.backgroundSize = "cover";
                break
        }
        sessionStorage.setItem('namesus', n);
        sessionStorage.setItem('costsus', c);
        calcost();
    }
    return (
        <div className='suspension'>
            <h2>Suspension</h2>
            <div className='suspension-list-n' id='suspension-1' onClick={() => clicksus('Standard', 45000)}>
                <div className='suspension-list-n-top'>
                    <h3>Standard</h3>
                    <h3>Included</h3>
                </div>
            </div>
            <div className='suspension-list-n' id='suspension-2' onClick={() => clicksus('AC-POWER', 95000)}>
                <div className='suspension-list-n-top'>
                    <h3>AC-POWER</h3>
                    <h3>95,000 THB</h3>
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
