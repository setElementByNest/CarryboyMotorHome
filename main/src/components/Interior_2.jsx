import React from 'react'
import './Interior_2.css'
import jsonData from './DataPopup.json'

function interior2bg(n) {
    document.getElementById('interior-select-1').style.border = "#cccccc solid 2px";
    document.getElementById('interior-select-2').style.border = "#cccccc solid 2px";
    document.getElementById('interior-select-3').style.border = "#cccccc solid 2px";
    document.getElementById('interior-select-4').style.border = "#cccccc solid 2px";
    document.getElementById('interior-select-5').style.border = "#cccccc solid 2px";
    document.getElementById('interior-select-6').style.border = "#cccccc solid 2px";
    document.getElementById('interior2pinset1').style.display = "none";
    document.getElementById('interior2pinset2').style.display = "none";
    document.getElementById('interior2pinset3').style.display = "none";
    document.getElementById('interior2pinset4').style.display = "none";
    document.getElementById('interior2pinset5').style.display = "none";

    switch (n) {
        case 1:
            document.getElementById('pinbt').style.display = "flex";
            document.getElementById('interior2img').style.background = "url('/img_index/interior_1.jpg') no-repeat";
            document.getElementById('interior2img').style.backgroundPosition = "top center";
            document.getElementById('interior2img').style.backgroundSize = "cover";
            document.getElementById('interior-select-1').style.border = "#cc0000 solid 2px";
            document.getElementById('interior2pinset1').style.display = "block";
            document.getElementById('iframe360interior').style.display = "none";
            document.getElementById('iframe360toilet').style.display = "none";
            document.getElementById('interior2pinset').style.display = "flex";
            break;
        case 2:
            document.getElementById('pinbt').style.display = "flex";
            document.getElementById('interior2img').style.background = "url('/img_index/interior_2.jpg') no-repeat";
            document.getElementById('interior2img').style.backgroundPosition = "top center";
            document.getElementById('interior2img').style.backgroundSize = "cover";
            document.getElementById('interior-select-2').style.border = "#cc0000 solid 2px";
            document.getElementById('interior2pinset2').style.display = "block";
            document.getElementById('iframe360interior').style.display = "none";
            document.getElementById('iframe360toilet').style.display = "none";
            document.getElementById('interior2pinset').style.display = "flex";
            break;
        case 3:
            document.getElementById('pinbt').style.display = "flex";
            document.getElementById('interior2img').style.background = "url('/img_index/exterior_1.jpg') no-repeat";
            document.getElementById('interior2img').style.backgroundPosition = "top center";
            document.getElementById('interior2img').style.backgroundSize = "cover";
            document.getElementById('interior-select-3').style.border = "#cc0000 solid 2px";
            document.getElementById('interior2pinset3').style.display = "block";
            document.getElementById('iframe360interior').style.display = "none";
            document.getElementById('iframe360toilet').style.display = "none";
            document.getElementById('interior2pinset').style.display = "flex";
            break;
        case 4:
            document.getElementById('pinbt').style.display = "flex";
            document.getElementById('interior2img').style.background = "url('/img_index/exterior_2.jpg') no-repeat";
            document.getElementById('interior2img').style.backgroundPosition = "top center";
            document.getElementById('interior2img').style.backgroundSize = "cover";
            document.getElementById('interior-select-4').style.border = "#cc0000 solid 2px";
            document.getElementById('interior2pinset4').style.display = "block";
            document.getElementById('iframe360interior').style.display = "none";
            document.getElementById('iframe360toilet').style.display = "none";
            document.getElementById('interior2pinset').style.display = "flex";
            break;
        case 5:
            document.getElementById('pinbt').style.display = "none";
            document.getElementById('interior2img').style.background = "none";
            document.getElementById('interior2img').style.backgroundPosition = "center center";
            document.getElementById('interior2img').style.backgroundSize = "cover";
            document.getElementById('interior-select-5').style.border = "#cc0000 solid 2px";
            document.getElementById('iframe360interior').style.display = "flex";
            document.getElementById('iframe360toilet').style.display = "none";
            document.getElementById('interior2pinset').style.display = "none";
            break;
        case 6:
            document.getElementById('pinbt').style.display = "none";
            document.getElementById('interior2img').style.background = "none";
            document.getElementById('interior2img').style.backgroundPosition = "center center";
            document.getElementById('interior2img').style.backgroundSize = "cover";
            document.getElementById('interior-select-6').style.border = "#cc0000 solid 2px";
            document.getElementById('iframe360interior').style.display = "none";
            document.getElementById('iframe360toilet').style.display = "flex";
            document.getElementById('interior2pinset').style.display = "none";
            break;
    }
}

