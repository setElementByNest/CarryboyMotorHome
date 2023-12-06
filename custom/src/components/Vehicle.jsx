import React from 'react'
import './Vehicle.css'

sessionStorage.setItem('namebrand', 'TOYOTA HILUX REVO');
sessionStorage.setItem('namevehicle', '2.4 ENTRY 2WD A/T');
sessionStorage.setItem('costvehicle', 2003000);

function Vehicle({ calcost }) {
    function onclickbrand(x) {
        document.getElementById('vehicle-topic-select-1-i').innerHTML = '&#xe835;';
        document.getElementById('vehicle-topic-select-2-i').innerHTML = '&#xe835;';
        document.getElementById('vehicle-topic-select-3-i').innerHTML = '&#xe835;';

        switch (x) {
            case 'T':
                document.getElementById('FreshWaterTank').innerHTML = 'Fresh Water Tank 120 L.';
                document.getElementById('vehicle-car1').style.display = 'flex';
                document.getElementById('vehicle-car2').style.display = 'none';
                document.getElementById('vehicle-car3').style.display = 'none';
                document.getElementById('vehicle-topic-select-1').style.background = '#ffffff';
                document.getElementById('vehicle-topic-select-2').style.background = 'none';
                document.getElementById('vehicle-topic-select-3').style.background = 'none';
                document.getElementById('vehicle-topic-select-1').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('vehicle-topic-select-2').style.boxShadow = 'none';
                document.getElementById('vehicle-topic-select-3').style.boxShadow = 'none';
                document.getElementById('vehicle-topic-select-1-i').innerHTML = '&#xe834;';
                listclick(1, 1, 'Vehicle_rv_toyota_e_01.jpg', 2003000, '2.4 ENTRY 2WD A/T');
                break
            case 'M':
                document.getElementById('FreshWaterTank').innerHTML = 'Fresh Water Tank 80 L.';
                document.getElementById('vehicle-car1').style.display = 'none';
                document.getElementById('vehicle-car2').style.display = 'flex';
                document.getElementById('vehicle-car3').style.display = 'none';
                document.getElementById('vehicle-topic-select-1').style.background = 'none';
                document.getElementById('vehicle-topic-select-2').style.background = '#ffffff';
                document.getElementById('vehicle-topic-select-3').style.background = 'none';
                document.getElementById('vehicle-topic-select-1').style.boxShadow = 'none';
                document.getElementById('vehicle-topic-select-2').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('vehicle-topic-select-3').style.boxShadow = 'none';
                document.getElementById('vehicle-topic-select-2-i').innerHTML = '&#xe834;';
                listclick(2, 1, 'Vehicle_rv_mitsu_e.jpg', 2135000, '2.4 Pro 4WD A/T');
                break
            case 'C':
                document.getElementById('FreshWaterTank').innerHTML = 'Fresh Water Tank 120 L.';
                document.getElementById('vehicle-car1').style.display = 'none';
                document.getElementById('vehicle-car2').style.display = 'none';
                document.getElementById('vehicle-car3').style.display = 'flex';
                document.getElementById('vehicle-topic-select-1').style.background = 'none';
                document.getElementById('vehicle-topic-select-2').style.background = 'none';
                document.getElementById('vehicle-topic-select-3').style.background = '#ffffff';
                document.getElementById('vehicle-topic-select-1').style.boxShadow = 'none';
                document.getElementById('vehicle-topic-select-2').style.boxShadow = 'none';
                document.getElementById('vehicle-topic-select-3').style.boxShadow = '0px 1px 4px 2px #00000022';
                document.getElementById('vehicle-topic-select-3-i').innerHTML = '&#xe834;';
                listclick(3, 1, 'Vehicle_rv_toyota_champ.jpg', 1962000, '2.4 Diesel AT LWB');
                break
        }
    }
    function listclick(x, y, z, c, n) {
        document.getElementById('vehicle-car1-list-1').style.outline = 'none';
        document.getElementById('vehicle-car1-list-2').style.outline = 'none';
        document.getElementById('vehicle-car1-list-3').style.outline = 'none';
        document.getElementById('vehicle-car1-list-4').style.outline = 'none';
        document.getElementById('vehicle-car2-list-1').style.outline = 'none';
        document.getElementById('vehicle-car3-list-1').style.outline = 'none';
        document.getElementById('vehicle-car' + x + '-list-' + y).style.outline = '#aa0000 solid 2px';
        document.getElementById('content-img').style.background = "url('img-custom/" + z + "') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
        switch (x) {
            case 1:
                sessionStorage.setItem('namebrand', 'TOYOTA HILUX REVO');
                break;
            case 2:
                sessionStorage.setItem('namebrand', 'MITSUBISHI TRITON');
                break;
            case 3:
                sessionStorage.setItem('namebrand', 'TOYOTA HILUX CHAMP');
                break;

        }
        sessionStorage.setItem('namevehicle', n);
        sessionStorage.setItem('costvehicle', c);
        calcost();
    }
    return (
        <div className='vehicle'>
            <h2>Vehicle Base</h2>
            <div className='vehicle-topic'>
                <div className='vehicle-topic-select' id='vehicle-topic-select-1' onClick={() => { onclickbrand('T') }}>TOYOTA HILUX REVO <i id='vehicle-topic-select-1-i' className="material-icons">&#xe834;</i></div>
                <div className='vehicle-topic-select' id='vehicle-topic-select-3' onClick={() => { onclickbrand('C') }}>TOYOTA HILUX CHAMP <i id='vehicle-topic-select-3-i' className="material-icons">&#xe835;</i></div>
                <div className='vehicle-topic-select' id='vehicle-topic-select-2' onClick={() => { onclickbrand('M') }}>MITSUBISHI TRITON <i id='vehicle-topic-select-2-i' className="material-icons">&#xe835;</i></div>
            </div>
            <h3>Car Model</h3>
            <div className='vehicle-car' id='vehicle-car1'>
                <div className='vehicle-car-list' id='vehicle-car1-list-1' onClick={() => { listclick(1, 1, 'Vehicle_rv_toyota_e_01.jpg', 2003000, '2.4 ENTRY 2WD A/T') }}>
                    <div className='vehicle-car1-list-name'>2.4 ENTRY 2WD A/T</div>
                    <div className='vehicle-car1-list-cost'>2,003,000 THB</div>
                </div>
                <div className='vehicle-car-list' id='vehicle-car1-list-2' onClick={() => { listclick(1, 2, 'Vehicle_rv_toyota_e_02.jpg', 2008000, '2.8 ENTRY 2WD M/T') }}>
                    <div className='vehicle-car1-list-name'>2.8 ENTRY 2WD M/T</div>
                    <div className='vehicle-car1-list-cost'>2,008,000 THB</div>
                </div>
                <div className='vehicle-car-list' id='vehicle-car1-list-3' onClick={() => { listclick(1, 3, 'Vehicle_rv_toyota_e_03.jpg', 2113000, '2.8 ENTRY 4WD M/T') }}>
                    <div className='vehicle-car1-list-name'>2.8 ENTRY 4WD M/T</div>
                    <div className='vehicle-car1-list-cost'>2,113,000 THB</div>
                </div>
                <div className='vehicle-car-list' id='vehicle-car1-list-4' onClick={() => { listclick(1, 4, 'Vehicle_rv_toyota_e_04.jpg', 2165000, '2.8 ENTRY 4WD A/T') }}>
                    <div className='vehicle-car1-list-name'>2.8 ENTRY 4WD A/T</div>
                    <div className='vehicle-car1-list-cost'>2,165,000 THB</div>
                </div>
            </div>
            <div className='vehicle-car' id='vehicle-car3'>
                <div className='vehicle-car-list' id='vehicle-car3-list-1' onClick={() => { listclick(3, 1, 'Vehicle_rv_toyota_champ.jpg', 1962000, '2.4 Diesel AT LWB') }}>
                    <div className='vehicle-car1-list-name'>2.4 Diesel AT LWB</div>
                    <div className='vehicle-car1-list-cost'>1,962,000 THB</div>
                </div>
            </div>
            <div className='vehicle-car' id='vehicle-car2'>
                <div className='vehicle-car-list' id='vehicle-car2-list-1' onClick={() => { listclick(2, 1, 'Vehicle_rv_mitsu_e.jpg', 2135000, '2.4 Pro 4WD A/T') }}>
                    <div className='vehicle-car1-list-name'>2.4 Pro 4WD A/T</div>
                    <div className='vehicle-car1-list-cost'>2,135,000 THB</div>
                </div>
            </div>
        </div>
    )
}

export default Vehicle
