import React, { useState } from 'react'
import './Interior_2.css'
import jsonData from '../json/DataPopupTH.json'

function Interior_2() {
    const nameImg = [
        "url('/img_index/interior_1.jpg')",
        "url('/img_index/interior_2.jpg')",
        "url('/img_index/exterior_1.jpg')",
        "url('/img_index/exterior_2.jpg')",
    ]
    const [nowPageImg, setNowPageImg] = useState(1);
    const [nowShow, setShow] = useState(false);
    const [nowSelect, setSelect] = useState('');
    const [nowPin, setPin] = useState('');
    const [nowHidePin, setHidePin] = useState(true);
    const [now3D, set3D] = useState(false);
    const [nowPage, setPage] = useState('1');
    return (
        <div className='interior2' id='interior2'>
            <div className='interior2-content'>
                <div id='interior2-load' className='interior2-load'></div>
                <div className='interior2-img'  style={{backgroundImage: nameImg[nowPage - 1]}}>
                    <div className="interior2-showlist" style={{
                        transform: nowShow ? 'translate(0%, 0)' : 'translate(-110%, 0)',
                        backgroundImage: nowShow ? "url(/img_index/" + jsonData[nowSelect][0][nowPin]["page0" + String(nowPageImg)]["img"] + ")" : "#000000",
                        display: jsonData ? "" : "none"
                    }}>
                        <div className='interior2-img-pinbt' onClick={() => {setShow(false); setNowPageImg(1)}}>ปิด</div>
                        <div style={{display: nowShow ? jsonData[nowSelect][0][nowPin]["npage"] > 1 ? "block" : "none" : 'none'}}>
                            <div className="interior2-img-bt itibtL" onClick={() => {nowPageImg < jsonData[nowSelect][0][nowPin]["npage"] ? setNowPageImg(nowPageImg + 1) : setNowPageImg(1)}}><i className="material-icons">&#xe5cb;</i></div>
                            <div className="interior2-img-bt itibtR" onClick={() => {nowPageImg > 1 ? setNowPageImg(nowPageImg - 1) : setNowPageImg(jsonData[nowSelect][0][nowPin]["npage"])}}><i className="material-icons">&#xe5cc;</i></div>
                        </div>
                    </div>
                    <iframe style={{ width: '100%', height: '100%', borderRadius: '10px',  display: nowPage == 5 ? "flex" : "none"}} src="https://app2.ricoh360.com/viewer/47c6b4f9-a01d-4ee9-aff1-5078c09eb931" id='iframe360interior' frameBorder="0" allowFullScreen></iframe>
                    <iframe style={{ width: '100%', height: '100%', borderRadius: '10px', display: 'none' }} src="https://app2.ricoh360.com/viewer/5dbcb194-cfd4-4558-9964-6f2c6cf74a86" id='iframe360toilet' frameBorder="0" allowFullScreen></iframe>
                    <div id='interior2pinset' style={{display: nowHidePin && !now3D ? "flex" : "none"}}>
                        <div className='interior2-pinset1' style={{display: nowPage == 1 ? "flex" : "none"}}>
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '16%', left: '67%' }} onClick={() => { setShow(true); setSelect('interiorfront'); setPin('compartment') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '16%', left: '28%' }} onClick={() => { setShow(true); setSelect('interiorfront'); setPin('mirror') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '43%', left: '50%' }} onClick={() => { setShow(true); setSelect('interiorfront'); setPin('basin') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '40%', left: '43%' }} onClick={() => { setShow(true); setSelect('interiorfront'); setPin('toilet') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '38%', left: '59%' }} onClick={() => { setShow(true); setSelect('interiorfront'); setPin('wardrobe') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '50%', left: '30%' }} onClick={() => { setShow(true); setSelect('interiorfront'); setPin('accessory') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '60%', left: '60%' }} onClick={() => { setShow(true); setSelect('interiorfront'); setPin('bed') }} />
                        </div>
                        <div className='interior2-pinset2' style={{display: nowPage == 2 ? "flex" : "none"}}>
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '28%', left: '50%' }} onClick={() => { setShow(true); setSelect('interiorbottom'); setPin('sky') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '42%', left: '50%' }} onClick={() => { setShow(true); setSelect('interiorbottom'); setPin('bedunderdriver') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '60%', left: '55%' }} onClick={() => { setShow(true); setSelect('interiorbottom'); setPin('curtain') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '45%', left: '80%' }} onClick={() => { setShow(true); setSelect('interiorbottom'); setPin('window') }} />
                            <img src="/img_index/pin_red.png" alt="" className="pin" style={{ top: '90%', left: '15%' }} onClick={() => { setShow(true); setSelect('interiorbottom'); setPin('plug') }} />
                        </div>
                        <div className='interior2-pinset3' style={{display: nowPage == 3 ? "flex" : "none"}}>
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '21%', left: '53%' }} onClick={() => { setShow(true); setSelect('exteriorfront'); setPin('sky') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '33%', left: '33%' }} onClick={() => { setShow(true); setSelect('exteriorfront'); setPin('window') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '55%', left: '25%' }} onClick={() => { setShow(true); setSelect('exteriorfront'); setPin('sewage') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '55%', left: '34%' }} onClick={() => { setShow(true); setSelect('exteriorfront'); setPin('battery') }} />
                        </div>
                        <div className='interior2-pinset4' style={{display: nowPage == 4 ? "flex" : "none"}}>
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '19%', left: '46%' }} onClick={() => { setShow(true); setSelect('exteriorbottom'); setPin('awning') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '34%', left: '74%' }} onClick={() => { setShow(true); setSelect('exteriorbottom'); setPin('back') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '64%', left: '70%' }} onClick={() => { setShow(true); setSelect('exteriorbottom'); setPin('boxback') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '45%', left: '53%' }} onClick={() => { setShow(true); setSelect('exteriorbottom'); setPin('door') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '56%', left: '45%' }} onClick={() => { setShow(true); setSelect('exteriorbottom'); setPin('exshower') }} />
                            <img src="/img_index/pin_ma.png" alt="" className="pin" style={{ top: '70%', left: '54%' }} onClick={() => { setShow(true); setSelect('exteriorbottom'); setPin('step') }} />
                        </div>
                    </div>
                    <div className='interior2-img-pinbt' style={{display: now3D ? "none" : "flex"}} onClick={() => {setHidePin(!nowHidePin)}}>{nowHidePin ? "ซ่อนหมุด" : "แสดงหมุด"}</div>
                    {/* <div className='interior2-img-pinbt' id='pinbt' onClick={lostpin}>ซ่อนหมุด</div> */}
                </div>
                <div className='interior2-select'>
                    <h2>INTERIOR</h2>
                    <div className='chooseselect'>
                        <div onClick={() => { setPage(1); setShow(false); setNowPageImg(1); set3D(false)}} className='interior-select-text' style={{borderBottom: nowPage == 1 ? "#cc0000 solid 2px" : "#cccccc solid 1px", padding: nowPage == 1 ? "2px 5px 1px" : "2px 5px 2px"}} >View 1</div>
                        <div onClick={() => { setPage(2); setShow(false); setNowPageImg(1); set3D(false)}} className='interior-select-text' style={{borderBottom: nowPage == 2 ? "#cc0000 solid 2px" : "#cccccc solid 1px", padding: nowPage == 2 ? "2px 5px 1px" : "2px 5px 2px"}} >View 2</div>
                        <div onClick={() => { setPage(5); setShow(false); setNowPageImg(1); set3D(true)}} className='interior-select-text' style={{borderBottom: nowPage == 5 ? "#cc0000 solid 2px" : "#cccccc solid 1px", padding: nowPage == 5 ? "2px 5px 1px" : "2px 5px 2px"}} >360° View</div>
                    </div>
                    <h2>EXTERIOR</h2>
                    <div className='chooseselect'>
                        <div onClick={() => { setPage(3); setShow(false); setNowPageImg(1); set3D(false)}} className='interior-select-text' style={{borderBottom: nowPage == 3 ? "#cc0000 solid 2px" : "#cccccc solid 1px", padding: nowPage == 3 ? "2px 5px 1px" : "2px 5px 2px"}} >View 1</div>
                        <div onClick={() => { setPage(4); setShow(false); setNowPageImg(1); set3D(false)}} className='interior-select-text' style={{borderBottom: nowPage == 4 ? "#cc0000 solid 2px" : "#cccccc solid 1px", padding: nowPage == 4 ? "2px 5px 1px" : "2px 5px 2px"}} >View 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interior_2