function Interior_2() {
    function lostpin() {
        if (document.getElementById('pinbt').innerHTML == 'ซ่อนหมุด') {
            document.getElementById('interior2pinset').style.opacity = '0';
            document.getElementById('pinbt').innerHTML = 'แสดงหมุด';
        } else {
            document.getElementById('interior2pinset').style.opacity = '1';
            document.getElementById('pinbt').innerHTML = 'ซ่อนหมุด';
        }
    }
    function clickpop(partA, partB) {
        let data = jsonData[partA][0][partB];
        let npage = jsonData[partA][0][partB]["npage"];
        sessionStorage.setItem('npage', npage)
        console.log(npage);
        document.body.style.overflow = 'hidden';
        let i = 0;
        for (i = 1; i < (npage + 1); i++) {
            document.getElementById('popup').style.display = 'flex';
            document.getElementById('popupimg' + i).style.background = "url(/img_index/" + data["page0" + i]["img"] + ")";
            document.getElementById('popupimg' + i).style.backgroundPosition = 'center center';
            document.getElementById('popupimg' + i).style.backgroundSize = 'cover';
            document.getElementById('popuphead' + i).innerHTML = data["page0" + i]["head"];
            document.getElementById('popupdetail' + i).innerHTML = data["page0" + i]["detail"];
        }
        document.getElementById('scrollpopupl').style.opacity = '0'
        if (npage == 1) {
            document.getElementById('scrollpopupR').style.opacity = '0'
            document.getElementById('noticslide').style.opacity = '0'
        } else {
            document.getElementById('scrollpopupR').style.opacity = '1'
            document.getElementById('noticslide').style.opacity = '1'
        }
        for (let j = 1; j < 10; j++) {
            document.getElementById('popupbox' + j).style.display = 'flex'
            if(j <= 4){
                document.getElementById('npage' + j).style.display = 'flex'
            }
        }
        for (let i = npage; i < 9; i++) {
            document.getElementById('popupbox' + (i + 1)).style.display = 'none'
            if(i <= 4){
                document.getElementById('npage' + (i + 1)).style.display = 'none'
            }
        }
        document.getElementById('npage1').style.outline = '#ffffffdd solid 0.2vw'
        document.getElementById('npage2').style.outline = '#ffffff00 solid 0.2vw'
        document.getElementById('npage3').style.outline = '#ffffff00 solid 0.2vw'
        document.getElementById('npage4').style.outline = '#ffffff00 solid 0.2vw'
        document.getElementById('npage5').style.outline = '#ffffff00 solid 0.2vw'
    }
    return (
        <div className='interior2' id='interior2'>
            <div className='interior2-content'>
                <div id='interior2-load' className='interior2-load'></div>
                <div className='interior2-img' id='interior2img'>
                    <iframe style={{ width: '100%', height: '100%', borderRadius: '10px', display: 'none' }} src="https://app2.ricoh360.com/viewer/47c6b4f9-a01d-4ee9-aff1-5078c09eb931" id='iframe360interior' frameBorder="0" allowFullScreen></iframe>
                    <iframe style={{ width: '100%', height: '100%', borderRadius: '10px', display: 'none' }} src="https://app2.ricoh360.com/viewer/5dbcb194-cfd4-4558-9964-6f2c6cf74a86" id='iframe360toilet' frameBorder="0" allowFullScreen></iframe>
                    <div id='interior2pinset'>
                        <div className='interior2-pinset1' id='interior2pinset1'>
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '16%', left: '67%' }} onClick={() => clickpop('interiorfront', 'compartment')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '16%', left: '28%' }} onClick={() => clickpop('interiorfront', 'mirror')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '43%', left: '50%' }} onClick={() => clickpop('interiorfront', 'basin')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '40%', left: '43%' }} onClick={() => clickpop('interiorfront', 'toilet')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '38%', left: '59%' }} onClick={() => clickpop('interiorfront', 'wardrobe')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '50%', left: '30%' }} onClick={() => clickpop('interiorfront', 'accessory')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '60%', left: '60%' }} onClick={() => clickpop('interiorfront', 'bed')} />
                        </div>
                        <div className='interior2-pinset2' id='interior2pinset2'>
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '28%', left: '50%' }} onClick={() => clickpop('interiorbottom', 'sky')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '42%', left: '50%' }} onClick={() => clickpop('interiorbottom', 'bedunderdriver')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '60%', left: '55%' }} onClick={() => clickpop('interiorbottom', 'curtain')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '45%', left: '80%' }} onClick={() => clickpop('interiorbottom', 'window')} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '90%', left: '15%' }} onClick={() => clickpop('interiorbottom', 'plug')} />
                        </div>
                        <div className='interior2-pinset3' id='interior2pinset3'>
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '21%', left: '53%' }} onClick={() => clickpop('exteriorfront', 'sky')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '33%', left: '33%' }} onClick={() => clickpop('exteriorfront', 'window')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '55%', left: '25%' }} onClick={() => clickpop('exteriorfront', 'sewage')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '55%', left: '34%' }} onClick={() => clickpop('exteriorfront', 'battery')} />
                        </div>
                        <div className='interior2-pinset4' id='interior2pinset4'>
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '19%', left: '46%' }} onClick={() => clickpop('exteriorbottom', 'awning')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '34%', left: '74%' }} onClick={() => clickpop('exteriorbottom', 'back')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '64%', left: '70%' }} onClick={() => clickpop('exteriorbottom', 'boxback')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '45%', left: '53%' }} onClick={() => clickpop('exteriorbottom', 'door')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '56%', left: '45%' }} onClick={() => clickpop('exteriorbottom', 'exshower')} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '70%', left: '54%' }} onClick={() => clickpop('exteriorbottom', 'step')} />
                        </div>
                        <div className='interior2-pinset5' id='interior2pinset5' style={{ display: 'none' }}>
                            <h3 style={{
                                position: 'absolute',
                                bottom: '0',
                                color: '#ffffff',
                                padding: '20px',
                                fontSize: '20px',
                                display: 'none'
                            }}>360° Parking Cam - มั่นใจใจทุกการจอด</h3>
                        </div>
                    </div>
                    <div className='interior2-img-pinbt' id='pinbt' onClick={lostpin}>ซ่อนหมุด</div>
                </div>
                <div className='interior2-select'>
                    <h2>INTERIOR</h2>
                    <div className='chooseselect'>
                        <div onClick={() => { interior2bg(1) }} className='interior-select-text' id='interior-select-1'>View 1</div>
                        <div onClick={() => { interior2bg(2) }} className='interior-select-text' id='interior-select-2'>View 2</div>
                        <div onClick={() => { interior2bg(5) }} className='interior-select-text' id='interior-select-5'>360° View</div>
                        <div onClick={() => { interior2bg(6) }} className='interior-select-text' id='interior-select-6'style={{display: 'none'}}>Toilet</div>
                    </div>
                    <h2>EXTERIOR</h2>
                    <div className='chooseselect'>
                        <div onClick={() => { interior2bg(3) }} className='interior-select-text' id='interior-select-3'>View 1</div>
                        <div onClick={() => { interior2bg(4) }} className='interior-select-text' id='interior-select-4'>View 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interior_2
