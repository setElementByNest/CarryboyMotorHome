import React from 'react'
import './Vehicle.css'

function Vehicle({ numtostr, setAllData, setAllPrice, includePrice }) {
    const vehiclePrice = [Number(includePrice.REVO2WDAT), Number(includePrice.REVO2WDMT), Number(includePrice.REVO4WDMT), Number(includePrice.REVO4WDAT), Number(includePrice.CHAMP4WDAT), Number(includePrice.TRITON4WDAT)];
    //const vehiclePrice = [2038000, 2043000, 2148000, 2200000, 1997000, 2170000];
    const vehicleName = ['2.4 ENTRY 2WD A/T', '2.8 ENTRY 2WD M/T', '2.8 ENTRY 4WD M/T', '2.8 ENTRY 4WD A/T', '2.4 Diesel AT LWB', '2.4 Pro 4WD A/T'];
    const brandName = ['TOYOTA HILUX REVO', 'TOYOTA HILUX CHAMP', 'MITSUBISHI TRITON'];
    const vihicleImg = ['Vehicle_rv_toyota_e_01.jpg', 'Vehicle_rv_toyota_e_02.jpg', 'Vehicle_rv_toyota_e_03.jpg', 'Vehicle_rv_toyota_e_04.jpg', 'Vehicle_rv_toyota_champ.jpg', 'Vehicle_rv_mitsu_e.jpg'];
    function onclickbrand(x) {
        document.getElementById('vehicle-topic-select-1-i').innerHTML = '&#xe835;';
        document.getElementById('vehicle-topic-select-2-i').innerHTML = '&#xe835;';
        document.getElementById('vehicle-topic-select-3-i').innerHTML = '&#xe835;';
        setAllData(prevState => ({ ...prevState, brand: brandName[x] }));
        switch (x) {
            case 0:
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
                listclick(0);
                break
            case 1:
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
                listclick(4);
                break
            case 2:
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
                listclick(5);
                break
        }
    }
    function listclick(x) {
        setAllData(prevState => ({ ...prevState, model: vehicleName[x] }));
        setAllPrice(prevState => ({ ...prevState, model: vehiclePrice[x] }));
        document.getElementById('vehicle-carlist-1').style.outline = 'none';
        document.getElementById('vehicle-carlist-2').style.outline = 'none';
        document.getElementById('vehicle-carlist-3').style.outline = 'none';
        document.getElementById('vehicle-carlist-4').style.outline = 'none';
        document.getElementById('vehicle-carlist-4').style.outline = 'none';
        document.getElementById('vehicle-carlist-6').style.outline = 'none';
        document.getElementById('vehicle-carlist-' + (x + 1)).style.outline = '#aa0000 solid 2px';
        document.getElementById('content-img').style.background = "url('img-custom/" + vihicleImg[x] + "') center center no-repeat";
        document.getElementById('content-img').style.backgroundSize = "cover";
    }
    return (
        <div className='vehicle'>
            <h2>Vehicle Base</h2>
            <div className='vehicle-topic'>
                <div className='vehicle-topic-select' id='vehicle-topic-select-1' onClick={() => { onclickbrand(0) }}>TOYOTA HILUX REVO <i id='vehicle-topic-select-1-i' className="material-icons">&#xe834;</i></div>
                <div className='vehicle-topic-select' id='vehicle-topic-select-3' onClick={() => { onclickbrand(1) }}>TOYOTA HILUX CHAMP <i id='vehicle-topic-select-3-i' className="material-icons">&#xe835;</i></div>
                <div className='vehicle-topic-select' id='vehicle-topic-select-2' onClick={() => { onclickbrand(2) }}>MITSUBISHI TRITON <i id='vehicle-topic-select-2-i' className="material-icons">&#xe835;</i></div>
            </div>
            <h3>Car Model</h3>
            <div className='vehicle-car' id='vehicle-car1'>
                <div className='vehicle-car-list' id='vehicle-carlist-1' onClick={() => { listclick(0) }}>
                    <div className='vehicle-car1-list-name'>{vehicleName[0]}</div>
                    <div className='vehicle-car1-list-cost'>{numtostr(vehiclePrice[0])}</div>
                </div>
                <div className='vehicle-car-list' id='vehicle-carlist-2' onClick={() => { listclick(1) }}>
                    <div className='vehicle-car1-list-name'>{vehicleName[1]}</div>
                    <div className='vehicle-car1-list-cost'>{numtostr(vehiclePrice[1])}</div>
                </div>
                <div className='vehicle-car-list' id='vehicle-carlist-3' onClick={() => { listclick(2) }}>
                    <div className='vehicle-car1-list-name'>{vehicleName[2]}</div>
                    <div className='vehicle-car1-list-cost'>{numtostr(vehiclePrice[2])}</div>
                </div>
                <div className='vehicle-car-list' id='vehicle-carlist-4' onClick={() => { listclick(3) }}>
                    <div className='vehicle-car1-list-name'>{vehicleName[3]}</div>
                    <div className='vehicle-car1-list-cost'>{numtostr(vehiclePrice[3])}</div>
                </div>
            </div>
            <div className='vehicle-car' id='vehicle-car3'>
                <div className='vehicle-car-list' id='vehicle-carlist-5' onClick={() => { listclick(4) }}>
                    <div className='vehicle-car1-list-name'>{vehicleName[4]}</div>
                    <div className='vehicle-car1-list-cost'>{numtostr(vehiclePrice[4])}</div>
                </div>
            </div>
            <div className='vehicle-car' id='vehicle-car2'>
                <div className='vehicle-car-list' id='vehicle-carlist-6' onClick={() => { listclick(5) }}>
                    <div className='vehicle-car1-list-name'>{vehicleName[5]}</div>
                    <div className='vehicle-car1-list-cost'>{numtostr(vehiclePrice[5])}</div>
                </div>
            </div>
        </div>
    )
}

export default Vehicle
